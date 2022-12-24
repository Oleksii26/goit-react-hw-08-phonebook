import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchContacts = createAsyncThunk('contacts/fetchAll',

    async (_, thunkAPI) => {
        try {
            const responce = await axios.get('/contacts')
            return responce.data
        } catch (e) {
            return thunkAPI.rejectWithValue('You must registrations')
        }
    }
)

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
