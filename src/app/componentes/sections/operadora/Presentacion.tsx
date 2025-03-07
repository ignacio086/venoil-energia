import { pop, popt } from "@/app/fonts/Fonts";
import { GiOilPump } from "react-icons/gi";

export default function Presentacion() {
  return (
    <div
      className={`w-screen h-auto lg:h-screen bg-[url("/image12.png")] flex flex-col justify-center p-2 lg:p-24 gap-8`}
    >
      <div className="flex h-1/3 gap-4 items-center ">
        <GiOilPump className="text-black bg-white text-lg lg:text-8xl lg:p-4 rounded-full" />
        <h1
          className="text-white text-lg lg:text-4xl text-center"
          style={popt.style}
        >
          OPERADORA DE CAMPOS PETROLEROS
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row h-2/3 justify-around items-center gap-6">
        <p className="w-3/4 lg:w-1/3 text-white" style={pop.style}>
          Somos una empresa líder en el gerenciamiento integral de yacimientos
          petroleros, dedicados a potenciar la eficiencia operativa y la
          rentabilidad de cada proyecto.
          <br />
          <br />
          <br /> Nos especializamos en la optimización de procesos y en la
          generación de valor sostenible, con un enfoque particular en la
          revitalización y maximización del rendimiento de campos maduros,
          aplicando tecnologías innovadoras y estrategias de gestión avanzadas.
        </p>
        <div
          className={`rounded-xl bg-[url("/ayb.jpg")] bg-cover aspect-square w-1/2 h-full flex items-end justify-center flex-col bg-no-repeat bg-center`}
        >
          <div className=" lg:w-32 lg:h-12 w-16 h-6 bg-verde mr-1 shadow-[rgba(0,_0,_0,_0.8)_0px_9px_20px] bottom-10 z-10 relative left-8 lg:left-10 flex items-center lg:bottom-20">
            <img className="lg:w-12 lg:h-12 w-6 h-6" src="isotipo.png"></img>
          </div>
          <div className="w-0 h-0 border-l-[2px] border-r-[7px] border-t-[15px] lg:border-l-[5px] relative left-8 bottom-10 lg:left-10 lg:border-r-[15px] lg:border-t-[30px] lg:bottom-20 border-l-transparent mr-2 border-r-transparent border-t-verde transform -skew-x-12"></div>
        </div>
      </div>
    </div>
  );
}
