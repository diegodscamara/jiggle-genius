const robotjs = {
  setMouseDelay: jest.fn(),
  getScreenSize: jest.fn(() => ({ width: 1920, height: 1080 })),
  moveMouse: jest.fn(),
}

export default robotjs
