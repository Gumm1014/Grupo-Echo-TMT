import sofaImg from "../assets/sofaImg.png";

export const categories = [
  "Cocina y lavadero",
  "Comedor",
  "Dormitorio",
  "Living",
  "Oficina",
  "Otros muebles",
  "Infantiles y bebes",
];

export const products = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  category: "Dormitorio",
  title: "Cama dos plazas",
  description: "Estructura robusta en madera maciza. Cabecera tallada. Disponible.",
  material: "Roble / Pino.",
  image: sofaImg,
}));
