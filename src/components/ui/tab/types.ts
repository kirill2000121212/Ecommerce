import {MouseEvent, PropsWithChildren} from "react";

export type TYPE_TAB_BTN = {
    onClick: (event:MouseEvent<HTMLButtonElement>) => void
    isActive: boolean
} & PropsWithChildren