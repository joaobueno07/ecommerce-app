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
        align: "center"
    },
    {
        key: 5,
        title: "Ações",
        align: "center",
        render: () => (
            <div>
                <SquarePen />
                <Trash2 />
            </div>
        )
    }
];