import {createSlice} from "@reduxjs/toolkit";
import {I_CHECKBOX_COLOR} from "@/features/filterColor/model/slices/types.ts";

const initialState: Omit<I_CHECKBOX_COLOR, 'icon' | 'checkedIcon'>[] =
    [{
        isChecked: false,
        label: 'DullBlue',
    }, {
        isChecked: false,
        label: 'Yellow',
    }, {
        isChecked: false,
        label: 'Green',
    }, {
        isChecked: false,
        label: 'Blue',
    }]

const checkboxColorSlice = createSlice({
    name: 'checkboxColor',
    initialState,
    reducers: {
        checkCheckbox: (state, {payload}) => {
            return state.reduce((acc, value) => {
                return payload === value.label
                    ?
                    [...acc, {'label': value.label, isChecked: !value.isChecked}]
                    :
                    [...acc, value]
            }, [])
        }
    }
})

export const {checkCheckbox} = checkboxColorSlice.actions
export default checkboxColorSlice.reducer