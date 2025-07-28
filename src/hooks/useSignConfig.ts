import { useReducer, useCallback, useMemo } from "react";
import { debounce } from "debounce";

import signConfigReducer, {
  SignConfigActionType,
  SignConfigUpdate,
} from "../reducers/signConfigReducer";
import { INIT_SIGN_CONFIG } from "../constants";
import { presetMap } from "../animations";
import useUrlParams from "./useUrlParams";

const initSignConfig = {
  ...INIT_SIGN_CONFIG,
  ...(presetMap[INIT_SIGN_CONFIG.preset]?.config || {}),
};

const INIT_STATE = {
  ...initSignConfig,
  input: initSignConfig,
  initialized: false,
};

const useSignConfig = () => {
  const [state, dispatch] = useReducer(signConfigReducer, INIT_STATE);

  const initConfig = useCallback((config: SignConfigUpdate) => {
    dispatch({
      type: SignConfigActionType.INIT_SIGN_CONFIG,
      payload: config,
    });
  }, []);

  const updateUrlParams = useUrlParams(initConfig, initSignConfig);

  const debouncedUpdateConfig = useMemo(
    () =>
      debounce((config: SignConfigUpdate) => {
        dispatch({
          type: SignConfigActionType.UPDATE_SIGN_CONFIG,
          payload: config,
        });
        updateUrlParams(config);
      }, 500),
    [updateUrlParams]
  );

  const updateSignConfig = useCallback(
    (config: SignConfigUpdate) => {
      dispatch({
        type: SignConfigActionType.UPDATE_CONFIG_AND_INPUT,
        payload: config,
      });
      updateUrlParams(config);
    },
    [updateUrlParams]
  );

  const updateSignConfigDebounced = useCallback(
    (config: SignConfigUpdate) => {
      dispatch({
        type: SignConfigActionType.UPDATE_CONFIG_INPUT,
        payload: config,
      });
      debouncedUpdateConfig(config);
    },
    [debouncedUpdateConfig]
  );

  const resetSignConfig = useCallback(() => {
    const resetPayload = {
      ...INIT_SIGN_CONFIG,
      preset: state.preset,
      ...(presetMap[state.preset]?.config || {}),
    };
    dispatch({
      type: SignConfigActionType.UPDATE_CONFIG_AND_INPUT,
      payload: resetPayload,
    });
    updateUrlParams(resetPayload);
  }, [state.preset, updateUrlParams]);

  return {
    ...state,
    updateSignConfig,
    updateSignConfigDebounced,
    resetSignConfig,
  };
};

export default useSignConfig;
