export const FIRE_BURNING_16: (number | null)[][][] = Array.from(
  { length: 16 },
  (_, frame) =>
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
            6 +
            2.5 * Math.sin((x - offset + phase * (8 + i * 2)) / 2) +
            2.5 * Math.cos((y - phase * (6 + i * 2)) / 3 + i);
        }
        flameBase /= flameCount;
        // Flicker and wave
        const flicker =
          1.5 * Math.sin((x + y + phase * 8) / 2) +
          1.5 * Math.cos((x - y - phase * 6) / 3);
        // Height of fire at this x - smoother phase transitions
        const fireHeight =
          flameBase +
          3 * Math.sin(phase * 2 + x / 2) +
          1 * Math.cos(phase * 1.5 + x / 3);
        // Distance from bottom
        const dist = 15 - y;
        // Add more detail to the top of the flames
        let tipDetail = 0;
        if (dist < 8) {
          tipDetail =
            2 * Math.sin((x * 2 + phase * 12) / 2) +
            1.8 * Math.cos((y * 2 - phase * 10) / 3) +
            1.2 * Math.sin((x - y + phase * 8) / 1.7) +
            0.8 * Math.sin((x + y - phase * 5) / 2.5);
        }
        // Only draw fire above the base
        if (dist > fireHeight + flicker + tipDetail) return null;
        // Color: red at bottom to yellow at top, blend in between
        const totalHeight = fireHeight + flicker + tipDetail;
        const t = Math.max(0, Math.min(1, (totalHeight - dist) / totalHeight));

        // Hue: 5 (red) at bottom to 55 (yellow) at top
        let hue = 5 + (55 - 5) * t;

        // Add slight intensity variation for realism while keeping gradient consistent
        const intensity = 0.9 + 0.1 * Math.sin((x + y + phase * 4) / 3);
        hue = hue * intensity;

        // Clamp hue to valid range
        hue = Math.max(0, Math.min(60, hue));
        return Math.round(hue);
      })
    )
);
