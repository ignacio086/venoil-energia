import { pop } from "../fonts/Fonts";
import { Yacimiento } from "../types/tipos";
import { ButtonR } from "./ButtonR";

export default function CardYac({
  id,
  nombre,
  descripcion,
  imagen,
  last,
}: Yacimiento) {
  return (
    <div
      key={id}
      style={pop.style}
      className={`h-auto rounded-xl p-2 flex flex-col items-center justify-center lg:flex-row text-xs lg:text-lg w-auto gap-2 ${
        last ? " col-start-1 lg:col-start-2 col-span-2 lg:col-span-1" : ""
      } bg-white shadow-[rgba(7,_65,_210,_0.2)_0px_9px_30px]`}
    >
      <div
        className={` bg-cover bg-center w-24 h-12 lg:w-full lg:h-full rounded-md`}
        style={{ backgroundImage: `url("${imagen}")` }}
      ></div>
      <div className=" w-full gap-2 flex flex-col items-center justify-center">
        <h1>{nombre}</h1>
        <p className=" text-xs line-clamp-3">{descripcion}</p>
        <ButtonR texto="Leer mas" color="verde" dir="" />
      </div>
    </div>
  );
}
