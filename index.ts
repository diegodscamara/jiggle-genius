#!/usr/bin/env node

import robot from 'robotjs'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

/**
 * Configuration interface for the jiggle parameters
 */
interface JiggleConfig {
	duration: number
	radius: number
	speed: number
}

/**
 * Validates the input parameters for the jiggle function
 * @param config - The configuration object to validate
 * @throws {Error} If any parameters are invalid
 */
function validateConfig(config: JiggleConfig): void {
	if (config.duration <= 0) {
		throw new Error('Duration must be greater than 0 minutes')
	}
	if (config.radius <= 0) {
		throw new Error('Radius must be greater than 0 pixels')
	}
	if (config.speed <= 0) {
		throw new Error('Speed must be greater than 0')
	}
}

/**
 * Moves the mouse in a circular pattern to prevent screen timeout
 * @param config - Configuration object containing duration, radius, and speed parameters
 * @returns Promise that resolves when the jiggling is complete
 */
async function jiggleGenius(config?: Partial<JiggleConfig>): Promise<void> {
	try {
		// Parse command line arguments
		const argv = await yargs(hideBin(process.argv))
			.options({
				duration: {
					alias: 'd',
					description: 'Duration in minutes',
					type: 'number',
					default: 30,
				},
				radius: {
					alias: 'r',
					description: 'Radius of the circular movement in pixels',
					type: 'number',
					default: 10,
				},
				speed: {
					alias: 's',
					description: 'Movement speed (1-10)',
					type: 'number',
					default: 2,
				},
			})
			.help()
			.alias('help', 'h')
			.version()
			.argv

		const jiggleConfig: JiggleConfig = {
			duration: config?.duration ?? argv.duration,
			radius: config?.radius ?? argv.radius,
			speed: config?.speed ?? argv.speed,
		}

		validateConfig(jiggleConfig)

		const startTime = new Date()
		const endTime = new Date(startTime.getTime() + jiggleConfig.duration * 60000)

		// Configure robot
		robot.setMouseDelay(2)
		const screenSize = robot.getScreenSize()
		const centerX = screenSize.width / 2
		const centerY = screenSize.height / 2

		console.log(`Starting Jiggle Genius...`)
		console.log(`Duration: ${jiggleConfig.duration} minutes`)
		console.log(`End Time: ${endTime.toLocaleTimeString()}`)
		console.log('Press Ctrl+C to stop\n')

		let angle = 0
		const intervalId = setInterval(() => {
			const x = centerX + jiggleConfig.radius * Math.cos(angle)
			const y = centerY + jiggleConfig.radius * Math.sin(angle)
			
			robot.moveMouse(Math.round(x), Math.round(y))
			angle += (Math.PI / 180) * jiggleConfig.speed

			if (Date.now() >= endTime.getTime()) {
				clearInterval(intervalId)
				console.log('\nJiggle session completed!')
			}
		}, 50)

		// Handle graceful shutdown
		process.on('SIGINT', () => {
			clearInterval(intervalId)
			console.log('\nJiggle session stopped by user')
			process.exit(0)
		})

	} catch (error) {
		console.error('Error:', error instanceof Error ? error.message : 'An unknown error occurred')
		process.exit(1)
	}
}

export default jiggleGenius

// Run the function if this module is executed directly
if (require.main === module) {
	jiggleGenius()
}
