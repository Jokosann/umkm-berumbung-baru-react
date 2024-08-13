export interface Busines {
  id: string;
  username: string;
  profileUser: string;
  nameBusines: string;
  profileBusines: string;
  adress: string;
  phone: string;
  whatsapp: string;
  googleMaps: string;
  description: string;
  images: string[];
  sosialMedia: SosialMedia[];
}

export interface SosialMedia {
  name: string;
  url: string;
  user: string;
}
