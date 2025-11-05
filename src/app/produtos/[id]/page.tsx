"use client";

import { useGetProductById } from "@/hooks/product/id/useGetProductById";
import { InputNumber, Rate } from "antd";
import Image from "next/image";

export default function ProductId({ params }: { params: { id: string } }): JSX.Element {
    const { product } = useGetProductById(params.id);
    
    return (
        <div className="w-full flex justify-center min-h-screen mt-3">
            <div className="w-4/6 flex justify-between flex-col">
                    {
                        product && (
                            <div className="w-full min-h-36 flex">
                                <div className="w-1/2">
                                    <Image
                                        src="https://placehold.co/600x600.png"
                                        width={600}
                                        height={600}
                                        alt=""
                                    />
                                </div>

                            <div className="w-1/2 flex flex-col p-6">
                                <h1 className="text-2xl">{product.title}</h1>
                                <Rate allowHalf defaultValue={0} className="my-2" />
                                <h2 className="text-xl">R$ {product.price}</h2>


                                <div className="w-full mt-6 flex justify-start flex-col gap-3">
                                    <InputNumber
                                        className="w-2/12  flex justify-center"
                                        min={1}
                                        defaultValue={1}
                                    />

                                    <div className="w-full h-9 flex gap-5">
                                        <button className="w-1/2 text-green-500 border rounded-md">
                                            Adicionar à Sacola
                                        </button>

                                        <button className="bg-green-500 text-white rounded-md w-1/4">
                                            Comprar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
            </div>
        </div>
    );
}