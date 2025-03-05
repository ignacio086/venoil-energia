import Presentacion from "./componentes/sections/inicio/Presentacion";

import Enlace from "./componentes/sections/inicio/Enlace";
import Campos from "./componentes/sections/inicio/Campos";
import Presidente from "./componentes/sections/inicio/Presidente";
import Noticias from "./componentes/sections/inicio/Noticias";
import Valores from "./componentes/sections/inicio/Valores";
import Mapa from "./componentes/sections/inicio/Mapa";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Presentacion />
      <Mapa />
      <Campos />
      <Enlace />
      <Presidente />
      <Noticias />
      <Valores />
    </div>
  );
}
