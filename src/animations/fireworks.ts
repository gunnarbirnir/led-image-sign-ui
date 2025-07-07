export const FIREWORKS_20: (number | null)[][][] = [
  // Frame 1: Launch
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) => (x === 10 && y > 10 ? 60 : null))
  ),
  // Frame 2: Launch higher
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) => (x === 10 && y > 7 ? 60 : null))
  ),
  // Frame 3: Burst start
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) => (x === 10 && y === 7 ? 60 : null))
  ),
  // Frame 4: Small burst
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) =>
      (Math.abs(x - 10) === 1 && Math.abs(y - 7) === 0) ||
      (Math.abs(x - 10) === 0 && Math.abs(y - 7) === 1)
        ? 0
        : null
    )
  ),
  // Frame 5: Medium burst, more colors
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) => {
      const dx = x - 10,
        dy = y - 7;
      if (Math.abs(dx) === 2 && dy === 0) return 200;
      if (dx === 0 && Math.abs(dy) === 2) return 300;
      if (Math.abs(dx) === 1 && Math.abs(dy) === 1) return 60;
      return null;
    })
  ),
  // Frame 6: Large burst, rainbow
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) => {
      const dx = x - 10,
        dy = y - 7;
      if (Math.abs(dx) === 3 && dy === 0) return 120;
      if (dx === 0 && Math.abs(dy) === 3) return 240;
      if (Math.abs(dx) === 2 && Math.abs(dy) === 1) return 0;
      if (Math.abs(dx) === 1 && Math.abs(dy) === 2) return 300;
      return null;
    })
  ),
  // Frame 7: Fading burst
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) => {
      const dx = x - 10,
        dy = y - 7;
      if (Math.abs(dx) === 4 && dy === 0) return 180;
      if (dx === 0 && Math.abs(dy) === 4) return 60;
      if (Math.abs(dx) === 3 && Math.abs(dy) === 1) return 240;
      if (Math.abs(dx) === 1 && Math.abs(dy) === 3) return 120;
      return null;
    })
  ),
  // Frame 8: Fainter burst
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) => {
      const dx = x - 10,
        dy = y - 7;
      if (Math.abs(dx) === 5 && dy === 0) return 300;
      if (dx === 0 && Math.abs(dy) === 5) return 0;
      if (Math.abs(dx) === 4 && Math.abs(dy) === 1) return 60;
      if (Math.abs(dx) === 1 && Math.abs(dy) === 4) return 180;
      return null;
    })
  ),
  // Frame 9: Only a few sparks
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) => {
      const dx = x - 10,
        dy = y - 7;
      if (Math.abs(dx) === 6 && dy === 0) return 60;
      if (dx === 0 && Math.abs(dy) === 6) return 240;
      return null;
    })
  ),
  // Frame 10: All off
  Array.from({ length: 20 }, () => Array.from({ length: 20 }, () => null)),
];
