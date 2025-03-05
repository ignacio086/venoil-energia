import { popt } from "@/app/fonts/Fonts";
import MapaF from "../../MapaF";

export default function Mapa() {
  return (
    <div className="h-auto flex flex-col-reverse lg:flex-row items-center justify-center w-auto p-2">
      <MapaF />
      <div className="w-full flex flex-col items-center text-center lg:items-start lg:text-left justify-center h-full">
        <div
          style={popt.style}
          className="bg-gradient-to-br bg-clip-text from-verde to-azul"
        >
          <h1 className="text-2xl lg:text-8xl text-transparent">
            NUESTRA PRESENCIA EN EL PAIS
          </h1>
        </div>
        <p className="text-sm lg:text-xl"> Haz click en las provincias y conoce nuestros puntos</p>
      </div>
    </div>
  );
}
