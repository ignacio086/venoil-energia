import { Valor } from "@/app/types/tipos";
import Valyac from "../../ValYac";
import { popt } from "@/app/fonts/Fonts";
import textos from "@/lib/textos";
import { useLanguage } from "@/app/context/LanguageContext";
export default function Valores() {
  const { language } = useLanguage();
  const valores = textos[language].inicio.valores;
  const val = [
    [
      {
        texto: valores.primerValor,
        imagen: "/Group 2.png",
        id: 1,
        color:"verde",
      },
      {
        texto: valores.segundoValor,
        imagen: "/Accounts-Group-Star-Rating--Streamline-Atlas.png",
        id: 2,
        color:"azul",
      },
      {
        texto: valores.tercerValor,
        imagen: "/Group32.png",
        id: 3,
        color:"verde",
      },
    ],
    [
      {
        texto: valores.cuartoValor,
        imagen: "/Group5.png",
        id: 4,
        color:"azul",
      },
      {
        texto: valores.quintoValor,
        imagen: "/Group42.png",
        id: 5,
        color:"verde",
      },
      {
        texto: valores.sextoValor,
        imagen: "/Group5.png",
        id: 6,
        color:"azul",
      },
    ],
  ];
  return (
    <div
      className={`w-screen h-screen bg-fixed bg-[url("/1737451360116.jpeg")] bg-cover`}
    >
      <div className="bg-white/50 w-full flex flex-col items-center justify-center h-full">
        <h1 style={popt.style} className=" text-lg lg:text-4xl mt-12 text-azul">
          Nuestros Valores
        </h1>
        <div className="flex flex-col w-full h-full lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/3 flex flex-col h-1/2">
            {val[0].map((valor: Valor) => {
              return Valyac(valor);
            })}
          </div>
          <div className="hidden h-full lg:flex w-1/3 items-center justify-center">
            <div className="rounded-full bg-white w-full h-3/4 p-6">
              <div className="rounded-full bg-gray-700 w-full p-6 h-full">
                <div
                  className={`rounded-full bg-[url("/work.jpg")] bg-cover bg-center w-full h-full`}
                ></div>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-1/3  flex flex-col h-1/2">
            {val[1].map((valor: Valor) => {
              return Valyac(valor);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
