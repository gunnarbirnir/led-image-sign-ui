import { useMemo } from "react";

import { SignConfig, SignConfigUpdate } from "../reducers/signConfigReducer";
import { presetMap } from "../animations";

const useAppContextValue = ({
  input,
  menuOpen,
  setMenuOpen,
  setSignKey,
  updateSignConfig,
  updateSignConfigDebounced,
  resetSignConfig,
}: {
  input: SignConfig;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  setSignKey: (key: number) => void;
  updateSignConfigDebounced: (config: SignConfigUpdate) => void;
  updateSignConfig: (config: SignConfigUpdate) => void;
  resetSignConfig: () => void;
}) => {
  const contextValue = useMemo(
    () => ({
      menuOpen,
      ...input,
      setMenuOpen,
      updateSignKey: () => setSignKey(Date.now()),
      resetSignConfig,
      setPreset: (preset: string) =>
        updateSignConfig({ preset, ...(presetMap[preset]?.config || {}) }),
      setSize: (size: number) => updateSignConfigDebounced({ size }),
      setOnBulbLightness: (onBulbLightness: number) =>
        updateSignConfigDebounced({ onBulbLightness }),
      setOffBulbLightness: (offBulbLightness: number) =>
        updateSignConfigDebounced({ offBulbLightness }),
      setFrameLightness: (frameLightness: number) =>
        updateSignConfigDebounced({ frameLightness }),
      setBackgroundLightness: (backgroundLightness: number) =>
        updateSignConfigDebounced({ backgroundLightness }),
      setAnimationSpeed: (animationSpeed: number) =>
        updateSignConfigDebounced({ animationSpeed }),
      setHideFrame: (hideFrame: boolean) => updateSignConfig({ hideFrame }),
      setBoomerang: (boomerang: boolean) => updateSignConfig({ boomerang }),
    }),
    [
      menuOpen,
      input,
      setMenuOpen,
      setSignKey,
      updateSignConfig,
      updateSignConfigDebounced,
      resetSignConfig,
    ]
  );

  return contextValue;
};

export default useAppContextValue;
