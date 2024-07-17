import {configureStore} from "@reduxjs/toolkit";
import checkboxSlice from "@/features/filterCategories/model/slices/checkboxSlice.ts";

export const store = configureStore({
    reducer: {
        checkboxSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>