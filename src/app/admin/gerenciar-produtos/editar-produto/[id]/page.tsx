"use client";

import { ICategory } from "@/@Types/category/ICategory";
import { useCategoriesList } from "@/hooks/category/list/useCategoriesList";
import { useGetProductById } from "@/hooks/product/id/useGetProductById";
import { Button, Form, Input, InputNumber, Row, Select, Switch } from "antd";

export default function EditProductById({ params }: { params: { id: string } }): JSX.Element {
    const { TextArea } = Input;
    const { product } = useGetProductById(params.id);
    const { categories } = useCategoriesList();

    return (
        <div className="w-full min-h-screen flex justify-center">
            <div className="w-4/6">
                <div className="mt-3">
                    <h1 className="text-2xl">Editar Produto: {product?.title} </h1>
                </div>

                <Form method="PUT" layout="vertical">
                    <Form.Item className="w-2/3" label="Nome do Produto: " name="title">
                        <Input />
                    </Form.Item>

                    <Form.Item className="w-2/3" label="Descrição: " name="description">
                        <TextArea style={{ height: 120, resize: 'none' }} />
                    </Form.Item>

                    <Row className="w-4/6" align="middle" justify="space-between" gutter={4}>
                        <Form.Item className="w-1/4" label="Categoria: " name="categoryId">
                            <Select placeholder="Selecione uma categoria">
                                {categories &&
                                categories.map((category: ICategory, index) => {
                                    return (
                                    <Select.Option key={index} value={category.id}>
                                        {category.name}
                                    </Select.Option>
                                    );
                                })}
                            </Select>
                        </Form.Item>

                        <Form.Item className="w-1/4" label="Preço: " name="price">
                            <InputNumber className="w-full" />
                        </Form.Item>

                        <Form.Item
                        className="w-1/4"
                        label="Quantidade de Estoque: "
                        name="quantityStock"
                        >
                            <InputNumber className="w-full" />
                        </Form.Item>
                    </Row>

                    <Form.Item label="Ativo ?" name="isActivated">
                        <Switch />
                    </Form.Item>

                    <Button variant="outlined" color="green" htmlType="submit">
                        Atualizar Produto
                    </Button>
                </Form>
            </div>
        </div>
    );
}