import {ChangeEvent, PropsWithChildren} from "react";

export type TYPE_INPUT = {
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    label?: string
    type: string
} & PropsWithChildren