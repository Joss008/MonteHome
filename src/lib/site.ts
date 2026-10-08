export const site = {
  name: "Monte Home",
  tagline: "Muebles y decoración para transformar tus espacios",
  instagram: "montehome.pe",
  instagramUrl: "https://instagram.com/montehome.pe",
  // Deja "" para ocultar los botones de WhatsApp, o pon el número con código de país
  // sin "+" ni espacios (ej: "51987654321" para Perú, "573001234567" para Colombia).
  whatsapp: "",
  attention: "Abel Montero",
  document: "DNI 74150869",
};

export const quote = {
  reference: "MH-29-09-01",
  date: "28/09/2026",
  validity: "7 días",
  currency: "Soles (S/)",
  net: "271.02",
  igv: "48.78",
  total: "319.80",
  delivery: "5 a 7 días hábiles luego de confirmado el adelanto",
  payment: "20% adelanto / saldo 80% contra entrega",
  shipping: "Delivery previa coordinación; costo según ubicación",
  customization: "Medidas y acabados sujetos a coordinación con el cliente",
  pdf: "/cotizacion-mh-29-09-01.pdf",
};

export interface Product {
  code: string;
  name: string;
  shortDescription: string;
  price: number;
  image: string;
  specs: string[];
}

export const products: Product[] = [
  {
    code: "MH-001",
    name: "Porta plantas de madera de 3 niveles",
    shortDescription:
      "Estantería escalonada de tres niveles para tus macetas. Encaja perfecto en ventanas, rincones y balcones.",
    price: 189.9,
    image: "/producto1.jpeg",
    specs: ["3 niveles", "Madera natural", "Formato escalonado", "Fácil armado"],
  },
  {
    code: "MH-002",
    name: "Estante decorativo de pared 40 x 50 cm",
    shortDescription:
      "Estante de madera con dos compartimentos para decorar tus paredes con plantas, libros y objetos.",
    price: 129.9,
    image: "/producto2.jpeg",
    specs: ["40 x 50 cm", "Profundidad 7 cm", "Madera natural", "Montaje en pared"],
  },
];

export function whatsappUrl(message?: string): string | null {
  if (!site.whatsapp) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${site.whatsapp}${text}`;
}
