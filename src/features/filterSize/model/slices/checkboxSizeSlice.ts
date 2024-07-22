import {createSlice} from "@reduxjs/toolkit";
import {I_CHECKBOX_SIZE} from "./types.ts";

const initialState: Omit<I_CHECKBOX_SIZE, 'icon' | 'checkedIcon'>[] =
    [{
        isChecked: false,
        label: 'S',
    }, {
        isChecked: false,
        label: 'M',
    }, {
        isChecked: false,
        label: 'L',
    }, {
        isChecked: false,
        label: 'XL',
    },{
        isChecked: false,
        label: 'XXL',
    }]

const checkboxSizeSlice = createSlice({
    name: 'checkboxSize',
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

export const {checkCheckbox} = checkboxSizeSlice.actions
export default checkboxSizeSlice.reducer