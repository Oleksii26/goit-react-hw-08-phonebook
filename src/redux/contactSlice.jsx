import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContacts, addContactsInBack } from "./operations";

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {
            item: [],
            isLoadin: false,
            erro: null,
        },
        items: [],
        isLoading: false,
        error: null,
        filter: '',
    },

    reducers: {
        filterContacts(state, action) {
            state.filter = action.payload
        },
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

        [addContactsInBack.pending](state) {
            state.isLoading = true
        },
        [addContactsInBack.fulfilled](state, action) {
            state.isLoading = false
            state.error = null
            state.items.push(action.payload)
        },
        [addContactsInBack.rejected](state, action) {
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
            console.log(action)
        },
        [deleteContacts.rejected](state, action) {
            state.isLoading = false
            state.error = action.payload
        },

    }
})

export const contactReduser = contactSlice.reducer
// export const { filterContacts } = contactSlice.actions
