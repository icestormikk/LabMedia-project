import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface SearchBarState {
  query: string
}

const initialState: SearchBarState = {
  query: ''
}

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload.toLocaleLowerCase()
    }
  }
})

export const { setQuery } = searchBarSlice.actions
export const searchBarReducer = searchBarSlice.reducer