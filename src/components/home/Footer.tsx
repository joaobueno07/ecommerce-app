import Image from "next/image";
import reactLogo from "../../../public/img/logo/react-logo.svg";

export default function Footer(): JSX.Element {
    return (
        <div className="w-full flex justify-center border mt-16">
            <div className="w-4/6 flex flex-col">
                <div className=" w-full flex justify-center items-center">
                    <Image src={reactLogo} width={80} height={80} alt="Imagem da Logo no Footer"/>
                </div>

                <div className="w-full mt-4">
                    <div className="flex justify-center items-center flex-col">
                        <div className="m-4">
                            <h1 className="font-bold">Redes Sociais</h1>
                        </div>

                        <div className="m-4">
                            <h1 className="font-bold">Formas de Pagamento</h1>
                        </div>

                        <div className="m-4">
                            <h1 className="font-bold text-center">Atendimento</h1>

                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissi
                            </div>
                        </div>

                        <div className="m-4">
                            <h1 className="font-bold">Institucional</h1>

                            <ul>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}