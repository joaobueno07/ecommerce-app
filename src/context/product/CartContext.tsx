"use client";

import { ICartItems } from "@/@Types/product/ICartItems";
import { ICartProduct } from "@/@Types/product/IProduct";
import { createContext, ReactNode, useState } from "react";

export const ShoppingCartContext = createContext<ICartItems>({} as ICartItems);

export default function CartProvider({children}: {children: ReactNode}) {
    const [cart, setCart] = useState<ICartProduct[]>([]);
    const [productQuantity, setProductQuantity] = useState<number>(1);

    return (
        <ShoppingCartContext.Provider value={{cart, setCart, setProductQuantity, productQuantity}}>
            {children}
        </ShoppingCartContext.Provider>
    );
}