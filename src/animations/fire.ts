export const FIRE_BURNING_16: (number | null)[][][] = Array.from({ length: 16 }, (_, frame) =>
  Array.from({ length: 16 }, (_, y) =>
    Array.from({ length: 16 }, (_, x) => {
      // Use a phase that wraps smoothly for seamless looping
      const phase = (frame / 16) * 2 * Math.PI;
      // Multiple flame bases for more flames
      const flameCount = 4;
      let flameBase = 0;
      for (let i = 0; i < flameCount; i++) {
        const offset = (i - (flameCount - 1) / 2) * 3.5;
        flameBase +=
          12 +
          2 * Math.sin(((x - offset) + phase * (8 + i * 2)) / 2) +
          2 * Math.cos(((y - phase * (6 + i * 2)) / 3) + i);
      }
      flameBase /= flameCount;
      // Flicker and wave
      const flicker = Math.sin((x + y + phase * 8) / 2) + Math.cos((x - y - phase * 6) / 3);
      // Height of fire at this x
      const fireHeight = flameBase + 2 * Math.sin(phase * 2 + x / 2);
      // Distance from bottom
      const dist = 15 - y;
      // Add more detail to the top of the flames
      let tipDetail = 0;
      if (dist < 4) {
        tipDetail =
          1.5 * Math.sin((x * 2 + phase * 12) / 2) +
          1.2 * Math.cos((y * 2 - phase * 10) / 3) +
          0.8 * Math.sin((x - y + phase * 8) / 1.7);
      }
      // Only draw fire above the base
      if (dist > fireHeight + flicker + tipDetail) return null;
      // Color: yellow at base, red at top, blend in between
      const t = Math.max(0, Math.min(1, (fireHeight + flicker + tipDetail - dist) / (fireHeight + 2)));
      // Hue: 55 (yellow) to 5 (red)
      let hue = 5 + (55 - 5) * (1 - t);
      // Add a little more yellow/white at the very base
      if (dist > 10 && t > 0.7) hue = 55 + 10 * (t - 0.7);
      // Add a little more red at the very top
      if (dist < 3 && t < 0.3) hue = 5 - 5 * (0.3 - t);
      return Math.round(hue);
    })
  )
);
