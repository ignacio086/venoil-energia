import { pop, popt } from "@/app/fonts/Fonts";
import { GiOilPump } from "react-icons/gi";

export default function Presentacion() {
  return (
    <div
      className={`w-screen h-auto lg:h-screen bg-[url("/image12.png")] flex flex-col items-center justify-center p-2 lg:p-24 gap-8`}
    >
      <div className="flex h-1/3 gap-4 items-center justify-center">
        <GiOilPump className="text-black bg-white text-lg lg:text-8xl lg:p-4 rounded-full" />
        <h1 className="text-white text-lg lg:text-4xl text-center" style={popt.style}>
          OPERADORA DE CAMPOS PETROLEROS
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row h-2/3 justify-center items-center gap-6">
        <p className="w-3/4 lg:w-1/2 text-white" style={pop.style}>
          Somos una empresa líder en el gerenciamiento integral de yacimientos
          petroleros, dedicados a potenciar la eficiencia operativa y la
          rentabilidad de cada proyecto.<br/><br/><br/> Nos especializamos en la optimización
          de procesos y en la generación de valor sostenible, con un enfoque
          particular en la revitalización y maximización del rendimiento de
          campos maduros, aplicando tecnologías innovadoras y estrategias de
          gestión avanzadas.
        </p>
        <div className={`rounded-xl bg-[url("/ayb.jpg")] bg-cover aspect-square w-1/2 h-full bg-no-repeat bg-center`}></div>
      </div>
    </div>
  );
}
