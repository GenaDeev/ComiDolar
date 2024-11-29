export default interface AtroposSettings {
  activeOffset?: number;
  alwaysActive?: boolean;
  duration?: number;
  rotate?: boolean;
  rotateTouch?: boolean | string;
  rotateXMax?: number;
  rotateYMax?: number;
  rotateXInvert?: boolean;
  rotateYInvert?: boolean;
  stretchX?: number;
  stretchY?: number;
  stretchZ?: number;
  commonOrigin?: boolean;
  shadow?: boolean;
  shadowOffset?: number;
  shadowScale?: number;
  highlight?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onRotate?: (x: number, y: number) => void;
}
