export const FREEZE_16: (number | null)[][][] = Array.from(
  { length: 16 },
  (_, frame) =>
    Array.from({ length: 16 }, (_, y) =>
      Array.from({ length: 16 }, (_, x) => {
        // Center point of the grid
        const centerX = 7.5;
        const centerY = 7.5;

        // Distance from center
        const dx = x - centerX;
        const dy = y - centerY;
        const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);

        // Maximum distance in a 16x16 grid (corner to center)
        const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

        // Freeze radius expands over time
        // At frame 0, radius is 0 (no freeze)
        // At frame 15, radius covers the entire grid
        const freezeRadius = (frame / 15) * maxDistance;

        // Add some randomness and crystalline patterns for realistic ice formation
        const noisePhase1 = Math.sin(x * 0.8 + y * 0.6 + frame * 0.3) * 0.5;
        const noisePhase2 = Math.cos(x * 0.4 - y * 0.9 + frame * 0.2) * 0.3;
        const crystallineNoise = noisePhase1 + noisePhase2;

        // Effective freeze radius with noise for natural ice patterns
        const effectiveRadius = freezeRadius + crystallineNoise;

        // Only draw if within the freeze radius
        if (distanceFromCenter > effectiveRadius) return null;

        // Calculate ice intensity based on how long this pixel has been frozen
        // Pixels closer to center have been frozen longer (more intense)
        const freezeIntensity = Math.max(
          0,
          Math.min(
            1,
            (effectiveRadius - distanceFromCenter) / (effectiveRadius * 0.5)
          )
        );

        // Add snowflake/crystal patterns - hexagonal and radial structures
        const angle = Math.atan2(dy, dx);

        // Create crystal structure with gaps - only show certain parts

        // Define crystal arms/spokes - these are the main structures that should exist
        const mainArm1 = Math.abs(Math.cos(angle * 3)) > 0.7; // 3-fold symmetry
        const mainArm2 = Math.abs(Math.cos(angle * 6)) > 0.6; // 6-fold symmetry
        const radialSpoke = Math.abs(Math.sin(angle * 6)) > 0.8; // Sharp radial lines

        // Create dendritic branches along the main arms
        const branchCondition =
          distanceFromCenter > 2 &&
          (Math.sin(distanceFromCenter * 1.5 + angle * 4) > 0.3 ||
            Math.cos(distanceFromCenter * 2 - angle * 3) > 0.4);

        // Center core should always be solid (nucleation point)
        const centerCore = distanceFromCenter < 2;

        // Fine crystal webbing between main structures
        const crystalWeb =
          Math.sin(x * 0.8 + y * 0.6) > 0.4 &&
          Math.cos(x * 0.7 - y * 0.9) > 0.3 &&
          distanceFromCenter > 1.5;

        // Combine all crystal structure conditions
        const isInCrystalStructure =
          centerCore ||
          mainArm1 ||
          mainArm2 ||
          radialSpoke ||
          (branchCondition && (mainArm1 || mainArm2)) ||
          crystalWeb;

        // Only draw pixels that are part of the crystal structure
        if (!isInCrystalStructure) return null;

        // Hexagonal crystal pattern (6-fold symmetry like real snowflakes)
        const hexPattern = Math.cos(angle * 6) * 0.4;

        // Radial crystal arms (like snowflake spokes)
        const radialArms = Math.max(
          Math.cos(angle * 3) * 0.3, // 3 main arms
          Math.cos(angle * 6) * 0.2 // 6 secondary arms
        );

        // Dendritic branching pattern (tree-like crystal growth)
        const branchPattern =
          Math.sin(distanceFromCenter * 2 + angle * 4) * 0.2 +
          Math.cos(distanceFromCenter * 3 - angle * 2) * 0.15;

        // Fine crystalline detail
        const fineDetail =
          Math.sin(x * 1.2 + y * 0.8 + angle * 8) * 0.1 +
          Math.cos(x * 0.9 - y * 1.1 + angle * 4) * 0.08;

        // Combine all crystal effects
        const crystalEffect =
          (hexPattern + radialArms + branchPattern + fineDetail) *
          freezeIntensity;

        // Enhanced intensity with crystal effects
        const totalIntensity = Math.max(
          0,
          Math.min(1, freezeIntensity + crystalEffect)
        );

        // Color mapping with enhanced crystal highlights
        let hue: number;

        // Base ice color progression
        if (totalIntensity < 0.2) {
          // Very new ice - deep blue
          hue = 190 + totalIntensity * 20; // 190-194 (deeper blue)
        } else if (totalIntensity < 0.4) {
          // Establishing ice - medium blue
          hue = 194 + (totalIntensity - 0.2) * 20; // 194-198
        } else if (totalIntensity < 0.6) {
          // Solid ice - lighter blue
          hue = 198 + (totalIntensity - 0.4) * 25; // 198-203
        } else if (totalIntensity < 0.8) {
          // Thick ice - very light blue
          hue = 203 + (totalIntensity - 0.6) * 30; // 203-209
        } else {
          // Ancient ice - almost white with blue tint
          hue = 209 + (totalIntensity - 0.8) * 35; // 209-216
        }

        // Enhanced crystal structure highlighting
        // Highlight crystal arms and patterns with brighter/whiter colors
        const crystalHighlight = Math.max(
          Math.abs(hexPattern),
          Math.abs(radialArms),
          Math.abs(branchPattern) * 0.8
        );

        if (crystalHighlight > 0.3 && totalIntensity > 0.3) {
          // Crystal structure gets whiter/brighter
          hue += crystalHighlight * 25;
        }

        // Add some sparkle effect for ice crystals at intersection points
        const sparkle =
          Math.sin(x * 2.1 + y * 1.9 + frame * 0.8) *
          Math.cos(x * 1.7 - y * 2.3 + frame * 0.6);

        // Extra sparkles at crystal intersections
        const crystalIntersection =
          Math.abs(Math.cos(angle * 6)) > 0.8 ||
          Math.abs(Math.cos(angle * 3)) > 0.9;

        if (
          (sparkle > 0.7 && totalIntensity > 0.4) ||
          (crystalIntersection && totalIntensity > 0.6 && Math.random() > 0.7)
        ) {
          hue = Math.min(240, hue + 20); // Bright sparkles at crystal points
        }

        return Math.round(hue);
      })
    )
);
