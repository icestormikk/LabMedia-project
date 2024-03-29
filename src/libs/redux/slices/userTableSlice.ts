import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { User } from "../../../data/User"
import { getUsers } from "../../../data/fetch"

/**
 * All the sorting types available in the application
 */
export enum SortingMode {
  BY_REGISTRATION_DATE = "Дата регистрации", BY_RATING = "Рейтинг"
}

/**
 * Information about the current sorting method
 */
export type SortingData = {
  type: SortingMode,
  direction: 'asc'|'desc'
}

interface UserTableState {
  users: User[]
  sorting?: SortingData
}

const initialState: UserTableState = {
  users: [],
  sorting: undefined
}

export const getUsersThunk = createAsyncThunk(
  'users/getAll',
  async () => {
    const response = await getUsers()
    return response
  }
)

const userTableSlice = createSlice({
  name: 'userTable',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
    setSorting: (state, action: PayloadAction<SortingMode|undefined>) => {
      const type = action.payload

      // canceling the sorting of the list
      if (!type) {
        state.sorting = undefined
        return
      }

      // if the sorting method was selected by another property
      if (type !== state.sorting?.type) {
        state.sorting = {type, direction: 'desc' }
        return
      }

      // if sorting by the same property was selected
      if (state.sorting.direction !== 'asc') {
        state.sorting.direction = 'asc'
        return
      }

      state.sorting = undefined
    }
  },
  extraReducers(builder) {
    builder.addCase(getUsersThunk.pending, (state) => {
      state.users = []
    })
    builder.addCase(getUsersThunk.fulfilled, (state, action) => {
      state.users = action.payload.map((user) => { 
        return {...user, registrationDate: new Date(user.registration_date)} 
      })
    })
    builder.addCase(getUsersThunk.rejected, (state) => {
      state.users = []
    })
  },
})

export const { setUsers, setSorting } = userTableSlice.actions
export const userTableReducer = userTableSlice.reducer