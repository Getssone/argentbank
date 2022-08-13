import { createReducer } from "@reduxjs/toolkit";

/**
 * @reducer
 */
//fichier getUser
import { loadUser, loadUserError, loadUserSuccess } from "../actions/getUser";
//fichier logout
import { logOut } from "../actions/logout";
//fichier editUser
import { editUser, editUserSuccess, editUserError } from "../actions/editUser";

const initialStateUser = {
  isLoading: false,
  isLogged: false,
  user: {},
  error: "",
};

const userReducer = createReducer(initialStateUser, (builder) => {
  return builder
    .addCase(loadUser, (draft) => {
      draft.isLoading = true;
      return;
    })
    .addCase(loadUserSuccess, (draft, action) => {
      draft.isLoading = false;
      draft.isLogged = true;
      draft.user = action.payload;
      draft.error = "";
      return;
    })
    .addCase(loadUserError, (draft, action) => {
      draft.isLoading = false;
      draft.isLogged = false;
      draft.user = {};
      draft.error = action.payload;
      return;
    })
    .addCase(logOut, (draft, action) => {
      draft.isLoading = false;
      draft.isLogged = false;
      draft.user = {};
      draft.error = action.payload;
      return;
    })
    .addCase(editUser, (draft) => {
      draft.isLoading = true;
      return;
    })
    .addCase(editUserSuccess, (draft, action) => {
      draft.isLoading = false;
      draft.user = action.payload;
      draft.error = "";
      return;
    })
    .addCase(editUserError, (draft, action) => {
      draft.isLoading = false;
      draft.user = {};
      draft.error = action.payload;
      return;
    });
});

export default userReducer;
