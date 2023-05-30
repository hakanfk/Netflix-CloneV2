import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    infoModal: counterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
