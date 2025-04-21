import { popt } from "../fonts/Fonts";
import { Valor } from "../types/tipos";
import * as motion from "motion/react-client";
export default function Valyac(valor: Valor) {
  return (
    <div
      key={valor.id}
      className={`w-full h-full flex ${
        valor.id > 3 ? " flex-row-reverse" : "flex-row-reverse lg:flex-row"
      } ${valor.id == 5 ? "ml-0 lg:pl-24" : ""} ${
        valor.id == 2 ? "mr-0 lg:pr-24" : ""
      } items-center justify-center gap-2 p-2"`}
    >
      <h1 style={popt.style} className="text-xs w-1/2 text-azul lg:text-lg">{valor.texto}</h1>
      <div className="w-2 rounded-xl h-2/3 bg-gradient-to-b from-verde to-azul"></div>
      <motion.div
        className={`w-12 h-12 lg:w-20 lg:h-20 bg-${valor.color} rounded-full bg-cover bg-center `}
        style={{ backgroundImage: `url("${valor.imagen}")` }}
        initial={{opacity:0}}
        whileInView={{rotateY:180,opacity:1}}
        viewport={{once:true}}
        transition={{delay:valor.id/2,duration:1}}
      ></motion.div>
    </div>
  );
}
