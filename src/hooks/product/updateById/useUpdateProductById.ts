import { editProductById } from "@/utils/products/editProductById";
import useSWRMutation from "swr/mutation";

export function useUpdateProductById(id: number) {
    const productId = id.toString();
    
    const { 
        trigger, 
        isMutating, 
        data, 
        reset, 
        error 
    } = useSWRMutation(`/api/products/edit/${productId}`, editProductById);


    return {
        editProductById: trigger,
        isMutating,
        data,
        error,
        reset,
    };
}