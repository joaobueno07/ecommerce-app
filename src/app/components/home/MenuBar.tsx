"use client";

import { CircleUserRound, Menu, ShoppingBag } from "lucide-react";
import { Badge, Drawer } from 'antd';
import { useState } from "react";
import Image from "next/image";
import reactLogo from "../../../../public/img/logo/react-logo.svg";
import Link from "next/link";

export default function MenuBar(): JSX.Element {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    return (
        <div className="w-full h-16 border flex justify-center">
            <div className="w-full flex justify-between items-center lg:w-4/6">
                <div className="flex justify-center items-center w-2/12 h-16 sm:hidden">
                    <Menu onClick={() => setOpenDrawer(true)}  width={30} height={30}/>
                </div>

                <div className="w-2/4 flex justify-center items-center sm:w-1/12 sm:justify-start">
                    <Link href="/">
                        <Image src={reactLogo} width={40} height={40} alt=""/>
                    </Link>    
                </div>    

                <div className="hidden sm:flex justify-center w-4/6">
                    <ul className="w-full flex justify-evenly">
                        <Link href="/produtos">
                            <li>Produtos</li>
                        </Link>

                        <Link href="/categorias">
                            <li>Categorias</li>
                        </Link>

                        <Link href="/">
                            <li>Departamentos</li>
                        </Link>

                        <Link href="/">
                            <li>Promoções</li> 
                        </Link>
                    </ul>
                </div>

                <div className="w-2/12 h-16 flex justify-evenly items-center sm:w-1/12">
                    <CircleUserRound width={25} height={25} className="hidden sm:block"/>
                        
                    <Badge count={5} className="cursor-pointer">
                        <ShoppingBag onClick={()=> alert("voce clicou no carrinho")} width={25} height={25}/>
                    </Badge>           
                </div>
            </div>

            <Drawer open={openDrawer} className="sm:hidden" title="Menu" placement="left" onClose={() => setOpenDrawer(false)}/>
            <Drawer> </Drawer>
        </div>
    );
}