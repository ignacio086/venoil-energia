import { Valor } from "@/app/types/tipos";
import Valyac from "../../ValYac";

export default function Valores() {
  const val = [
    [
      {
        texto: "Liderazgo en todas las fases del proyecto",
        imagen: "/Accounts-Group-Star-Rating--Streamline-Atlas.png",
        id: 1,
      },
      {
        texto: "Transparencia en el desempeño",
        imagen: "/Group 2.png",
        id: 2,
      },
      {
        texto: "Pasion en cada tarea y nuevo desafío",
        imagen: "/Group32.png",
        id: 3,
      },
    ],
    [
      {
        texto: "Respeto por las comunidades y el medio ambiente",
        imagen: "/Group42.png",
        id: 4,
      },
      {
        texto: "Excelencia en todos los niveles de la organización",
        imagen: "/Group5.png",
        id: 5,
      },
      {
        texto: "Integridad como base de todas nuestras decisiones",
        imagen: "/Group5.png",
        id: 6,
      },
    ],
  ];
  return (
    <div
      className={`w-screen h-screen bg-fixed bg-[url("/1737451360116.jpeg")] bg-cover`}
    >
      <div className="bg-white/50 w-full flex flex-col lg:flex-row items-center justify-center h-full">
        <div className="w-full lg:w-1/3 flex flex-col h-1/2">
          {val[0].map((valor: Valor) => {
            return Valyac(valor);
          })}
        </div>
        <div className="hidden h-full lg:flex :w-1/3 items-center justify-center">
          <div className="rounded-full bg-white w-96 h-96 p-6">
            <div className="rounded-full bg-gray-700 w-full p-6 h-full">
              <div
                className={`rounded-full bg-[url("/trab.png")] bg-cover bg-center w-full h-full`}
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
  );
}
