export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  lenguage: "es",
  name: "Magic by Zeko",
  description:
    "Nos encontramos enfocados al máximo en crear y construir mousepads orientados al deporte competitivo profesional en sus diferentes entregas.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Tienda",
      href: "/tienda/magic-control",
    },
    {
      label: "Ayuda",
      href: "/ayuda",
    },
  ],
  images: {
    // Christmas Images 🎄 ✨
    principalLogo: "https://i.imgur.com/VCQJBQ8.png",
    lightMiniLogo: "https://i.imgur.com/mhTOV3F.png",
    darkMiniLogo: "https://i.imgur.com/js8aXPR.png",
    // Christmas Images 🎄 ✨

    // principalLogo : "https://i.imgur.com/6JDNdRX.png",
    // lightMiniLogo : "https://i.imgur.com/YZlVtD7.png",
    // darkMiniLogo: "https://i.imgur.com/2krvdyW.png",

    homeVideoImage: "https://i.imgur.com/ZDfcMBy.png",
    paymentMethods: "https://i.imgur.com/nKXwXtu.png",
    padSize: "https://i.imgur.com/S6bITr3.png",
    padControl: "https://i.imgur.com/UUSZmco.png",
    padSpeed: "https://i.imgur.com/TK9LxKv.png",
  },
  videos: {
    homeVideo: "https://i.imgur.com/TYzbMiP.mp4",
    padVideo: "https://i.imgur.com/feWFtzt.mp4",
  },
  links: {
    twitter: "https://twitter.com/MagicByZeko",
    instagram: "https://www.instagram.com/magicbyzeko/",
    webcodebuilders: "https://www.instagram.com/webcode__/",
  },
  galery: [
    {
      span: "MOUSEPAD RED",
      h4: "",
      grid: "sm:col-span-4",
      fotter: null,
      image: "https://i.imgur.com/PeUDt9z.png",
    },
    {
      span: "MOUSEPAD BLUE",
      h4: "",
      grid: "sm:col-span-4",
      fotter: null,
      image: "https://i.imgur.com/uZNksc2.png",
    },
    {
      span: "MOUSEPAD BLACK",
      h4: "",
      grid: "sm:col-span-4",
      fotter: null,
      image: "https://i.imgur.com/qRIBj0l.png",
    },
    {
      span: "",
      h4: "",
      grid: "sm:col-span-5",
      fotter: null,
      image: "https://i.imgur.com/ZDfcMBy.png",
    },
    {
      span: "",
      h4: "",
      grid: "sm:col-span-7",
      fotter: null,
      image: "https://i.imgur.com/80nNILB.png",
    },
  ],
  contact: {
    gmail: "magicbyzeko@gmail.com",
  },
};
