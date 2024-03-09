import { userTableReducer } from './slices/userTableSlice'
import { searchBarReducer } from './slices/searchBarSlice'
import { configureStore } from '@reduxjs/toolkit'

/**
 * The basic configuration of the data storage in the application application
 */
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