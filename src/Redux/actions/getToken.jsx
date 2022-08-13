import { createAction } from "@reduxjs/toolkit";

/**
 * Redux actions to get Token
 * @reduxAction
 */

export const loadToken = createAction("load-token");

export const loadTokenSuccess = createAction("get-token-success", (token) => {
  return {
    payload: { token },
  };
});

export const loadTokenError = createAction("get-token-error", (error) => {
  return {
    payload: { error },
  };
});
