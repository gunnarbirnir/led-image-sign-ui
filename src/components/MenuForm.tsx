import React, { FC, useCallback } from "react";
import styled from "styled-components";

import { useAppContext, useFocusSignTextArea } from "../hooks";
import {
  MEDIA_QUERY,
  MIN_SPEED,
  MAX_SPEED,
  MIN_SIZE,
  MAX_SIZE,
  MIN_ON_BULB_LIGHTNESS,
  MAX_ON_BULB_LIGHTNESS,
  MIN_OFF_BULB_LIGHTNESS,
  MAX_OFF_BULB_LIGHTNESS,
  MIN_FRAME_LIGHTNESS,
  MAX_FRAME_LIGHTNESS,
  MIN_BACKGROUND_LIGHTNESS,
  MAX_BACKGROUND_LIGHTNESS,
} from "../constants";
import { Slider, Button, Switch } from "./elements";
import CopyLinkButton from "./CopyLinkButton";
import AnimationPresets from "./AnimationPresets";

const MenuForm: FC = () => {
  const {
    menuOpen,
    size,
    onBulbLightness,
    offBulbLightness,
    frameLightness,
    backgroundLightness,
    animationSpeed,
    hideFrame,
    boomerang,
    setSize,
    resetSignConfig,
    setOnBulbLightness,
    setOffBulbLightness,
    setFrameLightness,
    setBackgroundLightness,
    setAnimationSpeed,
    setHideFrame,
    setBoomerang,
  } = useAppContext();
  const textAreaRef = useFocusSignTextArea(menuOpen);

  const handleReset = useCallback(() => {
    resetSignConfig();
    if (textAreaRef?.current) {
      textAreaRef.current.focus();
    }
  }, [resetSignConfig, textAreaRef]);

  return (
    <StyledMenuForm>
      <FormLeft>
        <PresetsContainer>
          <AnimationPresets />
        </PresetsContainer>
        <Slider
          value={size}
          label="Size"
          min={MIN_SIZE}
          max={MAX_SIZE}
          onChange={setSize}
        />
        <Slider
          value={animationSpeed}
          label="Speed"
          min={MIN_SPEED}
          max={MAX_SPEED}
          onChange={setAnimationSpeed}
        />
      </FormLeft>
      <FormButtons>
        <CopyLinkButton />
        <Button onClick={handleReset}>Reset</Button>
      </FormButtons>
      <FormRight>
        <Switch
          label="Hide Frame"
          checked={hideFrame}
          onCheckedChange={setHideFrame}
        />
        <Switch
          label="Boomerang"
          checked={boomerang}
          onCheckedChange={setBoomerang}
        />
        <SectionLabel>Lightness</SectionLabel>
        <Slider
          value={onBulbLightness}
          label="On Bulbs"
          min={MIN_ON_BULB_LIGHTNESS}
          max={MAX_ON_BULB_LIGHTNESS}
          onChange={setOnBulbLightness}
        />
        <Slider
          value={offBulbLightness}
          label="Off Bulbs"
          min={MIN_OFF_BULB_LIGHTNESS}
          max={MAX_OFF_BULB_LIGHTNESS}
          onChange={setOffBulbLightness}
        />
        <Slider
          value={frameLightness}
          label="Frame"
          min={MIN_FRAME_LIGHTNESS}
          max={MAX_FRAME_LIGHTNESS}
          disabled={hideFrame}
          onChange={setFrameLightness}
        />
        <Slider
          value={backgroundLightness}
          label="Background"
          min={MIN_BACKGROUND_LIGHTNESS}
          max={MAX_BACKGROUND_LIGHTNESS}
          onChange={setBackgroundLightness}
        />
      </FormRight>
    </StyledMenuForm>
  );
};

const StyledMenuForm = styled.div`
  display: grid;
  grid-template-areas:
    "form-left form-right"
    "form-buttons form-right";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-column-gap: var(--padding-4);
  grid-row-gap: var(--padding-3);

  @media (max-width: ${MEDIA_QUERY.MOBILE}) {
    grid-template-areas:
      "form-left"
      "form-right"
      "form-buttons";
    grid-template-columns: 1fr;
  }
`;

const FormLeft = styled.div`
  grid-area: form-left;
  > * {
    padding-bottom: var(--padding-3);
  }
  @media (max-width: ${MEDIA_QUERY.MOBILE}) {
    > *:last-child {
      padding-bottom: 0px;
    }
  }
`;

const FormRight = styled.div`
  grid-area: form-right;
  > *:not(:last-child) {
    padding-bottom: var(--padding-3);
  }
  @media (max-width: ${MEDIA_QUERY.MOBILE}) {
    > *:last-child {
      padding-bottom: var(--padding-3);
    }
  }
`;

const PresetsContainer = styled.div`
  padding-bottom: var(--padding-4);
`;

const SectionLabel = styled.p`
  text-transform: uppercase;
  color: var(--light-gray);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  padding-bottom: var(--padding-3);
  padding-top: var(--padding-3);
  -webkit-text-size-adjust: 100%;
`;

const FormButtons = styled.div`
  grid-area: form-buttons;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--padding-3);
`;

export default MenuForm;
