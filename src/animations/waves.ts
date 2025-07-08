export const WAVES_16: (number | null)[][][] = Array.from(
  { length: 16 },
  (_, frame) =>
    Array.from({ length: 16 }, (_, y) =>
      Array.from({ length: 16 }, (_, x) => {
        // Use a phase that wraps smoothly for seamless looping
        const phase = (frame / 16) * 2 * Math.PI;
        // Main wave pattern: several sine waves with different frequencies and phases
        const wave1 = 4 * Math.sin(x / 3 + phase);
        const wave2 = 2 * Math.cos(x / 2 - phase * 1.5 + y / 5);
        const wave3 = 1.5 * Math.sin((x + y) / 4 + phase * 2);
        // Height of the wave at this x
        const waveHeight = 7 + wave1 + wave2 + wave3;
        // Distance from bottom
        const dist = 15 - y;
        // Only draw wave above the base
        if (dist > waveHeight) return null;
        // Color: white at crest, deep blue at trough, blend in between
        const t = Math.max(0, Math.min(1, (waveHeight - dist) / 6));
        // Hue: 200 (deep blue) to 220 (light blue/white)
        let hue = 200 + 20 * t;
        // Add more white at the crest
        if (t > 0.8) hue = 220 + 10 * (t - 0.8);
        return Math.round(hue);
      })
    )
);
