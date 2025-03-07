import { pop } from "../fonts/Fonts";
import { NoticiaP } from "../types/tipos";
import { ButtonR } from "./ButtonR";

export function TarjNot({ id, titulo, textoF,imgF }: NoticiaP) {
  return (
    <div
      key={id}
      style={pop.style}
      className={`h-full rounded-xl p-2 flex flex-col w-full gap-2 bg-white shadow-[rgba(7,_65,_210,_0.2)_0px_9px_30px]`}
    >
      <div className={`w-full h-1/2 `}>
        <img src={imgF} className="w-full rounded-lg h-full "></img>
      </div>
      <div className=" w-full h-1/2 justify-around gap-2 flex flex-col  p-2">
        <h1 className="w-full text-lg lg:text-2xl border-b-2 border-b-verde">{titulo}</h1>
        <p className="truncate">{textoF}</p>
        <div className="w-full xl:w-1/2">
          <ButtonR texto="Leer mas" color="verde" dir={`/noticias/${id}`} />
        </div>
      </div>
    </div>
  );
}

export function TarjNotMini({ id, titulo, textoF,imgF }: NoticiaP) {
  return (
    <div
      key={id}
      style={pop.style}
      className={`h-72 text-white rounded-xl lg:p-2 flex flex-col w-full gap-0 lg:gap-2 bg-verde lg:bg-white shadow-[rgba(7,_65,_210,_0.2)_0px_9px_30px]`}
    >
      <div
        style={{ backgroundImage: `url("${imgF}")` }}
        className={`bg-[url("/image2.png")] bg-center bg-cover w-full h-5/6 bg-white rounded-t-lg`}
      >
        <div className="w-full flex flex-col rounded-xl justify-around p-2 lg:p-12 h-full bg-gradient-to-b from-black/20 from-50% to-black/60">
          <h1 className="text-lg lg:text-xl line-clamp-5 lg:line-clamp-2">{titulo}</h1>
          <p className="text-xs lg:text-sm line-clamp-2">{textoF}</p>
        </div>
      </div>
      <div className=" w-full h-1/6 justify-around gap-2 flex flex-col">
        <ButtonR texto="Leer mas" dir={`/noticias/${id}`} color="verde" />
      </div>
    </div>
  );
}
