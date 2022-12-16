import { configureStore } from "@reduxjs/toolkit"
import { contactReduser } from "./contactSlice"

export const store = configureStore({
    reducer: {
        contacts: contactReduser,
    },
})
