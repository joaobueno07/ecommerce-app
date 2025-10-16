import { IProduct } from "@/app/@Types/product/IProduct";

export async function createProduct(url: string, { arg }: { arg: IProduct }): Promise<IProduct> {
    console.log(arg);
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(arg)
    });

    return response.json();
}