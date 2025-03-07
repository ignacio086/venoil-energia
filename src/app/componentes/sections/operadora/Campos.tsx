import { pop, popt } from "@/app/fonts/Fonts";
import { Yacimiento } from "@/app/types/tipos";
import textos from "@/lib/textos";
export default function Campos() {
  const campos = textos.inicio.campos;
  const cards: Yacimiento[] = [
    {
      id: 1,
      nombre: "El Manzano Oeste",
      descripcion: campos.manzano,
      imagen: "/IMG-20250228-WA0033.jpg",
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
      imagen: "/Imagen de WhatsApp 2025-02-12 a las 15.27.58_c98b8082.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-12 p-2 lg:p-12 justify-center">
      <h1 className=" text-lg lg:text-6xl text-verde" style={popt.style}>
        Nuestros Campos En Mendoza
      </h1>
      {cards.map((card, id) => {
        if (id >= 3) return <div></div>;
        return (
          <div className=" flex flex-col gap-12" key={card.id}>
            <div className={`flex flex-col-reverse items-center justify-center ${id%2==0?"lg:flex-row":"lg:flex-row-reverse "}`}>
              <div style={{ backgroundImage: `url("${card.imagen}")` }} className={`bg-cover aspect-square w-1/2 h-1/2 rounded-full bg-no-repeat bg-center flex items-center justify-center`}></div>
              <div className="w-full p-2 lg:w-1/2 gap-12 flex flex-col items-center justify-center">
                <h1
                  className=" text-lg lg:text-4xl text-azul"
                  style={popt.style}
                >
                  {card.nombre}
                </h1>
                <div className="h-2 w-3/4 bg-verde rounded-xl"></div>
                <p className={`${id%2==0?"lg:text-end":" "} w-3/4 text-azul`}  style={pop.style}>
                  {card.descripcion}
                </p>
              </div>
            </div>
            <div className={`bg-[url("/image1.png")] bg-cover aspect-square w-screen h-32 bg-no-repeat bg-center flex items-center justify-center`}>
                <img src="isotipo-02.png" alt="" className="object-contain rounded-full w-3/4 h-3/4 " />
            </div>
          </div>
        );
      })}
      <h1 className=" text-lg lg:text-6xl text-verde" style={popt.style}>
        Nuestros Campos En Santa Cruz
      </h1>
      {cards.map((card, id) => {
        if (id <= 2) return <div></div>;
        return (
          <div className=" flex flex-col gap-12" key={card.id}>
            <div className={`flex flex-col-reverse items-center justify-center ${id%2==0?"lg:flex-row":"lg:flex-row-reverse"}`}>
              <div style={{ backgroundImage: `url("${card.imagen}")` }} className={`bg-cover aspect-square w-1/2 h-1/2 rounded-full bg-no-repeat bg-center flex items-center justify-center`}></div>
              <div className="w-full p-2 lg:w-1/2 gap-12 flex flex-col items-center justify-center">
                <h1
                  className=" text-lg lg:text-4xl text-azul"
                  style={popt.style}
                >
                  {card.nombre}
                </h1>
                <div className="h-2 w-3/4 bg-verde rounded-xl"></div>
                <p className={`${id%2==0?"lg:text-end":" "} w-3/4 text-azul`} style={pop.style}>
                  {card.descripcion}
                </p>
              </div>
            </div>
            <div className={`bg-[url("/image1.png")] bg-cover aspect-square w-screen h-32 bg-no-repeat bg-center flex items-center justify-center`}>
                <img src="isotipo-02.png" alt="" className="object-contain rounded-full w-3/4 h-3/4 " />
            </div>
          </div>
        );
      })}
    </div>
  );
}
