import { createAction } from "@reduxjs/toolkit";

/**
 * Redux actions to get user's infos
 * @reduxAction
 */

export const loadUser = createAction("get-user");

export const loadUserSuccess = createAction("get-user-success", (user) => {
  return {
    payload: user,
  };
});

export const loadUserError = createAction("get-user-error", (error) => {
  return {
    payload: error,
  };
});
