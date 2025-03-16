declare module 'robotjs' {
  interface ScreenSize {
    width: number
    height: number
  }

  export function setMouseDelay(delay: number): void
  export function getScreenSize(): ScreenSize
  export function moveMouse(x: number, y: number): void

  export default {
    setMouseDelay,
    getScreenSize,
    moveMouse,
  }
}
