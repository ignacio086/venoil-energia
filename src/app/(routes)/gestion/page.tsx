import Calidad from "../../componentes/sections/gestion/Calidad";
import Enfoques from "../../componentes/sections/gestion/Enfoques";
import Politicas from "../../componentes/sections/gestion/Politicas";
import Presentacion from "../../componentes/sections/gestion/Presentacion";

export default function Operadora() {
  return (
    <div className="w-screen flex flex-col imtes-center justify-center">
        <Presentacion/>
        <Calidad/>
        <Enfoques/>
        <Politicas/>
    </div>
  );
}