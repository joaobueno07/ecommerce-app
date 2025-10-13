import { createProduct } from "@/app/utils/products/createProduct";
import useSWRMutation from "swr/mutation";

export function useCreateProduct() {
  const { data, trigger, isMutating, error, reset } = useSWRMutation(
    "api/products/create",
    createProduct
  );

  return {
    createProductTrigger: trigger,
    isMutating,
    error,
    reset,
  };
}
