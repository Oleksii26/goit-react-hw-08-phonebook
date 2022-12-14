import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"



export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
        filter: '',
    },
    reducers: {
        addContact(state, action) {
            const nameToCheck = action.payload.name
            const isIncludeName = state.contacts.some(contact => contact.name === nameToCheck)
            if (isIncludeName) {
                return alert(`${action.payload.name} is already in contacts`)
            }
            state.contacts.push({
                id: new Date().toISOString(),
                name: action.payload.name,
                number: action.payload.number,
            })
        },

        onRemove(state, action) {
            state.contacts = state.contacts.filter(e => e.id !== action.payload.id)
        },

        filterContacts(state, action) {
            state.filter = action.payload
        }
    }
})


const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
}

export const contactReduser = persistReducer(persistConfig, contactSlice.reducer)

export const { addContact, onRemove, filterContacts } = contactSlice.actions
