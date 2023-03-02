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
        },
        clearUser: (state) => {
            state.token = ''
            state.profile = null
        },
        updatesUserProfile: (state, action) => {
            state.profile = action.payload
        }
    },
})

export const { addUser, clearUser, updatesUserProfile } = userSlice.actions
export default userSlice.reducer