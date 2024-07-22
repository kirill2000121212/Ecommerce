import {configureStore} from "@reduxjs/toolkit";
import checkboxSlice from "@/features/filterCategories/model/slices/checkboxSlice.ts";
import checkboxColorSlice from "@/features/filterColor/model/slices/checkboxColorSlice.ts";
import checkboxSizeSlice from "@/features/filterSize/model/slices/checkboxSizeSlice.ts";

export const store = configureStore({
    reducer: {
        checkboxSlice,
        checkboxColorSlice,
        checkboxSizeSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>