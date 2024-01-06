import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer,
    gpt: gptReducer
  },
});

export default appStore;
