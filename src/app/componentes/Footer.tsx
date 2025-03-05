import Image from "next/image";
import {
  SlArrowRight,
  SlCallOut,
  SlEnvolope,
  SlDirection,
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialLinkedin,
} from "react-icons/sl";
export default function Footer() {
  return (
    <footer className="bg-azul p-24 bottom-0 flex flex-col items-center md:items-start md:flex-row justify-around md:p-24 text-white gap-6 w-screen h-auto">
      <div>
        <Image
          src="/LOGO HORIZONTAL-03 1.png"
          width={250}
          height={50}
          alt="ab"
        />
      </div>
      <div className="flex gap-2 flex-col ">
        <h1 className="text-md font-bold text-center md:text-xl">
          Mapa del Sitio
        </h1>
        <div className="mr-24 flex flex-col gap-2 md:mr-0">
          <a href="/" className=" flex text-xs md:text-base gap-5">
            <SlArrowRight /> Inicio
          </a>
          <p className=" flex text-xs md:text-base gap-5">
            <SlArrowRight /> Operadora
          </p>
          <p className=" flex text-xs md:text-base gap-5">
            <SlArrowRight /> Gestion Integrada
          </p>
          <p className=" flex text-xs md:text-base gap-5">
            <SlArrowRight /> Trabaja con nosotros
          </p>
        </div>
      </div>
      <div className="flex gap-2 flex-col text-center">
        <h1 className="text-md font-bold text-center md:text-xl">
          Nuestro Contacto
        </h1>
        <div className=" md:mr-0 flex flex-col gap-2">
          <p className="flex text-xs md:text-base gap-5">
            <SlCallOut /> +54 263 4782743
          </p>
          <p className="flex text-xs md:text-base gap-5">
            <SlDirection /> Ruta 82, Complejo Chacras Park <br /> Edifcio Drago,
            piso 5to <br /> oficina 507, Lujan de Cuyo, Mendoza{" "}
          </p>
          <p className="flex text-xs md:text-base gap-5">
            <SlEnvolope /> info@venoil-energia.com{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-md font-bold text-center md:text-xl">
          Redes Sociales
        </h1>
        <div className="mr-24 flex flex-col gap-2  md:mr-0">
          <p className="flex gap-5 text-xs md:text-base">
            <SlSocialInstagram /> @Venoil_Energia
          </p>
          <p className="flex gap-5 text-xs md:text-base">
            <SlSocialFacebook /> @Venoil_Energia{" "}
          </p>
          <p className="flex gap-5 text-xs md:text-base">
            <SlSocialLinkedin /> @Venoil_Energia{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
