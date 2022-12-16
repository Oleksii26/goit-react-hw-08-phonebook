import axios from "axios"
import { fetchError, fetchProgress, fetchSucsess } from "./contactSlice"



axios.defaults.baseURL = 'https://639ae08d31877e43d6797a1b.mockapi.io/contacts'

export const fetchContacts = () => async dispatch => {
    try {
        dispatch(fetchProgress())
        const responce = await axios.get('/contacts')
        dispatch(fetchSucsess(responce.data))
    } catch (error) {
        dispatch(fetchError(error.message))
    }
}
// async (_, thunkAPI) => {
//     try {
//         const responce = await axios.get('/contacts')
//         return responce.data
//     } catch (e) {
//         return thunkAPI.rejectWithValue(e.message)
//     }
// }
