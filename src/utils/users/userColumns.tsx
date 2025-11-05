import { ColumnsType } from "antd/es/table";
import { SquarePen, Trash2 } from "lucide-react";

export const userColumns: ColumnsType = [
    {
        key: 1,
        title: "Id do Usuário",
        dataIndex: "id",
        align: "center",
    },
    {
        key: 2,
        title: "Nome do Usuário",
        dataIndex: "name",
        align: "center",
    },
    {
        key: 3,
        title: "Email",
        dataIndex: "email",
        align: "center",
    },
    {
        key: 4,
        title: "Ações",
        align: "center",
        render: () => (
            <div className="w-full flex justify-center">
                <div className="w-1/2 flex justify-evenly">
                    <SquarePen className=""/>
                    <Trash2  color="red"/>
                </div>
            </div>
        )
    }
];