import { Dispatch, SetStateAction } from "react";
import { ICartProduct } from "./IProduct";

export interface ICartContext{
    cart: ICartProduct[];
    setCart: Dispatch<SetStateAction<ICartProduct[]>>
}