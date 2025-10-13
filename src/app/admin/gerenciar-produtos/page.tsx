"use client";

import { columns } from "@/app/utils/products/columns";
import { Table } from "antd";

export default function ManageProducts(): JSX.Element {
  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="w-4/6">
        <h1 className="text-2xl mb-4">Confira os produtos cadastrados!</h1>
        <Table columns={columns} />
      </div>
    </div>
  );
}
