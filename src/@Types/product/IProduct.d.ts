export interface IProduct {
    id: number;
    title: string;
    description: string;
    categoryId: number;
    price: number;
    quantityStock: number;
    isActivated: boolean;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}