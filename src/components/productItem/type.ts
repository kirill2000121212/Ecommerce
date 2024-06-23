import {PropsWithChildren} from "react";

export type TYPE_PRODUCT_ITEM ={
    productName: string
    inStock: boolean
    price: number
} & PropsWithChildren