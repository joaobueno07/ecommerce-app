import { Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { SquarePen, Trash2 } from "lucide-react";

export const columns: ColumnsType = [
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
        render: () => (
            <div className="w-full flex justify-center">
                <div className="w-1/2 flex justify-evenly">
                    <SquarePen />
                    <Trash2 />
                </div>
            </div>
        )
    }
];