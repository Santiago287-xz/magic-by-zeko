import React from "react";

import {
  Card,
  Image,
  Divider,
} from "@nextui-org/react";

export default function GaleryPics() {
  const data = [
    {
      span: "MOUSEPAD RED",
      h4: "",
      grid: "sm:col-span-4",
      fotter: null,
      image:
        "https://i.imgur.com/PeUDt9z.png",
    },
    {
      span: "MOUSEPAD BLUE",
      h4: "",
      grid: "sm:col-span-4",
      fotter: null,
      image:
        "https://i.imgur.com/uZNksc2.png",
    },
    {
      span: "MOUSEPAD BLACK",
      h4: "",
      grid: "sm:col-span-4",
      fotter: null,
      image:
        "https://i.imgur.com/qRIBj0l.png",
    },
    {
      span: "",
      h4: "",
      grid: "sm:col-span-5",
      fotter: null,
      image:
        "https://i.imgur.com/ZDfcMBy.png",
    },
    {
      span: "",
      h4: "",
      grid: "sm:col-span-7",
      fotter: null,
      image:
        "https://i.imgur.com/80nNILB.png",
    },
  ];
  return (
    <section className="w-full bg-[#2b2b2b] dark:bg-[#0b0b0b]">
      <Divider />
      <div className="w-11/12 m-auto">
        <div className="flex flex-col w-4/5 m-auto">
          <h2 className="w-full text-center sm:text-start text-4xl md:text-3xl lg:text-5xl py-8 sm:pb-2 text-zinc-200">
            Galeria
          </h2>
          <p className="md:text-lg lg:text-xl text-zinc-400 hidden sm:flex flex-col pb-8">
            Experiencia gaming óptima, descubre nuestros:
            <span className="font-medium text-zinc-200">
              Mousepads de calidad
            </span>
          </p>
        </div>
      </div>
      <main className="max-w-[900px] w-4/5 gap-2 grid grid-cols-12 grid-rows-2 pb-16 mx-auto justify-center rounded-md">
        {data.map((cart) => (
          <Card
            key={cart.image}
            className={"col-span-12 h-[300px] bg-transparent " + cart.grid}
          >
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover hover:scale-105 rounded-none bg-none"
              src={cart.image}
            />
          </Card>
        ))}
      </main>
    </section>
  );
}
