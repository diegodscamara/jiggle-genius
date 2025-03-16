#!/usr/bin/env node

import robot from 'robotjs'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

/**
 * Configuration interface for the jiggle parameters
 */
export interface JiggleConfig {
  duration: number
  radius: number
  speed: number
}

/**
 * Error class for jiggle-specific validation errors
 */
export class JiggleError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'JiggleError'
  }
}

/**
 * Default configuration values
 */
export const DEFAULT_CONFIG: JiggleConfig = {
  duration: 30,
  radius: 10,
  speed: 2,
}

/**
 * Validates the input parameters for the jiggle function
 * @param config - The configuration object to validate
 * @throws {JiggleError} If any parameters are invalid
 */
export function validateConfig(config: JiggleConfig): void {
  if (typeof config.duration !== 'number' || config.duration <= 0) {
    throw new JiggleError('Duration must be a positive number')
  }
  if (typeof config.radius !== 'number' || config.radius <= 0) {
    throw new JiggleError('Radius must be a positive number')
  }
  if (typeof config.speed !== 'number' || config.speed <= 0 || config.speed > 10) {
    throw new JiggleError('Speed must be a number between 1 and 10')
  }
}

/**
 * Calculates the next mouse position based on the current angle and configuration
 */
export function calculateMousePosition(
  centerX: number,
  centerY: number,
  angle: number,
  radius: number
): { x: number; y: number } {
  return {
    x: Math.round(centerX + radius * Math.cos(angle)),
    y: Math.round(centerY + radius * Math.sin(angle)),
  }
}

/**
 * Logs a message to the console
 * @param message - The message to log
 */
function log(message: string): void {
  console.info(message)
}

/**
 * Moves the mouse in a circular pattern to prevent screen timeout
 * @param config - Configuration object containing duration, radius, and speed parameters
 * @returns Promise that resolves when the jiggling is complete
 */
export async function jiggleGenius(config?: Partial<JiggleConfig>): Promise<void> {
  try {
    // Parse command line arguments
    const argv = await yargs(hideBin(process.argv))
      .options({
        duration: {
          alias: 'd',
          description: 'Duration in minutes',
          type: 'number',
          default: DEFAULT_CONFIG.duration,
        },
        radius: {
          alias: 'r',
          description: 'Radius of the circular movement in pixels',
          type: 'number',
          default: DEFAULT_CONFIG.radius,
        },
        speed: {
          alias: 's',
          description: 'Movement speed (1-10)',
          type: 'number',
          default: DEFAULT_CONFIG.speed,
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

    log('Starting Jiggle Genius...')
    log(`Duration: ${jiggleConfig.duration} minutes`)
    log(`End Time: ${endTime.toLocaleTimeString()}`)
    log('Press Ctrl+C to stop\n')

    let angle = 0
    const intervalId = setInterval(() => {
      const position = calculateMousePosition(centerX, centerY, angle, jiggleConfig.radius)
      robot.moveMouse(position.x, position.y)
      angle += (Math.PI / 180) * jiggleConfig.speed

      if (Date.now() >= endTime.getTime()) {
        clearInterval(intervalId)
        log('\nJiggle session completed!')
        process.exit(0)
      }
    }, 50)

    // Handle graceful shutdown
    process.on('SIGINT', () => {
      clearInterval(intervalId)
      log('\nJiggle session stopped by user')
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
  void jiggleGenius()
}
