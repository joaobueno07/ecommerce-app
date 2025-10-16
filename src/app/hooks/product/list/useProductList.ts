import getProducts from "@/app/utils/products/getProducts";
import useSWR from "swr";

export function useProductList() {
    const { data } = useSWR("/api/products", getProducts);

    return { data };
}