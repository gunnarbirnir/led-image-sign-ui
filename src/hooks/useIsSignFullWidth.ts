import { useMemo } from "react";

import useWindowDimensions from "./useWindowDimensions";

const SIGN_PADDING = 40;

const useIsSignFullWidth = (size: number) => {
  const { width } = useWindowDimensions();

  const isFullWidth = useMemo(() => {
    return width > 0 && width < size + SIGN_PADDING;
  }, [width, size]);

  return isFullWidth;
};

export default useIsSignFullWidth;
