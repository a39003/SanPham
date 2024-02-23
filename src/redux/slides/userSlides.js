import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  name: '',
  email:''
  
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      updateUser: (state, action) => {
          const {name, email} = action.payload
          state.name = name || email;
          state.email = email;
      },
  },
})

// Action creators are generated for each case reducer function
export const { initialUser } = userSlice.actions

export default userSlice.reducer