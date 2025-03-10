import { NoticiaP } from "../types/tipos";
import { ButtonR } from "./ButtonR";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { pop, popt } from "@/app/fonts/Fonts";
import textos from "@/lib/textos";
import { useLanguage } from "../context/LanguageContext";

export function TarjNot({ id, titulo, textoF, imgF }: NoticiaP) {
  const { language, toggleLanguage } = useLanguage();
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
        <h1 className="w-full text-lg lg:text-2xl border-b-2 border-b-verde">
          {titulo}
        </h1>
        <p className="truncate">{textoF}</p>
        <div className="w-full xl:w-1/2">
          <ButtonR
            texto={language == "en" ? "Read More" : "Leer más"}
            color="verde"
            dir={`/noticias/${id}`}
          />
        </div>
      </div>
    </div>
  );
}

export function TarjNotMini({ id, titulo, textoF, imgF }: NoticiaP) {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div
      key={id}
      style={pop.style}
      className={`h-3/4 text-white rounded-xl justify-self-center flex flex-col w-3/4  bg-verde  shadow-[rgba(7,_65,_210,_0.2)_0px_9px_30px]`}
    >
      <div
        style={{ backgroundImage: `url("${imgF}")` }}
        className={`bg-[url("/image2.png")] bg-center bg-cover w-full h-5/6 bg-white rounded-t-lg`}
      >
        <div className="w-full flex flex-col rounded-xl justify-around p-2 lg:p-12 h-full bg-gradient-to-b from-black/20 from-50% to-black/60">
          <h1 className="text-lg lg:text-3xl   line-clamp-5 lg:line-clamp-none">
            {titulo}
          </h1>
          <p className="text-xs lg:text-sm line-clamp-2">{textoF}</p>
        </div>
      </div>
      <div className=" w-full h-1/6 justify-around gap-2 flex flex-col">
        <ButtonR
          texto={language == "en" ? "Read More" : "Leer más"}
          dir={`/noticias/${id}`}
          color="verde"
        />
      </div>
    </div>
  );
}

export function Tarj() {
  const { language } = useLanguage();
  const noticias = textos[language].noticias;
  return (
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
  );
}
