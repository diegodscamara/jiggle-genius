const jiggleGenius = require('../index')

describe('jiggleGenius', () => {
	it('should be a function', () => {
		expect(jiggleGenius).toBeInstanceOf(Function)
	})

	it('should move the mouse', () => {
		// You can write a test case that checks if the mouse moves here.
		// This might involve mocking some of the robotjs functions.
	})

	it('should stop after a specified duration', async () => {
		const duration = 1 // 1 minute

		// Mock the Date object to control time
		const originalDateNow = Date.now
		Date.now = jest.fn(() => 0) // Start at time 0

		// Call the jiggleGenius function asynchronously
		const jigglePromise = jiggleGenius()

		// Advance time to simulate the specified duration
		Date.now = jest.fn(() => duration * 60000)

		await jigglePromise // Wait for the function to finish

		// Restore the original Date.now function
		Date.now = originalDateNow

		// You can assert here to check if the mouse movement stops after the specified duration
	})
})
