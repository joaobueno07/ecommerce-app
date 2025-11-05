
import { IProduct } from "@/@Types/product/IProduct";
import getProductById from "@/utils/products/getProductById";
import useSWR from "swr";

export function useGetProductById(id: string) {
    const { data, mutate, isValidating, isLoading, error  } = useSWR<IProduct>(`/api/products/${id}`, getProductById);
    return {
        product: data,
        mutate,
        isValidating,
        isLoading,
        error
    };
}