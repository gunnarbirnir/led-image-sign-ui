import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import { BaseProps } from "../../types";
import { MEDIA_QUERY } from "../../constants";

interface PillProps extends BaseProps {
  active?: boolean;
  onClick: () => void;
}

const Pill: FC<PropsWithChildren<PillProps>> = ({
  active = false,
  children,
  className,
  style,
  onClick,
}) => {
  if (active) {
    return (
      <ActivePill className={className} style={style}>
        {children}
      </ActivePill>
    );
  }

  return (
    <InactivePill onClick={onClick} className={className} style={style}>
      {children}
    </InactivePill>
  );
};

const ActivePill = styled.div`
  color: var(--black);
  background-color: var(--primary-color-light);
  padding: var(--padding-2) var(--padding-3);
  border: var(--border-width) solid var(--primary-color-light);
  border-radius: var(--border-radius-round);
  text-transform: uppercase;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
`;

const InactivePill = styled.button`
  color: var(--primary-color-light);
  background-color: var(--background-color);
  padding: var(--padding-2) var(--padding-3);
  border: var(--border-width) solid var(--primary-color-light);
  border-radius: var(--border-radius-round);
  text-transform: uppercase;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);

  :hover {
    transform: scale(1.02);
  }
  :active {
    transform: scale(0.98);
  }

  @media (min-width: ${MEDIA_QUERY.MOBILE}) {
    :hover,
    :active {
      border-color: var(--primary-color-hover);
      color: var(--primary-color-hover);
    }
  }
`;

export default Pill;
