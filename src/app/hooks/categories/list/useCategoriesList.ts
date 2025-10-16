import { ICategory } from "@/app/@Types/category/ICategory";
import getCategories from "@/app/utils/categories/getCategories";
import useSWR from "swr";

export function useCategoriesList() {
    const { data, mutate, isLoading, isValidating, error } = useSWR<ICategory[]>("/api/categories", getCategories);

    return {
        categories: data,
        mutate,
        isLoading,
        isValidating, 
        error
    };
}