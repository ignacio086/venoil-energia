import { useLanguage } from "@/app/context/LanguageContext";
import { pop, popt } from "@/app/fonts/Fonts";
import { Yacimiento } from "@/app/types/tipos";
import textos from "@/lib/textos";
export default function Campos() {
  const { language } = useLanguage();
  const campos = textos[language].inicio.campos;
  const cards: Yacimiento[] = [
    {
      id: 1,
      nombre: "Manzano Oeste",
      descripcion: campos.manzano,
      imagen: "/imagendecampoeditada.png",
      direc: "manzano",
    },
    {
      id: 2,
      nombre: "Piedras Coloradas",
      descripcion: campos.piedrascoloradas,
      imagen: "/DJI_0010.jpg",
      direc: "piedras",
    },
    {
      id: 3,
      nombre: "Cacheuta",
      descripcion: campos.cacheuta,
      imagen: "/pozo84.jpg",
      direc: "cacheuta",
    },
    {
      id: 4,
      nombre: "Chimen Aike",
      descripcion: campos.chimenaike,
      imagen: "/chimenaike.jpg",
      direc: "chimenaike",
    },
    {
      id: 5,
      nombre: "Cóndor",
      descripcion: campos.condor,
      imagen: "/1737451360116.jpg",
      direc: "condor",
    },
    {
      id: 6,
      nombre: "Cañadon Salto",
      descripcion: campos.canadonsalto,
      imagen: "/truck2.jpg",
      direc: "salto",
    },
    {
      id: 7,
      nombre: "Estancia La Maggie",
      descripcion: campos.maggie,
      imagen: "/ELMTan.png",
      direc: "maggie",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-12 p-2 lg:p-12 justify-center">
      <h1 className=" text-lg lg:text-4xl text-verde" style={popt.style}>
        NUESTROS CAMPOS EN MENDOZA
      </h1>
      {cards.map((card, id) => {
        if (id >= 3) return <div></div>;
        return (
          <div className=" flex flex-col gap-12" id={card.direc} key={card.id}>
            <div
              className={`flex flex-col-reverse items-center justify-center ${
                id % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse "
              }`}
            >
              <div
                style={{ backgroundImage: `url("${card.imagen}")` }}
                className={`bg-cover aspect-square w-1/2 h-1/2 rounded-full bg-no-repeat bg-center flex items-center justify-center`}
              ></div>
              <div className="w-full p-2 lg:w-1/2 gap-12 flex flex-col items-center justify-center">
                <h1
                  className=" text-lg lg:text-5xl text-white"
                  style={popt.style}
                >
                  {card.nombre}
                </h1>
                <div className="h-2 w-3/4 bg-verde rounded-xl"></div>
                <p
                  className={`${
                    id % 2 == 0 ? "lg:text-jutify" : " "
                  } w-3/4 text-white text-lg text-justify`}
                  style={pop.style}
                >
                  {card.descripcion}
                </p>
              </div>
            </div>
            <div
              className={`bg-[url("/image1.png")] bg-cover aspect-square w-screen h-32 bg-no-repeat bg-center flex items-center justify-center`}
            >
              <img
                src="iso.png"
                alt=""
                className="object-contain rounded-full w-3/4 h-3/4 "
              />
            </div>
          </div>
        );
      })}
      <h1 className=" text-lg lg:text-4xl text-verde" style={popt.style}>
        NUESTROS CAMPOS EN SANTA CRUZ
      </h1>
      {cards.map((card, id) => {
        if (id <= 2) return <div></div>;
        return (
          <div className=" flex flex-col gap-12" id={card.direc} key={card.id}>
            <div
              className={`flex flex-col-reverse items-center justify-center ${
                id % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div
                style={{ backgroundImage: `url("${card.imagen}")` }}
                className={`bg-cover aspect-square w-1/2 h-1/2 rounded-full bg-no-repeat bg-center flex items-center justify-center`}
              ></div>
              <div className="w-full p-2 lg:w-1/2 gap-12 flex flex-col items-center justify-center">
                <h1
                  className=" text-lg lg:text-5xl text-white"
                  style={popt.style}
                >
                  {card.nombre}
                </h1>
                <div className="h-2 w-3/4 bg-verde rounded-xl"></div>
                <p
                  className={`${
                    id % 2 == 0 ? "lg:text-jutify" : " "
                  } w-3/4 text-white text-lg text-justify`}
                  style={pop.style}
                >
                  {card.descripcion}
                </p>
              </div>
            </div>
            <div
              className={`bg-[url("/image1.png")] bg-cover aspect-square w-screen h-32 bg-no-repeat bg-center flex items-center justify-center`}
            >
              <img
                src="iso.png"
                alt=""
                className="object-contain rounded-full w-3/4 h-3/4 "
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
