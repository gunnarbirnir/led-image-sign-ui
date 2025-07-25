export const FIREWORKS_16: (number | null)[][][] = Array.from(
  { length: 48 }, // Extended to 48 frames for multiple fireworks
  (_, frame) =>
    Array.from({ length: 16 }, (_, y) =>
      Array.from({ length: 16 }, (_, x) => {
        // Define multiple fireworks with different timing, positions, and colors
        const fireworks = [
          {
            startFrame: 0,
            launchFrames: 6,
            explosionFrames: 8,
            launchX: 8,
            explosionX: 8,
            explosionY: 4,
            colorBase: 0, // Red-orange theme
          },
          {
            startFrame: 10,
            launchFrames: 5,
            explosionFrames: 7,
            launchX: 4,
            explosionX: 4,
            explosionY: 6,
            colorBase: 240, // Blue-purple theme
          },
          {
            startFrame: 18,
            launchFrames: 7,
            explosionFrames: 9,
            launchX: 12,
            explosionX: 12,
            explosionY: 3,
            colorBase: 120, // Green-cyan theme
          },
          {
            startFrame: 28,
            launchFrames: 6,
            explosionFrames: 8,
            launchX: 6,
            explosionX: 6,
            explosionY: 5,
            colorBase: 60, // Yellow theme
          },
          {
            startFrame: 36,
            launchFrames: 5,
            explosionFrames: 7,
            launchX: 10,
            explosionX: 10,
            explosionY: 4,
            colorBase: 300, // Magenta theme
          },
        ];

        let result: number | null = null;

        // Process each firework
        for (const firework of fireworks) {
          const relativeFrame = frame - firework.startFrame;
          const totalFrames = firework.launchFrames + firework.explosionFrames;

          // Skip if this firework hasn't started or has finished
          if (relativeFrame < 0 || relativeFrame >= totalFrames) continue;

          // Launch phase
          if (relativeFrame < firework.launchFrames) {
            const rocketY =
              15 -
              (relativeFrame / (firework.launchFrames - 1)) *
                (15 - firework.explosionY);
            const rocketX = firework.launchX;

            // Draw the rocket trail
            if (
              x === Math.round(rocketX) &&
              y >= Math.round(rocketY) &&
              y <= 15
            ) {
              // Rocket body (bright color based on firework theme)
              if (y === Math.round(rocketY)) {
                result = (firework.colorBase + 30) % 360; // Bright head
              } else {
                // Trail gets dimmer as it goes down
                const trailDistance = y - Math.round(rocketY);
                if (trailDistance <= 3) {
                  const trailHue =
                    (firework.colorBase + trailDistance * 10) % 360;
                  result = trailHue;
                }
              }
            }
          } else {
            // Explosion phase
            const explosionFrame = relativeFrame - firework.launchFrames;
            const explosionRadius = (explosionFrame + 1) * 1.3;

            // Distance from explosion center
            const dx = x - firework.explosionX;
            const dy = y - firework.explosionY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Only draw particles within the current explosion radius
            if (distance <= explosionRadius && distance >= 0.5) {
              // Create particle pattern
              const angle = Math.atan2(dy, dx);
              const sparkAngle = ((angle + Math.PI) / (2 * Math.PI)) * 10; // 10 main sparks
              const sparkIndex = Math.floor(sparkAngle);
              const sparkOffset = sparkAngle - sparkIndex;

              // Create main sparks and particles
              const isMainSpark = Math.abs(sparkOffset - 0.5) > 0.25;
              const isParticle = Math.random() > 0.65;

              if (isMainSpark || isParticle) {
                // Add randomness for natural look
                const noise =
                  Math.sin(
                    x * 2.1 + y * 1.9 + frame * 0.6 + firework.startFrame
                  ) * 0.4;
                const effectiveDistance = distance + noise;

                // Show particles at explosion front
                if (Math.abs(effectiveDistance - explosionRadius) <= 1.8) {
                  let hue: number;

                  if (explosionFrame < 2) {
                    // Initial bright flash
                    hue = (firework.colorBase + 20 + Math.random() * 40) % 360;
                  } else if (explosionFrame < 4) {
                    // Main color burst
                    const colorVariation = (sparkIndex * 36) % 120;
                    hue =
                      (firework.colorBase +
                        colorVariation +
                        Math.random() * 30) %
                      360;
                  } else {
                    // Later frames - more varied colors
                    const angleBasedColor =
                      ((angle + Math.PI) / (2 * Math.PI)) * 180;
                    hue =
                      (firework.colorBase +
                        angleBasedColor +
                        Math.random() * 60) %
                      360;

                    // Fade out over time
                    const fadeOut =
                      (firework.explosionFrames - explosionFrame - 1) /
                      firework.explosionFrames;
                    if (Math.random() > fadeOut * 0.85) continue;
                  }

                  // Add sparkle effect
                  if (isMainSpark && Math.random() > 0.8) {
                    hue = (hue + 40) % 360; // Brighter sparkles
                  }

                  // Only set result if we don't already have a color (layering effect)
                  if (result === null) {
                    result = Math.round(hue);
                  }
                }
              }
            }
          }
        }

        return result;
      })
    )
);
