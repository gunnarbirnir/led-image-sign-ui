export const WAVES_16: (number | null)[][][] = Array.from(
  { length: 16 },
  (_, frame) =>
    Array.from({ length: 16 }, (_, y) =>
      Array.from({ length: 16 }, (_, x) => {
        // Use a phase that wraps smoothly for seamless looping
        // Ensure perfect continuity between last and first frame
        const phase = (frame / 16) * 2 * Math.PI;
        // Main wave pattern: several sine waves with different frequencies and phases
        // Use integer multiples for phase to ensure perfect periodicity
        const wave1 = 4 * Math.sin(x / 3 + phase);
        const wave2 = 2 * Math.cos(x / 2 - phase * 2 + y / 5); // Integer multiple for perfect loop
        const wave3 = 1.5 * Math.sin((x + y) / 4 + phase * 3); // Integer multiple for perfect loop
        // Height of the wave at this x
        const waveHeight = 7 + wave1 + wave2 + wave3;
        // Distance from bottom
        const dist = 15 - y;
        // Only draw wave above the base
        if (dist > waveHeight) return null;
        // Color: white at crest, deep blue at trough, blend in between
        const t = Math.max(0, Math.min(1, (waveHeight - dist) / 6));

        // Enhanced color scheme with more blue shades and better white highlights
        let hue: number;

        if (t < 0.2) {
          // Deep ocean blue at the base (darker blues)
          hue = 195 + t * 15; // 195-198
        } else if (t < 0.4) {
          // Medium blue transition
          hue = 198 + (t - 0.2) * 10; // 198-200
        } else if (t < 0.6) {
          // Lighter blue
          hue = 200 + (t - 0.4) * 25; // 200-205
        } else if (t < 0.8) {
          // Light blue to cyan transition
          hue = 205 + (t - 0.6) * 35; // 205-212
        } else if (t < 0.95) {
          // Very light blue approaching white
          hue = 212 + (t - 0.8) * 53; // 212-220
        } else {
          // Pure white foam at the crest
          hue = 220 + (t - 0.95) * 120; // 220-226 (approaching white)
        }

        return Math.round(hue);
      })
    )
);
