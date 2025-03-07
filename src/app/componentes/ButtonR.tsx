import Link from "next/link";
import { pop } from "../fonts/Fonts";

export function ButtonR({
  dir,
  texto,
  color,
}: {
  dir: string;
  texto: string;
  color: string;
}) {
  const estilos =
    color == "verde"
      ? "bg-verde hover:bg-green-800"
      : color == "azul"
      ? "bg-azul hover:bg-blue-800"
      : "bg-white/20 hover:bg-white border-2 border-white hover:text-azul ";

  return (
    <Link
      className={`${estilos} transition-all text-center text-xs lg:text-sm p-2 px-12 py-2 text-white rounded-xl`}
      href={`${dir}`}
      style={pop.style}
    >
      {texto}
    </Link>
  );
}
