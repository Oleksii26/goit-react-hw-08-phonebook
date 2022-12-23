import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// axios.defaults.baseURL = 'https://639ae08d31877e43d6797a1b.mockapi.io/contacts'


export const fetchContacts = createAsyncThunk('contacts/fetchAll',

    async (_, thunkAPI) => {
        try {
            const responce = await axios.get('/contacts')
            return responce.data
        } catch (e) {
            return thunkAPI.rejectWithValue(/* e.message */'You must registrations')
        }
    }
)
// export const addContactsInBack = createAsyncThunk(
//     "contacts/addContacts",
//     async (text, thunkAPI) => {
      
//         try {
//             const response = await axios.post("/contacts", text);
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }

// );

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
