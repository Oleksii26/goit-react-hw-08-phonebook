import { configureStore } from "@reduxjs/toolkit"
import { contactReduser } from "./contactSlice"
import { filterReducer } from "./filterSlice"

export const store = configureStore({
    reducer: {
        contacts: contactReduser,
        filter: filterReducer,
    },
})
