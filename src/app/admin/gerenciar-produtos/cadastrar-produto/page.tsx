"use client";

import { ICategory } from "@/app/@Types/category/ICategory";
import { rubik } from "@/app/fonts";
import { useCategoriesList } from "@/app/hooks/categories/list/useCategoriesList";
import { useCreateProduct } from "@/app/hooks/product/create/useCreateProduct";
import { Button, Form, Input, InputNumber, Row, Select, Switch } from "antd";

export default function CreateProducts(): JSX.Element {
  const { createProductTrigger } = useCreateProduct();
  const { categories } = useCategoriesList();
  
  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="w-4/6 mt-3">
        <h1 className={`${rubik.className} text-2xl`}>
          Vamos cadastrar um Produto ?
        </h1>

        <Form layout="vertical" method="POST" className="mt-2" onFinish={(product) => createProductTrigger(product)}>
          <Form.Item className="w-2/3" label="Nome do Produto: " name="title">
            <Input />
          </Form.Item>

          <Form.Item className="w-2/3" label="Descrição: " name="description">
            <Input />
          </Form.Item>

          <Row className="w-4/6" align="middle" justify="space-between" gutter={4}>
            <Form.Item className="w-1/4" label="Categoria: " name="categoryId">
              <Select placeholder="Selecione uma categoria"> 
                { 
                  categories && categories.map((category: ICategory) => {
                    return <Select.Option value={category.id}> {category.name}</Select.Option>
                  })
                }
              </Select>
            </Form.Item>

            <Form.Item className="w-1/4" label="Preço: " name="price">
              <InputNumber className="w-full"/>
            </Form.Item>

            <Form.Item className="w-1/4" label="Quantidade de Estoque: " name="quantityStock">
              <InputNumber className="w-full"/>
            </Form.Item>
          </Row>

            <Form.Item label="Ativo ?" name="isActivated">
              <Switch />
            </Form.Item>

          <Button variant="outlined" color="green" htmlType="submit">Cadastrar Produto</Button>
        </Form>
      </div>
    </div>
  );
}
