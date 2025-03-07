import { popt } from "@/app/fonts/Fonts";

export default function Pilares() {
  const pilares = [
    {
      id: 1,
      descripcion:
        "Estrategia integral: Analizamos cada yacimiento en profundidad para extender su vida útil y generar nuevas oportunidades a bajo costo.",
      imagen: "/Anotación 2024-12-17 2146201.png",
      color:"border-azul"
    },
    {
      id: 2,
      descripcion:
        "Compromiso con la confianza: Operamos con integridad y transparencia, construyendo relaciones sólidas con nuestros socios, clientes y comunidades.",
      imagen: "/Bar-Graph--Streamline-Atlas.png",
      color:"border-t-azul border-b-verde border-l-azul border-r-verde "
    },
    {
      id: 3,
      descripcion:
        "Excelencia operacional: Creemos que la excelencia es la clave para garantizar una rentabilidad sostenible y un impacto positivo en la industria.",
      imagen: "/Leaf--Streamline-Atlas.png",
      color:"border-verde"
    },{
        id: 4,
        descripcion:"VenOil Energía se encuentra inscripta como empresa operadora en el Registro de Empresas Petroleras de la Secretaría de Energía de la Nación Argentina, bajo el Número 490.",
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
            <p>{pilar.descripcion}</p>
          </div>
        );
      })}
    </div>
  );
}
