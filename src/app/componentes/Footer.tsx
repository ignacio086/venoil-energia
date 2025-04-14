import Image from "next/image";
import Link from "next/link";
import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaAngleRight  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-azul text-white w-full py-12 px-4 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center md:items-start">
          <Image
            src="/LOGO HORIZONTAL-03 1.png"
            width={250}
            height={50}
            alt="VenOil Logo"
            className="mb-4"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Mapa del Sitio</h2>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/" className="flex items-center gap-2 hover:text-verde transition-colors">
              <FaAngleRight  /> <span>Inicio</span>
            </Link>
            <Link href="/operadora" className="flex items-center gap-2 hover:text-verde transition-colors">
              <FaAngleRight  /> <span>Operadora</span>
            </Link>
            <Link href="/gestion" className="flex items-center gap-2 hover:text-verde transition-colors">
              <FaAngleRight  /> <span>Gestión Integrada</span>
            </Link>
            <Link href="/workWithUs" className="flex items-center gap-2 hover:text-verde transition-colors">
              <FaAngleRight  /> <span>Trabaja con nosotros</span>
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Nuestro Contacto</h2>
          <div className="flex flex-col gap-2 text-sm">
            <p className="flex items-center gap-2">
              <FaPhoneAlt size={18}/> <span>+54 9 261 264-5614</span>
            </p>
            <p className="flex items-start gap-2">
              <FaLocationDot size={18} className="mt-4" />
              <span>
                Ruta 82, Complejo Chacras Park<br />
                Edificio Drago, Piso 5to, Oficina 507<br />
                Luján de Cuyo, Mendoza, Argentina
              </span>
            </p>
            <p className="flex items-center gap-2">
              <MdEmail size={18}/> <span>info@venoil-energia.com</span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Redes Sociales</h2>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://www.instagram.com/venoilenergia_na/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-verde transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <SlSocialInstagram />
            </a>
            <a href="https://www.facebook.com/Venoil_Energia" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-verde transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <SlSocialFacebook />
            </a>
            <a href="https://www.linkedin.com/company/venoil-energia/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-verde transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <SlSocialLinkedin />
            </a>
            <a href="https://twitter.com/Venoil_Energia" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-verde transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <SlSocialTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
