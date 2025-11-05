import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface IProductColumns {
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    productRowRef: MutableRefObject<IProduct>;
}