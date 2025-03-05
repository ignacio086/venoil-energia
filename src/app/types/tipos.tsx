export type estilosButton = {
  verde: string;
  azul: string;
  blanco: string;
};

export interface Yacimiento {
  id: number;
  nombre: string;
  descripcion: string;
  imagen?: string;
  last?: boolean;
}
export interface NoticiaP {
  id: string;
  titulo: string;
  textoF: string;
  textoS?: string;
  imgF:string;
  imgS?:string;
  fuente?:string;
}
export interface Valor {
  texto: string;
  imagen: string;
  id: number;
}

export interface Positionpop {
  x: number;
  y: number;
}
