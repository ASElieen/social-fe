import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
    token: '',
    profile: null
}

const userSlice = createSlice({
    name: 'user',
    initialStates,
    reducers: {
        addUser: (state, action) => {
            const { token, profile } = action.payload
            state.token = token
            state.profile = profile
        }
    },
})

export const { addUser } = userSlice.actions
export default userSlice.reducer