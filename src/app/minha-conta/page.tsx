"use client";

import { IUser } from "@/@Types/user/IUser";
import { IUserLogin } from "@/@Types/user/IUserLogin";
import { useCreateUser } from "@/hooks/user/create/useCreateUser";
import { userLogin } from "@/utils/users/userLogin";
import { Button, Form, Input } from "antd";

export default function MyAccount(): JSX.Element {
    const { createTrigger } = useCreateUser();

    function getUserLogin(user: IUserLogin): void {
        userLogin(user);
    }

    function createUserSubmit(value: IUser): void {
        createTrigger(value);
    } 

    return (
        <div className="w-full flex justify-center min-h-screen">
            <div className="w-4/6 flex gap-7">
                <div className="w-1/2 flex justify-center item-center ">

                    <Form method="POST" layout="vertical"  onFinish={getUserLogin}
                        className="w-full h-72 p-4 mt-3 border rounded-md">
                        <h1 className="text-2xl">Acessar a minha conta</h1>

                        <div className="w-full flex justify-center flex-col">
                            <Form.Item name="email" label="E-mail: " className="w-3/4">
                                <Input required/>
                            </Form.Item>

                            <Form.Item name="password" label="Senha" className="w-3/4">
                                <Input type="password" required/>
                            </Form.Item>
                        </div>

                        <Button htmlType="submit"> Acessar conta </Button>
                    </Form>
                </div>

                <div className="w-1/2">
                    <Form method="POST" onFinish={(value: IUser) => createUserSubmit(value)} 
                        layout="vertical"  className="w-full h-96 p-4 mt-3 border rounded-md">
                        <h1 className="text-2xl"> Criar uma conta</h1>

                        <div className="w-full flex justify-center flex-col">

                            <Form.Item name="username" label="Nome completo:" className="w-3/4">
                                <Input required minLength={15}/>
                            </Form.Item>
                            <Form.Item  name="email" label="E-mail: " className="w-3/4">
                                <Input  required/>
                            </Form.Item>

                            <Form.Item name="password" label="Senha: " className="w-3/4">
                                <Input  type="password" required/>
                            </Form.Item>
                        </div>

                        <Button htmlType="submit" variant="outlined" color="green" > Cadastrar sua conta </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}