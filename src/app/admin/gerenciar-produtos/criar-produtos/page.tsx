"use client";

import { rubik } from "@/app/fonts";
import { Form, Input, InputNumber, Select, Switch } from "antd";

export default function CreateProducts(): JSX.Element {
  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="w-4/6 mt-3">
        <h1 className={`${rubik.className} text-2xl`}>
          Vamos criar um Produto ?
        </h1>

        <Form layout="vertical" className="mt-2">
          <Form.Item className="w-2/3" label="Nome do Produto: ">
            <Input />
          </Form.Item>

          <Form.Item className="w-2/3" label="Descrição: ">
            <Input />
          </Form.Item>

          <Form.Item className="w-1/4" label="Categoria: ">
            <Select options={[]} />
          </Form.Item>

          <Form.Item></Form.Item>

          <Form.Item className="w-1/4" label="Quantidade de Estoque: ">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Ativo ?">
            <Switch />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
