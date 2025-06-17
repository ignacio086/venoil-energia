export type estilosButton = {
  verde: string;
  azul: string;
  blanco: string;
};
export interface Positionpop {
  x: number;
  y: number;
}
export interface Yacimiento {
  id: number;
  nombre: string;
  descripcion: string;
  imagen?: string;
  last?: boolean;
  direc?:string;
}

export type Language = 'es' | 'en';

export interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
}

export type Theme = 'wh' | 'bl';

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
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
  color:string;
}

export interface Positionpop {
  x: number;
  y: number;
}

export interface EmailParams{

  asunto:string,
  remitente:{email:string,name:string}[],
  cv:File
}