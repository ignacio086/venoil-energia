import { Valor } from "../types/tipos";

export default function Valyac(valor: Valor) {
  return (
    <div
      key={valor.id}
      className=" w-full h-full flex flex-row items-center justify-center gap-2 p-2"
    >
      <h1>{valor.texto}</h1>
      <div className="w-2 rounded-xl h-2/3 bg-gradient-to-b from-verde to-azul"></div>
      <div
        className={`w-12 h-12 bg-verde rounded-full bg-cover bg-center `}
        style={{ backgroundImage: `url("${valor.imagen}")` }}
      ></div>
    </div>
  );
}
