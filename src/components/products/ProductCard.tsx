import { IProduct } from "@/@Types/product/IProduct";
import { useProductList } from "@/hooks/product/list/useProductList";
import { Card } from "antd";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard(): JSX.Element {
  const { products } = useProductList();

  return (
    <div className="w-full flex justify-evenly items-center">
      <div className="w-11/12 sm:w-4/6 sm:grid grid-cols-3 gap-6 my-3">
        {products &&
          products.map((product: IProduct, index: number) => {
            if (product.isActivated) {
              return (
                <Card
                  key={index}
                  cover={
                    <Link href={`/produtos/${product.id}`}>
                      <Image
                        className="cursor-pointer w-full"
                        src="https://placehold.co/200x200.png"
                        width={200}
                        height={200}
                        alt="Imagem genérica"
                      />
                    </Link>
                  }
                  className="w-full my-6"
                >
                  <h1 className="text-start">{product.title}</h1>
                  <h2 className="font-bold">R$ {product.price}</h2>
                </Card>
              );
            }
          })}
      </div>
    </div>
  );
}
