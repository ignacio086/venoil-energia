'use client'
import { pop, popt } from "../fonts/Fonts";
import { Yacimiento } from "../types/tipos";
import { ButtonR } from "./ButtonR";
import * as motion from "motion/react-client"
export default function CardYac({
  id,
  nombre,
  descripcion,
  imagen,
  last,
  direc
}: Yacimiento) {
  return (
    <motion.div
      initial={{scale:1}}
      whileHover={{scale:1.1}}
      key={id}
      style={pop.style}
      className={`h-full rounded-xl flex  items-center ${id%2==0?'flex-row':"flex-row-reverse lg:flex-row"} justify-center text-xs lg:text-lg w-full gap-2 ${
        last ? " col-start-1 lg:col-start-2 lg:col-span-1" : "col-start-1 lg:col-auto"
      } bg-white shadow-[rgba(120,_120,_120,_120.8)_0px_3px_20px]`}
    >
      <div
        className={` bg-cover bg-right w-full h-full lg:w-full lg:h-full rounded-md`}
        style={{ backgroundImage: `url("${imagen}")` }}
      ></div>
      <div className=" p-2 w-full gap-2 flex flex-col items-center justify-center">
        <h1 className="text-azul" style={popt.style}>{nombre}</h1>
        <p className=" text-xs line-clamp-3">{descripcion}</p>
        <ButtonR texto="Leer mas" color="verde" dir={`/operadora#${direc}`} />
      </div>
    </motion.div>
  );
}
