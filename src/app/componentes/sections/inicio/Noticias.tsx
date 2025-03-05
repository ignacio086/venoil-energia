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
      className="flex flex-col items-center justify-center gap-2 p-2 lg:p-12 w-screen h-auto"
    >
      <h1 className="text-5xl text-center text-verde" style={popt.style}>
        NUESTRAS NOTICIAS
      </h1>
      <div className="w-full lg:w-3/5 flex items-center justify-center">
        <Carousel className="w-4/5 rounded-xl shadow-[rgba(7,_65,_210,_0.2)_0px_9px_30px]">
          <CarouselContent key={20} className="p-0 lg:p-24">
            {noticias.map((noticia) => {
              return (
                <CarouselItem key={noticia.id} className="">
                  <TarjNot
                    key={noticia.id}
                    id={noticia.id}
                    textoF={noticia.textoF}
                    imgF={noticia.imgF}
                    titulo={noticia.titulo}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className=" mt-24 lg:w-3/5 w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-2 items-center justify-center ">
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
