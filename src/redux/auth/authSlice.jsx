import { authOperations } from "./authOperation"

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    user: { name: 'null', email: 'null' },
    token: null,
    isLoggedIn: false,
    contacts: { name: '', number: '' }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        [authOperations.logOut.fulfilled](state) {
            state.user = { name: null, email: null }
            state.token = null
            state.isLoggedIn = false
            state.contacts = { name: null, number: null }
        },

        [authOperations.fetchCurrentUser.fulfilled](state, action) {
            state.user = { ...action.payload }
            state.isLoggedIn = true
        },
    }
})

export const authReducers = authSlice.reducer
