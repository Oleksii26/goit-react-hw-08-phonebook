import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL = 'https://639ae08d31877e43d6797a1b.mockapi.io/contacts'

export const fetchContacts = createAsyncThunk('contacts/fetchAll',

    async (_, thunkAPI) => {
        try {
            const responce = await axios.get('/contacts')
            return responce.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)
