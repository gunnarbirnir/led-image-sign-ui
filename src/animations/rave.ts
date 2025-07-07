export const RAVE_PARTY_16: (number | null)[][][] = [
  // Frame 1: Diagonal rainbow stripes
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) =>
      ((x + y) % 4 === 0) ? ((x * 22 + y * 22) % 360) : null
    )
  ),
  // Frame 2: Stripes shift
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) =>
      ((x + y + 1) % 4 === 0) ? ((x * 22 + y * 22 + 36) % 360) : null
    )
  ),
  // Frame 3: Checkerboard pulse
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) =>
      ((x % 2 === y % 2)) ? ((x * 45 + y * 45 + 72) % 360) : null
    )
  ),
  // Frame 4: Checkerboard shift
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) =>
      ((x % 2 !== y % 2)) ? ((x * 45 + y * 45 + 108) % 360) : null
    )
  ),
  // Frame 5: Concentric circles
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) =>
      ((Math.floor(Math.sqrt((x-8)*(x-8)+(y-8)*(y-8))) % 3 === 0)) ? ((x * 22 + y * 22 + 144) % 360) : null
    )
  ),
  // Frame 6: Circles shift
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) =>
      ((Math.floor(Math.sqrt((x-8)*(x-8)+(y-8)*(y-8))) % 3 === 1)) ? ((x * 22 + y * 22 + 180) % 360) : null
    )
  ),
  // Frame 7: Circles shift
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) =>
      ((Math.floor(Math.sqrt((x-8)*(x-8)+(y-8)*(y-8))) % 3 === 2)) ? ((x * 22 + y * 22 + 216) % 360) : null
    )
  ),
  // Frame 8: All on, full rainbow
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) =>
      ((x * 22 + y * 22 + 252) % 360)
    )
  ),
  // Frame 9: All on, rainbow shifted
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) =>
      ((x * 22 + y * 22 + 288) % 360)
    )
  ),
  // Frame 10: All on, rainbow shifted more
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) =>
      ((x * 22 + y * 22 + 324) % 360)
    )
  ),
];
