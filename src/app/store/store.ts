import { configureStore } from '@reduxjs/toolkit'
import { postApi } from '../../entities/post/postApi'
import postSlice from '../../entities/post/model/postSlice'


export const store = configureStore({
  reducer: {
    post: postSlice,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
