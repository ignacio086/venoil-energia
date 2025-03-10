"use client";
import { TarjNot, TarjNotMini } from "../../NotYac";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { pop, popt } from "@/app/fonts/Fonts";
import textos from "@/lib/textos";

export default function Noticias() {
  const noticias =textos.noticias
  return (
    <div
      style={pop.style}
      className="flex flex-col items-center justify-center gap-2 p-2 lg:p-12 w-screen h-screen"
    >
      <h1 className="text-xl lg:text-4xl text-center text-verde" style={popt.style}>
        NUESTRAS NOTICIAS
      </h1>
      <div className=" w-full h-full grid grid-cols-2 lg:grid-cols-2 gap-2 items-center justify-center ">
        {noticias.map((noticia) => {
          return (
            <TarjNotMini
              key={noticia.id}
              id={noticia.id}
              textoF={noticia.textoF}
              imgF={noticia.imgF}
              titulo={noticia.titulo}
            />
          );
        })}
      </div>
    </div>
  );
}
