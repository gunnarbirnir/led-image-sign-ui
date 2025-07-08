export const PSYCHEDELIC_TRIP_16: (number | null)[][][] = [
  // Frame 1: Swirling rainbow spiral, fills and centers the 16x16 frame
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) => {
      const dx = x - 7.5,
        dy = y - 7.5;
      const angle = Math.atan2(dy, dx);
      const dist = Math.sqrt(dx * dx + dy * dy);
      return dist < 8 ? ((angle * 180) / Math.PI + dist * 45 + 0) % 360 : null;
    })
  ),
  // Frame 2: Spiral rotates
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) => {
      const dx = x - 7.5,
        dy = y - 7.5;
      const angle = Math.atan2(dy, dx);
      const dist = Math.sqrt(dx * dx + dy * dy);
      return dist < 8 ? ((angle * 180) / Math.PI + dist * 45 + 36) % 360 : null;
    })
  ),
  // Frame 3: Spiral rotates
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) => {
      const dx = x - 7.5,
        dy = y - 7.5;
      const angle = Math.atan2(dy, dx);
      const dist = Math.sqrt(dx * dx + dy * dy);
      return dist < 8 ? ((angle * 180) / Math.PI + dist * 45 + 72) % 360 : null;
    })
  ),
  // Frame 4: Spiral rotates
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) => {
      const dx = x - 7.5,
        dy = y - 7.5;
      const angle = Math.atan2(dy, dx);
      const dist = Math.sqrt(dx * dx + dy * dy);
      return dist < 8 ? ((angle * 180) / Math.PI + dist * 45 + 108) % 360 : null;
    })
  ),
  // Frame 5: Spiral rotates
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) => {
      const dx = x - 7.5,
        dy = y - 7.5;
      const angle = Math.atan2(dy, dx);
      const dist = Math.sqrt(dx * dx + dy * dy);
      return dist < 8 ? ((angle * 180) / Math.PI + dist * 45 + 144) % 360 : null;
    })
  ),
  // Frame 6: Spiral rotates
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) => {
      const dx = x - 7.5,
        dy = y - 7.5;
      const angle = Math.atan2(dy, dx);
      const dist = Math.sqrt(dx * dx + dy * dy);
      return dist < 8 ? ((angle * 180) / Math.PI + dist * 45 + 180) % 360 : null;
    })
  ),
  // Frame 7: Spiral rotates
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) => {
      const dx = x - 7.5,
        dy = y - 7.5;
      const angle = Math.atan2(dy, dx);
      const dist = Math.sqrt(dx * dx + dy * dy);
      return dist < 8 ? ((angle * 180) / Math.PI + dist * 45 + 216) % 360 : null;
    })
  ),
  // Frame 8: Spiral rotates
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) => {
      const dx = x - 7.5,
        dy = y - 7.5;
      const angle = Math.atan2(dy, dx);
      const dist = Math.sqrt(dx * dx + dy * dy);
      return dist < 8 ? ((angle * 180) / Math.PI + dist * 45 + 252) % 360 : null;
    })
  ),
  // Frame 9: Spiral rotates
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) => {
      const dx = x - 7.5,
        dy = y - 7.5;
      const angle = Math.atan2(dy, dx);
      const dist = Math.sqrt(dx * dx + dy * dy);
      return dist < 8 ? ((angle * 180) / Math.PI + dist * 45 + 288) % 360 : null;
    })
  ),
  // Frame 10: Spiral rotates
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) => {
      const dx = x - 7.5,
        dy = y - 7.5;
      const angle = Math.atan2(dy, dx);
      const dist = Math.sqrt(dx * dx + dy * dy);
      return dist < 8 ? ((angle * 180) / Math.PI + dist * 45 + 324) % 360 : null;
    })
  ),
];
