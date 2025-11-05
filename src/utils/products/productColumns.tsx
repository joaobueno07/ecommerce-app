import { IProduct } from "@/@Types/product/IProduct";
import { TableColumnsType, Tag } from "antd";
import { SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";

// export function productColumn({ setOpenModal, productRowRef }: IProductColumns) {
    
//     function editProduct(product: IProduct) {
//         setOpenModal(true);
//         productRowRef.current = product;
//     }

export const productColumns: TableColumnsType<IProduct> = [
    {
        key: 1,
        title: "Nome do Produto",
        dataIndex: "title",
        align: "center"
    },
    {
        key: 2,
        title: "Preço",
        dataIndex: "price",
        align: "center"
    },
    {
        key: 3,
        title: "Quantidade em Estoque",
        dataIndex: "quantityStock",
        align: "center"
    },
    {
        key: 4,
        title: "Status",
        dataIndex: "isActivated",
        align: "center",
        render: (active: boolean) => (
            active ? <Tag color="green">Ativo</Tag> : <Tag color="red">Inativo</Tag>
        )
    },
    {
        key: 5,
        title: "Ações",
        align: "center",
        render: (record) => (
            <div className="w-full flex justify-center">
                <div className="w-1/2 flex justify-evenly">
                    <Link href={`/admin/gerenciar-produtos/editar-produtos/${record.id}`}>
                        <SquarePen width={20}  className="cursor-pointer"/>
                    </Link>
                    <Trash2 width={20}  color="red" className="cursor-pointer"/>
                </div>
            </div>
        )
    }
];
