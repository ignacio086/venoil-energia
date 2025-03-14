import { useLanguage } from "@/app/context/LanguageContext";
import { popt } from "@/app/fonts/Fonts";
import textos from "@/lib/textos";

export default function Pilares() {
  const { language } = useLanguage();
  const campos = textos[language].operadora.pilares;
  const pilares = [
    {
      id: 1,
      descripcion:campos.descripcionP,
      imagen: "/Anotación 2024-12-17 2146201.png",
      color:"border-azul"
    },
    {
      id: 2,
      descripcion:campos.descripcionS,
      imagen: "/Bar-Graph--Streamline-Atlas.png",
      color:"border-t-azul border-b-verde border-l-azul border-r-verde "
    },
    {
      id: 3,
      descripcion:campos.descripcionT,
      imagen: "/Leaf--Streamline-Atlas.png",
      color:"border-verde"
    },{
        id: 4,
        descripcion:campos.descripcionC,
        color:"border-t-verde border-b-azul border-l-verde border-r-azul"
      },
  ];
  return (
    <div className="w-screen flex flex-col gap-8 items-center justify-center p-2 lg:p-24">
      <h1 className=" text-lg lg:text-4xl text-verde" style={popt.style}>
        Nuestros Pilares
      </h1>
      {pilares.map((pilar, id) => {
        return (
          <div
            key={id}
            className={`${pilar.color} w-full lg:w-2/3 flex flex-col lg:flex-row h-48 p-2 lg:p-12 gap-2 items-center justify-center rounded-xl border-2 lg:border-8`}
          >
            <div
              className={` bg-cover bg-center w-8 h-8 lg:w-32 lg:h-20 rounded-xl`}
              style={{ backgroundImage: `url("${pilar.imagen}")` }}
            ></div>
            <p className="text-lg">{pilar.descripcion}</p>
          </div>
        );
      })}
    </div>
  );
}
