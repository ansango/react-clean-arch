import { configureStore } from "@reduxjs/toolkit";

import plantSlice from "./plant/plant.slice";

export const store = configureStore({
  reducer: {
    plantSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
