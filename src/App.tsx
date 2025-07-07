import React, { FC, useMemo, useState, CSSProperties } from "react";
import styled from "styled-components";
import { LEDImageSign } from "@gunnarbirnir/led-message-sign";

import {
  useSignConfig,
  useCssVariables,
  useAppContextValue,
  useIsSignFullWidth,
} from "./hooks";
import { AppContext } from "./context";
import { Menu, MenuButton } from "./components";
import { UI_PRIMARY_COLOR_HUE } from "./constants";
import { RAVE_PARTY_16 } from "./animations/rave";
import { calcAnimationFramesPerUpdate } from "./utils";

const App: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    input,
    initialized,
    size,
    animationSpeed,
    hideFrame,
    boomerang,
    onBulbLightness,
    offBulbLightness,
    frameLightness,
    backgroundLightness,
    updateSignConfig,
    updateSignConfigDebounced,
    resetSignConfig,
  } = useSignConfig();

  const animationFramesPerUpdate = useMemo(
    () => calcAnimationFramesPerUpdate(animationSpeed),
    [animationSpeed]
  );
  const animationDirection = useMemo(
    () => (boomerang ? "alternate" : "normal"),
    [boomerang]
  );
  const signStyle = useMemo(
    () => ({ visibility: initialized ? "visible" : "hidden" } as CSSProperties),
    [initialized]
  );
  const cssVariables = useCssVariables(UI_PRIMARY_COLOR_HUE);
  const isFullWidth = useIsSignFullWidth(size);

  const contextValue = useAppContextValue({
    input,
    menuOpen,
    setMenuOpen,
    updateSignConfig,
    updateSignConfigDebounced,
    resetSignConfig,
  });

  return (
    <AppContext.Provider value={contextValue}>
      <AppContainer className="d-f fd-c" style={cssVariables}>
        <MainContent className="f-1 d-f fd-c jc-c ai-c pos-r">
          <SignContainer>
            <div className="d-f jc-c">
              <LEDImageSign
                images={RAVE_PARTY_16}
                animationOptions={{ direction: animationDirection }}
                width={size}
                fullWidth={isFullWidth}
                onBulbLightness={onBulbLightness}
                offBulbLightness={offBulbLightness}
                frameLightness={frameLightness}
                backgroundLightness={backgroundLightness}
                hideFrame={hideFrame}
                animationFramesPerUpdate={animationFramesPerUpdate}
                style={signStyle}
              />
            </div>
          </SignContainer>
          <MenuButton />
        </MainContent>
        <Menu />
      </AppContainer>
    </AppContext.Provider>
  );
};

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--black);
  overflow: hidden;
`;

const MainContent = styled.main`
  min-height: var(--main-content-min-height);
`;

const SignContainer = styled.div`
  overflow: auto;
  width: 100%;
  padding: var(--padding-4) var(--padding-3);
`;

export default App;
