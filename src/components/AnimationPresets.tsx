import React, { FC } from "react";
import styled from "styled-components";

import { useAppContext } from "../hooks";
import { animationPresets } from "../animations";
import { Pill } from "./elements";

const AnimationPresets: FC = () => {
  const { preset, setPreset } = useAppContext();

  return (
    <StyledAnimationPresets>
      {animationPresets.map((presetItem) => (
        <Pill
          key={presetItem.id}
          active={presetItem.id === preset}
          onClick={() => setPreset(presetItem.id)}
        >
          {presetItem.label}
        </Pill>
      ))}
    </StyledAnimationPresets>
  );
};

const StyledAnimationPresets = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--padding-2);
`;

export default AnimationPresets;
