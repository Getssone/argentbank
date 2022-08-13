import { createReducer } from "@reduxjs/toolkit";

/**
 * @reducer
 */

import {
  loadToken,
  loadTokenError,
  loadTokenSuccess,
} from "../actions/getToken";

const initialStateToken = {
  isLoading: false,
  token: "",
  tokenExist: "",
  error: "",
};

const tokenReducer = createReducer(initialStateToken, (builder) => {
  return builder
    .addCase(loadToken, (draft) => {
      draft.isLoading = true;
      draft.token = "";
      draft.tokenExist = "";
      draft.error = "";
      return;
    })
    .addCase(loadTokenSuccess, (draft, action) => {
      draft.isLoading = false;
      draft.token = action.payload;
      draft.tokenExist = true;
      draft.error = "";
      return;
    })
    .addCase(loadTokenError, (draft, action) => {
      draft.isLoading = false;
      draft.token = "";
      draft.tokenExist = false;
      draft.error = action.payload;
      return;
    });
});
export default tokenReducer;
