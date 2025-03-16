import {
  JiggleConfig,
  JiggleError,
  validateConfig,
  calculateMousePosition,
  DEFAULT_CONFIG,
} from '../index'

jest.mock('robotjs', () => ({
  setMouseDelay: jest.fn(),
  getScreenSize: jest.fn(() => ({ width: 1920, height: 1080 })),
  moveMouse: jest.fn(),
}))

describe('JiggleGenius', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation((): void => { /* no-op */ })
    jest.spyOn(console, 'error').mockImplementation((): void => { /* no-op */ })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('validateConfig', () => {
    it('should accept valid configuration', () => {
      const validConfig: JiggleConfig = {
        duration: 30,
        radius: 10,
        speed: 5,
      }
      expect(() => validateConfig(validConfig)).not.toThrow()
    })

    it('should throw error for invalid duration', () => {
      const invalidConfig: JiggleConfig = {
        ...DEFAULT_CONFIG,
        duration: -1,
      }
      expect(() => validateConfig(invalidConfig)).toThrow(JiggleError)
      expect(() => validateConfig(invalidConfig)).toThrow('Duration must be a positive number')
    })

    it('should throw error for invalid radius', () => {
      const invalidConfig: JiggleConfig = {
        ...DEFAULT_CONFIG,
        radius: 0,
      }
      expect(() => validateConfig(invalidConfig)).toThrow(JiggleError)
      expect(() => validateConfig(invalidConfig)).toThrow('Radius must be a positive number')
    })

    it('should throw error for invalid speed', () => {
      const invalidConfig: JiggleConfig = {
        ...DEFAULT_CONFIG,
        speed: 11,
      }
      expect(() => validateConfig(invalidConfig)).toThrow(JiggleError)
      expect(() => validateConfig(invalidConfig)).toThrow('Speed must be a number between 1 and 10')
    })

    it('should throw error for non-numeric values', () => {
      const invalidConfig = {
        ...DEFAULT_CONFIG,
        duration: '30' as unknown as number,
      }
      expect(() => validateConfig(invalidConfig)).toThrow(JiggleError)
    })
  })

  describe('calculateMousePosition', () => {
    it('should calculate correct position for angle 0', () => {
      const position = calculateMousePosition(100, 100, 0, 10)
      expect(position.x).toBe(110) // cos(0) = 1
      expect(position.y).toBe(100) // sin(0) = 0
    })

    it('should calculate correct position for angle 90 degrees', () => {
      const position = calculateMousePosition(100, 100, Math.PI / 2, 10)
      expect(position.x).toBe(100) // cos(90) = 0
      expect(position.y).toBe(110) // sin(90) = 1
    })

    it('should calculate correct position for angle 180 degrees', () => {
      const position = calculateMousePosition(100, 100, Math.PI, 10)
      expect(position.x).toBe(90)  // cos(180) = -1
      expect(position.y).toBe(100) // sin(180) = 0
    })

    it('should round calculated positions', () => {
      const position = calculateMousePosition(100, 100, Math.PI / 4, 10) // 45 degrees
      expect(Number.isInteger(position.x)).toBe(true)
      expect(Number.isInteger(position.y)).toBe(true)
    })

    it('should handle negative radius', () => {
      const position = calculateMousePosition(100, 100, 0, -10)
      expect(position.x).toBe(90)
      expect(position.y).toBe(100)
    })
  })
})
