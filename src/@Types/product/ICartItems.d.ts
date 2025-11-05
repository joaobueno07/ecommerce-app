export interface ICartItems {
  cart: IProduct[];
  setCart: Dispatch<SetStateAction<ICartProduct[]>>;
  productQuantity: number;
  setProductQuantity: Dispatch<SetStateAction<number>>;
//   addToCart(prevProduct: ICartProduct[], product: IProduct): ICartProduct[];
//   removeToCart(id: number): void;
}
