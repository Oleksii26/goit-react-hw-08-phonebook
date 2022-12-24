import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from "./auth/authOperation";
import { fetchContacts, deleteContacts } from "./operations";

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },

    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false
            state.error = null
            state.items = action.payload
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
        },
        
        [authOperations.addContact.pending](state) {
            state.isLoading = true
        },
        [authOperations.addContact.fulfilled](state, action) {
            state.isLoading = false
            state.error = null
            state.items.push(action.payload)
        },
        [authOperations.addContact.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
        },
        [deleteContacts.pending](state) {
            state.isLoading = true
        },
        [deleteContacts.fulfilled](state, action) {
            state.isLoading = false
            state.error = null
            state.items = state.items.filter(e => e.id !== action.payload.id)
        },
        [deleteContacts.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
        },

    }
})

export const contactReduser = contactSlice.reducer
