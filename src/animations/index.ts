import { FIRE_BURNING_16 } from "./fire";
import { PSYCHEDELIC_TRIP_16 } from "./psychedelic";
import { WAVES_16 } from "./waves";

interface AnimationPreset {
  id: string;
  label: string;
  animation: (number | null)[][][];
}

export const animationPresets: AnimationPreset[] = [
  { id: "psychedelic", label: "Psychedelic", animation: PSYCHEDELIC_TRIP_16 },
  { id: "fire", label: "Fire", animation: FIRE_BURNING_16 },
  { id: "waves", label: "Waves", animation: WAVES_16 },
];

export const presetMap = animationPresets.reduce((acc, preset) => {
  acc[preset.id] = preset;
  return acc;
}, {} as Record<string, AnimationPreset>);
