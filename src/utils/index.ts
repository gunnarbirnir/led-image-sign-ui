import { MIN_SPEED, MAX_SPEED } from "../constants";

export const sanitizeMinMaxValue =
  (minVal: number, maxVal: number) => (val: number) => {
    return Math.max(Math.min(val, maxVal), minVal);
  };

const FRAMES_PER_SECOND = 60;
const SLOW_SPEED_STEPS = 6;

export const calcAnimationFramesPerUpdate = (speed: number) => {
  if (speed <= MIN_SPEED) {
    return FRAMES_PER_SECOND;
  } else if (speed <= SLOW_SPEED_STEPS) {
    // 50, 40, ...
    return FRAMES_PER_SECOND - (speed - 1) * 10;
  } else if (speed >= MAX_SPEED) {
    return 1;
  }
  // 9, 8 ...
  return 10 - (speed - SLOW_SPEED_STEPS);
};
