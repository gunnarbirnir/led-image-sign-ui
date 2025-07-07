export const UI_PRIMARY_COLOR_HUE = 230;
export const MENU_TRANSITION_DURATION = 200;

export const MIN_SIZE = 100;
export const MAX_SIZE = 500;
export const MIN_ON_BULB_LIGHTNESS = 70;
export const MAX_ON_BULB_LIGHTNESS = 100;
export const MIN_OFF_BULB_LIGHTNESS = 0;
export const MAX_OFF_BULB_LIGHTNESS = 30;
export const MIN_FRAME_LIGHTNESS = 10;
export const MAX_FRAME_LIGHTNESS = 40;
export const MIN_BACKGROUND_LIGHTNESS = 0;
export const MAX_BACKGROUND_LIGHTNESS = 30;
export const MIN_SPEED = 1;
export const MAX_SPEED = 15;

export const INIT_SIGN_CONFIG = {
  promptText: "",
  size: 300,
  onBulbLightness: 95,
  offBulbLightness: 10,
  frameLightness: 15,
  backgroundLightness: 0,
  animationSpeed: 10,
  hideFrame: false,
  boomerang: false,
};

export const MEDIA_QUERY = {
  MOBILE: "800px",
  SMALL_MOBILE: "600px",
};

export const URL_PARAM_KEYS: Record<string, string> = {
  promptText: "text",
  size: "size",
  onBulbLightness: "on-lightness",
  offBulbLightness: "off-lightness",
  frameLightness: "frame-lightness",
  backgroundLightness: "background-lightness",
  animationSpeed: "speed",
  hideFrame: "hide-frame",
  boomerang: "boomerang",
};
