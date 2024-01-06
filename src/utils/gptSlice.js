import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptScreen: false,
    searchedResult: null,
  },
  reducers: {
    toggleShowGptScreen: (state, action) => {
      state.showGptScreen = !state.showGptScreen;
    },
    addSearchResult: (state, action) => {
      state.searchedResult = action.payload;
    },
  },
});

export const { toggleShowGptScreen, addSearchResult } = gptSlice.actions;
export default gptSlice.reducer;
