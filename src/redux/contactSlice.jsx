import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
// import { persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage"
// import { fetchContacts } from "./operations";



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


    extraReducers: {
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


// const persistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter']
// }

// export const contactReduser = persistReducer(persistConfig, contactSlice.reducer)
export const contactReduser = contactSlice.reducer
export const { addContact, onRemove, filterContacts } = contactSlice.actions
