import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ``
    }
}


const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials)
        token.set(data.token)
        return data
    } catch (error) {
        alert('This user is exsist')
    }
})

const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials)
        token.set(data.token)
        return data
    } catch (error) {
        alert('Fail, try again!')
    }
})

const logOut = createAsyncThunk('auth/logout', async credentials => {
    try {
        const { data } = await axios.post('/users/logout', credentials)
        token.unset()
        return data
    } catch (error) {

    }
})

const addContact = createAsyncThunk('auth/postContact',
    async (text, thunkAPI) => {
        try {
            const { data } = await axios.post("/contacts", text);
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistToken = state.auth.token
    if (persistToken === null)
        return thunkAPI.rejectWithValue('Error')
    token.set(persistToken)
    try {
        const { data } = await axios.get('/users/current')
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})


export const authOperations = { register, logIn, logOut, addContact, fetchCurrentUser }



