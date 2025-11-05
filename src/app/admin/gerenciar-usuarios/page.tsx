"use client";

import { useUserList } from "@/hooks/user/list/useUserList";
import { userColumns } from "@/utils/users/userColumns";
import { Table } from "antd";

export default function ManageUsers(): JSX.Element {
    const { users } = useUserList();

    return (
        <div className="w-full min-h-screen flex justify-center">
            <div className="w-4/6">
                <h1 className="text-2xl mt-3">Gerenciar Usuários</h1>

                <Table dataSource={users} bordered columns={userColumns} className="mt-3"/>
            </div>
        </div>
    );
}