import hero from "@/assets/hero.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomApartment from "@/assets/room-apartment.jpg";
import courtyard from "@/assets/courtyard.jpg";
import area from "@/assets/area.jpg";
import breakfast from "@/assets/breakfast.jpg";
import lounge from "@/assets/lounge.jpg";

export const IMG = {
  hero,
  roomDouble,
  roomFamily,
  roomApartment,
  courtyard,
  area,
  breakfast,
  lounge,
};

export type GalleryCategory =
  | "Exterior"
  | "Interior"
  | "Camere"
  | "Curte"
  | "Împrejurimi"
  | "Facilități";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Exterior",
  "Interior",
  "Camere",
  "Curte",
  "Împrejurimi",
  "Facilități",
];

export type Photo = { src: string; alt: string; category: GalleryCategory };

/** 30 de fotografii, grupate pe categorii pentru filtrare rapidă. */
export const PHOTOS: Photo[] = [
  { src: hero, alt: "Fațada Pensiunii Dona la apus", category: "Exterior" },
  { src: hero, alt: "Pensiunea Dona văzută din grădină", category: "Exterior" },
  { src: hero, alt: "Balcoanele de lemn cu flori", category: "Exterior" },
  { src: hero, alt: "Intrarea principală luminată seara", category: "Exterior" },
  { src: hero, alt: "Pensiunea și munții Bucegi în fundal", category: "Exterior" },
  { src: courtyard, alt: "Aleea pietruită spre pensiune", category: "Exterior" },

  { src: lounge, alt: "Living cu cămin din piatră", category: "Interior" },
  { src: lounge, alt: "Fotolii confortabile lângă foc", category: "Interior" },
  { src: lounge, alt: "Detaliu bârne de lemn în living", category: "Interior" },
  { src: breakfast, alt: "Micul dejun servit pe terasă", category: "Interior" },
  { src: breakfast, alt: "Produse locale la micul dejun", category: "Interior" },
  { src: roomApartment, alt: "Zona de zi a apartamentului", category: "Interior" },

  { src: roomDouble, alt: "Cameră dublă matrimonială", category: "Camere" },
  { src: roomDouble, alt: "Pat matrimonial cu lenjerie fină", category: "Camere" },
  { src: roomFamily, alt: "Cameră de familie la mansardă", category: "Camere" },
  { src: roomFamily, alt: "Mansardă cu lemn masiv și lumină caldă", category: "Camere" },
  { src: roomApartment, alt: "Apartament cu chicinetă", category: "Camere" },
  { src: roomApartment, alt: "Balcon cu vedere la pădure", category: "Camere" },

  { src: courtyard, alt: "Foișor de lemn cu grătar", category: "Curte" },
  { src: courtyard, alt: "Curtea pensiunii seara, cu ghirlande", category: "Curte" },
  { src: courtyard, alt: "Zona de relaxare din curte", category: "Curte" },
  { src: courtyard, alt: "Parcarea privată din curte", category: "Curte" },
  { src: hero, alt: "Grădina îngrijită a pensiunii", category: "Curte" },

  { src: area, alt: "Castelul Peleș în peisaj de toamnă", category: "Împrejurimi" },
  { src: area, alt: "Pădurile din jurul Sinaiei", category: "Împrejurimi" },
  { src: hero, alt: "Creasta Bucegilor văzută din Sinaia", category: "Împrejurimi" },
  { src: area, alt: "Trasee de drumeție din apropiere", category: "Împrejurimi" },

  { src: courtyard, alt: "Grătar profesional pentru oaspeți", category: "Facilități" },
  { src: breakfast, alt: "Bucătărie utilată pentru oaspeți", category: "Facilități" },
  { src: lounge, alt: "Spațiu comun cu Wi-Fi și lectură", category: "Facilități" },
];

export type Room = {
  name: string;
  image: string;
  price: string;
  capacity: string;
  description: string;
  features: string[];
};

export const ROOMS: Room[] = [
  {
    name: "Camera Dubla",
    image: roomDouble,
    price: "de la 320 lei / noapte",
    capacity: "2 persoane",
    description:
      "Camera cu pat matrimonial, se accepta 2 adulti si 1 copil maxim 10 ani.",
    features: [
      "Pat matrimonial 180×200",
      "Baie proprie cu duș walk-in",
      "Televizor Smart 43\"",
      "Wi-Fi fibră 300 Mbps",
      "Aer condiționat + încălzire în pardoseală",
      "Vedere la munte",
    ],
  },
  {
    name: "Camera Tripla",
    image: roomFamily,
    price: "de la 420 lei / noapte",
    capacity: "2 adulți + 2 copii / 3 adulți + 1 copil",
    description:
      "Camera cu pat matrimonial si un pat de o persoana, se accepta 2 adulti si 2 copii / 3 adulti si un copil (copilul sa aib maxim 10 ani).",
    features: [
      "Pat matrimonial + 2 paturi single",
      "Baie proprie cu cadă",
      "Balcon propriu",
      "Televizor Smart 50\"",
      "Wi-Fi fibră 300 Mbps",
      "Aer condiționat",
      "Vedere la pădure",
    ],
  },
  {
    name: "Apartament",
    image: roomApartment,
    price: "de la 520 lei / noapte",
    capacity: "5 persoane",
    description:
      "Apartament de 5 locuri, compus din living cu canapea extensibila de 2 persoane, o camera cu pat matrimonial si o camera cu un pat de o persoana.",
    features: [
      "Dormitor separat + canapea extensibilă",
      "Chicinetă utilată (plită, frigider, cafetieră)",
      "Baie proprie cu marmură",
      "Balcon panoramic",
      "Televizor Smart 55\"",
      "Aer condiționat",
      "Vedere panoramică",
    ],
  },
];
