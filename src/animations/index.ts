import { FIRE_BURNING_16 } from "./fire";
import { FIREWORKS_16 } from "./fireworks";
import { PSYCHEDELIC_TRIP_16 } from "./psychedelic";
import { WAVES_16 } from "./waves";
// import { FREEZE_16 } from "./freeze";
import { EMPTY_16 } from "./empty";
import { SignConfig } from "../reducers/signConfigReducer";

interface AnimationPreset {
  id: string;
  label: string;
  animation: (number | null)[][][];
  config?: Partial<Omit<SignConfig, "preset">>;
}

export const animationPresets: AnimationPreset[] = [
  {
    id: "psychedelic",
    label: "Psychedelic",
    animation: PSYCHEDELIC_TRIP_16,
    config: { animationSpeed: 10 },
  },
  {
    id: "fire",
    label: "Fire",
    animation: FIRE_BURNING_16,
    config: { animationSpeed: 8 },
  },
  {
    id: "waves",
    label: "Waves",
    animation: WAVES_16,
    config: { animationSpeed: 10 },
  },
  {
    id: "fireworks",
    label: "Fireworks",
    animation: FIREWORKS_16,
    config: { animationSpeed: 12 },
  },
  // { id: "freeze", label: "Freeze", animation: FREEZE_16, config: { animationSpeed: 8 } },
];

export const presetMap = animationPresets.reduce((acc, preset) => {
  acc[preset.id] = preset;
  return acc;
}, {} as Record<string, AnimationPreset>);

export const EMPTY_ANIMATION = EMPTY_16;
