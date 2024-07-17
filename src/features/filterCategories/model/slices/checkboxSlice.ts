import {createSlice} from '@reduxjs/toolkit'
import {I_CHECKBOX} from "@/features/filterCategories/model/slices/types.ts";

const initialState: I_CHECKBOX[] =
    [{
        isChecked: false,
        label: 'Perfume'
    }, {
        isChecked: false,
        label: 'Trousers'
    }, {
        isChecked: false,
        label: 'Shoe'
    }, {
        isChecked: false,
        label: 'Handbag'
    }, {
        isChecked: false,
        label: 'Hat'
    }, {
        isChecked: false,
        label: 'Thermos'
    }]


const checkboxSlice = createSlice({
    name: 'checkbox',
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

export const {checkCheckbox} = checkboxSlice.actions
export default checkboxSlice.reducer