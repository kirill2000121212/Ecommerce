import {PropsWithChildren} from "react";
import {UseFormRegister, FieldValues} from "react-hook-form";

export type TYPE_INPUT = {
    placeholder?: string
    label: FieldValues | string
    type: string
    register: UseFormRegister< FieldValues >
    required: boolean
    pattern: RegExp
} & PropsWithChildren