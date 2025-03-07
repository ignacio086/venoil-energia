import { popt } from "@/app/fonts/Fonts";
import CardYac from "../../CardYac";
import { Yacimiento } from "@/app/types/tipos";
import textos from "@/lib/textos";
export default function Campos() {
  const campos = textos.inicio.campos;
  const cards: Yacimiento[] = [
    {
      id: 1,
      nombre: "El Manzano",
      descripcion: campos.manzano,
      imagen: "/Emesa-Vega-Grande-4.jpg",
    },
    {
      id: 2,
      nombre: "Piedras Coloradas",
      descripcion: campos.piedrascoloradas,
      imagen: "/IMG_4393 B&N.jpg",
    },
    {
      id: 3,
      nombre: "Cacheuta",
      descripcion: campos.cacheuta,
      imagen: "/ayb.jpg",
    },
    {
      id: 4,
      nombre: "Chimen aike",
      descripcion: campos.chimenaike,
      imagen: "/chimenaike.png",
    },
    {
      id: 5,
      nombre: "Condor",
      descripcion: campos.condor,
      imagen: "/1737451360116.jpeg",
    },
    {
      id: 6,
      nombre: "Cañadon Salto",
      descripcion: campos.canadonsalto,
      imagen: "/truck2.png",
    },
    {
      id: 7,
      nombre: "Estancia La Maggie",
      descripcion: campos.maggie,
      imagen: "/condor.jpeg",
    },
  ];
  return (
    <section className="w-screen h-auto flex flex-col items-center justify-center p-2 lg:p-24 gap-2 lg:gap-5 bg-white">
      <h1 className=" text-xl lg:text-4xl text-verde" style={popt.style}>Campos Operados</h1>
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
            />
          );
        })}
      </div>
    </section>
  );
}
