import { configureStore/* , getDefaultMiddleware  */} from "@reduxjs/toolkit"
import { contactReduser } from "./contactSlice"
import { filterReducer } from "./filterSlice"
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import { authReducers } from "./auth/authSlice"

// const middleware = []

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelst: ['token']
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducers),
        contacts: contactReduser,
        filter: filterReducer,
    },
    // middleware,
    devTools: process.env.NODE_ENV === 'development'
})
