import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null
        },
        items: [],
        isLoading: false,
        error: null,
        filter: '',
    },

    reducers: {
        addContact(state, action) {
            const nameToCheck = action.payload.name
            const isIncludeName = state.contacts.items.some(contact => contact.name === nameToCheck)
            if (isIncludeName) {
                return alert(`${action.payload.name} is already in contacts`)
            }
            state.contacts.items.push({
                id: new Date().toISOString(),
                name: action.payload.name,
                number: action.payload.number,
            })
        },

        onRemove(state, action) {
            state.contacts.items = state.contacts.items.filter(e => e.id !== action.payload.id)
        },

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
    }
})

export const contactReduser = contactSlice.reducer
export const { addContact, onRemove, filterContacts } = contactSlice.actions
