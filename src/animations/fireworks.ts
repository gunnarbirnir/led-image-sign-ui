export const FIREWORKS_16: (number | null)[][][] = Array.from(
  { length: 16 },
  (_, frame) =>
    Array.from({ length: 16 }, (_, y) =>
      Array.from({ length: 16 }, (_, x) => {
        const centerX = 8;

        // Phase 1: Launch (frames 0-7)
        if (frame < 8) {
          // Rocket travels from bottom (y=15) to explosion point (y=4)
          const rocketY = 15 - (frame / 7) * 11;
          const rocketX = centerX;

          // Draw the rocket trail
          if (
            x === Math.round(rocketX) &&
            y >= Math.round(rocketY) &&
            y <= 15
          ) {
            // Rocket body (bright white/yellow)
            if (y === Math.round(rocketY)) {
              return 60; // Bright yellow for rocket head
            }
            // Trail gets dimmer as it goes down
            const trailDistance = y - Math.round(rocketY);
            if (trailDistance <= 3) {
              return Math.round(45 - trailDistance * 10); // Orange to red trail
            }
          }
          return null;
        }

        // Phase 2: Explosion (frames 8-15)
        const explosionFrame = frame - 8;
        const explosionRadius = (explosionFrame + 1) * 1.5;

        // Explosion center
        const explosionX = centerX;
        const explosionY = 4;

        // Distance from explosion center
        const dx = x - explosionX;
        const dy = y - explosionY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Only draw particles within the current explosion radius
        if (distance > explosionRadius || distance < 0.5) return null;

        // Create particle pattern - not every pixel should be lit
        // Use angle-based sparks for realistic firework pattern
        const angle = Math.atan2(dy, dx);
        const sparkAngle = ((angle + Math.PI) / (2 * Math.PI)) * 12; // 12 main sparks
        const sparkIndex = Math.floor(sparkAngle);
        const sparkOffset = sparkAngle - sparkIndex;

        // Create main sparks and smaller particles between them
        const isMainSpark = Math.abs(sparkOffset - 0.5) > 0.3;
        const isParticle = Math.random() > 0.6; // Random particles

        if (!isMainSpark && !isParticle) return null;

        // Add some randomness to particle positions for more natural look
        const noise = Math.sin(x * 2.3 + y * 1.7 + frame * 0.8) * 0.3;
        const effectiveDistance = distance + noise;

        // Only show particles that are roughly at the explosion front
        if (Math.abs(effectiveDistance - explosionRadius) > 1.5) return null;

        // Color based on explosion progress and particle type
        let hue: number;

        if (explosionFrame < 2) {
          // Initial bright white/yellow flash
          hue = 50 + Math.random() * 20; // Yellow-white
        } else if (explosionFrame < 4) {
          // Transition to orange/red
          const sparkHue = (sparkIndex * 30) % 360;
          if (sparkHue < 60) {
            hue = 20 + Math.random() * 40; // Orange-red
          } else if (sparkHue < 120) {
            hue = 60 + Math.random() * 60; // Yellow-green
          } else if (sparkHue < 180) {
            hue = 120 + Math.random() * 60; // Green-cyan
          } else if (sparkHue < 240) {
            hue = 180 + Math.random() * 60; // Cyan-blue
          } else if (sparkHue < 300) {
            hue = 240 + Math.random() * 60; // Blue-magenta
          } else {
            hue = 300 + Math.random() * 60; // Magenta-red
          }
        } else {
          // Later frames - more colorful and dimmer

          // Create colorful sparks based on direction
          if (angle >= -Math.PI / 6 && angle < Math.PI / 6) {
            hue = 0 + Math.random() * 30; // Red
          } else if (angle >= Math.PI / 6 && angle < Math.PI / 2) {
            hue = 30 + Math.random() * 30; // Orange
          } else if (angle >= Math.PI / 2 && angle < (5 * Math.PI) / 6) {
            hue = 60 + Math.random() * 60; // Yellow-green
          } else if (angle >= (5 * Math.PI) / 6 || angle < (-5 * Math.PI) / 6) {
            hue = 120 + Math.random() * 60; // Green-cyan
          } else if (angle >= (-5 * Math.PI) / 6 && angle < -Math.PI / 2) {
            hue = 180 + Math.random() * 60; // Cyan-blue
          } else {
            hue = 240 + Math.random() * 120; // Blue-magenta-red
          }

          // Fade out over time
          const fadeOut = (7 - explosionFrame) / 7;
          if (Math.random() > fadeOut * 0.8) return null;
        }

        // Add sparkle effect for main sparks
        if (isMainSpark && Math.random() > 0.7) {
          hue = Math.min(360, hue + 30); // Brighter sparkles
        }

        return Math.round(hue % 360);
      })
    )
);
