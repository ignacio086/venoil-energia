import Acordion from "../../Acordion";

export default function Calidad() {
  return (
    <div className="w-screen h-screen z-10 bg-white">
      <div className="w-full p-12 flex gap-2 h-1/3 items-center justify-center">
        <h1 className="text-azul text-xl lg:text-4xl">
          Nuestros principios de calidad
        </h1>
        <div className="w-3/4 h-4 rounded-xl bg-gradient-to-r from-verde to-azul"></div>
      </div>
      <div className="w-full h-2/3 p-24">
        <Acordion />
      </div>
    </div>
  );
}
