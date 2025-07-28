import { createContext } from "react";

import { SignConfig } from "../reducers/signConfigReducer";

interface AppContextProps extends SignConfig {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  updateSignKey: () => void;
  resetSignConfig: () => void;
  setPreset: (preset: string) => void;
  setSize: (size: number) => void;
  setOnBulbLightness: (lightness: number) => void;
  setOffBulbLightness: (lightness: number) => void;
  setFrameLightness: (lightness: number) => void;
  setBackgroundLightness: (lightness: number) => void;
  setAnimationSpeed: (speed: number) => void;
  setHideFrame: (hideFrame: boolean) => void;
  setBoomerang: (boomerang: boolean) => void;
}

const AppContext = createContext<AppContextProps>({
  menuOpen: false,
  preset: "",
  size: 0,
  onBulbLightness: 0,
  offBulbLightness: 0,
  frameLightness: 0,
  backgroundLightness: 0,
  animationSpeed: 0,
  hideFrame: false,
  boomerang: false,
  setMenuOpen: () => null,
  updateSignKey: () => null,
  resetSignConfig: () => null,
  setPreset: () => null,
  setSize: () => null,
  setOnBulbLightness: () => null,
  setOffBulbLightness: () => null,
  setFrameLightness: () => null,
  setBackgroundLightness: () => null,
  setAnimationSpeed: () => null,
  setHideFrame: () => null,
  setBoomerang: () => null,
});

export default AppContext;
