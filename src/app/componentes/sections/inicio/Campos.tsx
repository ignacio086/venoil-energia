import { popt } from "@/app/fonts/Fonts";
import CardYac from "../../CardYac";
import { Yacimiento } from "@/app/types/tipos";
import textos from "@/lib/textos";
import { useLanguage } from "@/app/context/LanguageContext";
import Typewriter from "../../TypeWriter";
export default function Campos() {
  const { language } = useLanguage();
  const campos = textos[language].inicio.campos;
  const cards: Yacimiento[] = [
    {
      id: 1,
      nombre: "Manzano Oeste",
      descripcion: campos.manzano,
      imagen: "/imagendecampoeditada.png",
      direc:"manzano"
    },
    {
      id: 2,
      nombre: "Piedras Coloradas",
      descripcion: campos.piedrascoloradas,
      imagen: "/DJI_0010.jpg",
      direc:"piedras"
    },
    {
      id: 3,
      nombre: "Cacheuta",
      descripcion: campos.cacheuta,
      imagen: "/pozo84.jpg",
      direc:"cacheuta"
    },
    {
      id: 4,
      nombre: "Chimen aike",
      descripcion: campos.chimenaike,
      imagen: "/chimenaike.jpg",
      direc:"chimenaike"
    },
    {
      id: 5,
      nombre: "Cóndor",
      descripcion: campos.condor,
      imagen: "/1737451360116.jpg",
      direc:"condor"
    },
    {
      id: 6,
      nombre: "Cañadon Salto",
      descripcion: campos.canadonsalto,
      imagen: "/truck2.jpg",
      direc:"salto"
    },
    {
      id: 7,
      nombre: "Estancia La Maggie",
      descripcion: campos.maggie,
      imagen: "/ELMTan.png",
      direc:"maggie"
    },
  ];
  return (
    <section className="w-screen h-auto flex flex-col bg-azul items-center justify-center p-2 lg:p-24 gap-2 lg:gap-5 ">
      <Typewriter text="Campos Operados" className=" text-xl lg:text-4xl text-verde mb-12" speed={150}/>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-auto gap-12 lg:gap-5">
        {cards.map((y, index) => {
          const isLastRowSingle =
            cards.length % 3 === 1 && index === cards.length - 1;
          return (
            <CardYac
              key={y.id}
              id={y.id}
              nombre={y.nombre}
              descripcion={y.descripcion}
              imagen={y.imagen}
              last={isLastRowSingle}
              direc={y.direc}
            />
          );
        })}
      </div>
    </section>
  );
}
