"use client";

import { useProductList } from "@/hooks/product/list/useProductList";
import { productColumns } from "@/utils/products/productColumns";
import { Button, Table } from "antd";
import { Plus } from "lucide-react";

export default function ManageProducts(): JSX.Element {
  const { products } = useProductList();

  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="w-4/6">
        <div className="flex items-center justify-between  h-20">
          <h1 className="text-2xl">Confira os produtos cadastrados!</h1>

          <Button
            href="/admin/gerenciar-produtos/cadastrar-produto"
            icon={
              <div className="flex items-center">
                <Plus width={20} />
              </div>
            }
            variant="outlined"
            color="green"
          >
            Cadastrar Novo Produto
          </Button>
        </div>
        
        <Table columns={productColumns} dataSource={products} />
      </div>
    </div>
  );
}
