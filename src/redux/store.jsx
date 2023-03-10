import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { contactReduser } from "./contactSlice"
import { filterReducer } from "./filterSlice"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import { authReducers } from "./auth/authSlice"

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck:{
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
        }
    })
]

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducers),
        contacts: contactReduser,
        filter: filterReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development'
})

export const persistor = persistStore(store)