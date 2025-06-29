import { createContext } from "react";

import { SignConfig } from "../reducers/signConfigReducer";

interface AppContextProps extends SignConfig {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  resetSignConfig: () => void;
  setPromptText: (text: string) => void;
  setOnBulbLightness: (lightness: number) => void;
  setOffBulbLightness: (lightness: number) => void;
  setFrameLightness: (lightness: number) => void;
  setBackgroundLightness: (lightness: number) => void;
  setAnimationSpeed: (speed: number) => void;
  setFullWidth: (fullWidth: boolean) => void;
  setHideFrame: (hideFrame: boolean) => void;
}

const AppContext = createContext<AppContextProps>({
  menuOpen: false,
  promptText: "",
  onBulbLightness: 0,
  offBulbLightness: 0,
  frameLightness: 0,
  backgroundLightness: 0,
  animationSpeed: 0,
  fullWidth: false,
  hideFrame: false,
  setMenuOpen: () => null,
  resetSignConfig: () => null,
  setPromptText: () => null,
  setOnBulbLightness: () => null,
  setOffBulbLightness: () => null,
  setFrameLightness: () => null,
  setBackgroundLightness: () => null,
  setAnimationSpeed: () => null,
  setFullWidth: () => null,
  setHideFrame: () => null,
});

export default AppContext;
