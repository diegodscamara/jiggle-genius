import robot from 'robotjs'
import yargs from 'yargs'

/**
 * Generates a jiggle genius function that moves the mouse in a circular pattern.
 *
 * @param {number} duration - Duration in minutes
 * @returns {void}
 */
async function jiggleGenius(): Promise<void> {
	const argv = await yargs
		.option('duration', {
			alias: 'd',
			description: 'Duration in minutes',
			type: 'number',
			default: 30,
		})
		.help()
		.alias('help', 'h').argv

	const duration: number = argv.duration * 60000
	const startTime: Date = new Date()
	const endTime: Date = new Date(startTime.getTime() + Number(duration))

	robot.setMouseDelay(2)

	const twoPI: number = Math.PI * 2.0
	const screenSize: { height: number; width: number } = robot.getScreenSize()
	const height: number = screenSize.height / 2 - 10
	const width: number = screenSize.width

	let i: number = 0

	const intervalId: NodeJS.Timeout = setInterval(() => {
		const x: number = height * Math.cos((twoPI * i) / width) + height
		const y: number = height * Math.sin((twoPI * i) / width) + height
		robot.moveMouse(x, y)
		i += 1
		if (Date.now() >= endTime.getTime()) {
			clearInterval(intervalId)
		}
	}, 0)
}

export default jiggleGenius

// Run the function if this module is executed directly from the command line
if (require.main === module) {
	jiggleGenius()
}
