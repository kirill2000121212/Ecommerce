import {ChangeEvent, PropsWithChildren} from "react";
import {Path, UseFormRegister} from "react-hook-form";

export type TYPE_INPUT = {
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    label: Path<{name: string}>
    type: string
    register: UseFormRegister<{name: string} | {pattern: RegExp,required: boolean}>
    required: boolean
    pattern: RegExp
} & PropsWithChildren