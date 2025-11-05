import { IProduct } from "@/@Types/product/IProduct";
import getProducts from "@/utils/products/getProducts";
import useSWR from "swr";

export function useProductList() {
  const { data, mutate, isValidating, isLoading, error } = useSWR<IProduct[]>("/api/products", getProducts);

  return { 
    products: data,
    mutateProducts: mutate,
    isValidating,
    isLoading,
    error
  };
}
