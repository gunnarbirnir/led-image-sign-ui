export const sanitizeMinMaxValue =
  (minVal: number, maxVal: number) => (val: number) => {
    return Math.max(Math.min(val, maxVal), minVal);
  };
