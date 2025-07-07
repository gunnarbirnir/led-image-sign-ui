// PSYCHEDELIC_SIGN_20: 10 frames, 20x20, psychedelic swirling/radiating color pattern
export const PSYCHEDELIC_20: (number | null)[][][] = [
  // Frame 1: Rainbow swirl
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) =>
      (x + y) % 2 === 0 ? (x * 18 + y * 18) % 360 : null
    )
  ),
  // Frame 2: Swirl rotates
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) =>
      (x + y) % 2 === 0 ? (x * 18 + y * 18 + 36) % 360 : null
    )
  ),
  // Frame 3: Swirl rotates more
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) =>
      (x + y) % 2 === 0 ? (x * 18 + y * 18 + 72) % 360 : null
    )
  ),
  // Frame 4: Swirl rotates more
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) =>
      (x + y) % 2 === 0 ? (x * 18 + y * 18 + 108) % 360 : null
    )
  ),
  // Frame 5: Swirl rotates more
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) =>
      (x + y) % 2 === 0 ? (x * 18 + y * 18 + 144) % 360 : null
    )
  ),
  // Frame 6: Swirl rotates more
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) =>
      (x + y) % 2 === 0 ? (x * 18 + y * 18 + 180) % 360 : null
    )
  ),
  // Frame 7: Swirl rotates more
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) =>
      (x + y) % 2 === 0 ? (x * 18 + y * 18 + 216) % 360 : null
    )
  ),
  // Frame 8: Swirl rotates more
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) =>
      (x + y) % 2 === 0 ? (x * 18 + y * 18 + 252) % 360 : null
    )
  ),
  // Frame 9: Swirl rotates more
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) =>
      (x + y) % 2 === 0 ? (x * 18 + y * 18 + 288) % 360 : null
    )
  ),
  // Frame 10: Swirl rotates more
  Array.from({ length: 20 }, (_, y) =>
    Array.from({ length: 20 }, (_, x) =>
      (x + y) % 2 === 0 ? (x * 18 + y * 18 + 324) % 360 : null
    )
  ),
];
