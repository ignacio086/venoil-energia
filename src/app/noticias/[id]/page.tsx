"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import { popt } from "@/app/fonts/Fonts";
import { NoticiaP } from "@/app/types/tipos";
import textos from "@/lib/textos";
import Image from "next/image";
export default function Operadora({ params }: { params: { id: string } }) {
  const { language, toggleLanguage } = useLanguage();
  let noticia: NoticiaP[] = textos[language].noticias.filter((e) => {
    return e.id == params.id;
  });
  return (
    <article className="w-screen flex flex-col gap-12 p-12 lg:p-24 items-center justify-center">
      <header>
        <h1 style={popt.style} className="text-5xl text-center">
          {noticia[0].titulo}
        </h1>
      </header>
      <figure className=" flex justify-center items-center">
        <Image
          className="rounded-xl"
          src={`${noticia[0].imgF}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "50%", height: "auto" }}
          alt="a"
        />
      </figure>
      <section>
        <p className="whitespace-pre-line">{noticia[0].textoF}</p>
      </section>
      <figure className=" flex justify-center items-center">
        <Image
          className="rounded-xl"
          src={`${noticia[0].imgS}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "50%", height: "auto" }}
          alt="a"
        />
      </figure>
      <section>
        <p className="whitespace-pre-line">{noticia[0].textoS}</p>
      </section>
      <footer>
        <p>
          Fuente :<a className="text-verde hover:text-green-800 cursor-pointer" href={`${noticia[0].fuente}`}>{noticia[0].fuente}</a>
        </p>
      </footer>
    </article>
  );
}
