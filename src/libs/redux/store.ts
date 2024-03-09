import { userTableReducer } from './slices/userTableSlice'
import { searchBarReducer } from './slices/searchBarSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    userTable: userTableReducer,
    searchBar: searchBarReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch