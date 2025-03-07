import { Valor } from "../types/tipos";

export default function Valyac(valor: Valor) {
  return (
    <div
      key={valor.id}
      className={`w-full h-full flex ${
        valor.id > 3 ? " flex-row-reverse" : "flex-row-reverse lg:flex-row"
      } ${valor.id == 5 ? "ml-0 lg:ml-12" : ""} ${
        valor.id == 2 ? "mr-0 lg:mr-12" : ""
      } items-center justify-center gap-2 p-2"`}
    >
      <h1 className="text-xs lg:text-sm">{valor.texto}</h1>
      <div className="w-2 rounded-xl h-2/3 bg-gradient-to-b from-verde to-azul"></div>
      <div
        className={`w-12 h-12 lg:w-16 lg:h-16 bg-verde rounded-full bg-cover bg-center `}
        style={{ backgroundImage: `url("${valor.imagen}")` }}
      ></div>
    </div>
  );
}
