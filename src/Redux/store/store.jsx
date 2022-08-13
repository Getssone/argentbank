import userReducer from "../reducers/userReducer";
import tokenReducer from "../reducers/tokenReducer";
import { configureStore } from "@reduxjs/toolkit";

/**
 * @store
 */

const store = configureStore({
  reducer: {
    token: tokenReducer,
    getUser: userReducer,
  },
});
export default store;
