import { IProduct } from "@/@Types/product/IProduct";
import { createProduct } from "@/utils/products/createProduct";
import { message } from "antd";
import useSWRMutation from "swr/mutation";

export function useCreateProduct() {
  const { data, trigger, isMutating, error, reset } = useSWRMutation<IProduct>(
    "/api/products/",
    createProduct,
    {
      onSuccess: () =>
        message.success("Seu Produto foi cadastrado com sucesso!"),
      onError: () =>
        message.error(
          "Ocorreu um erro ao cadastrar o produto. Tente novamente!"
        ),
    }
  );

  return {
    createdProduct: data,
    createProductTrigger: trigger,
    isMutating,
    error,
    reset,
  };
}
