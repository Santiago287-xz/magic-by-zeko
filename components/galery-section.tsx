import React from "react";

import {
  Card,
  Image,
  Divider,
} from "@nextui-org/react";
import { siteConfig } from "@/config/site";

export default function GaleryPics() {
  return (
    <section className="w-full bg-[#2b2b2b] dark:bg-[#0b0b0b]">
      <Divider />
      <div className="w-11/12 m-auto">
        <div className="flex flex-col w-4/5 m-auto">
          <h3 className="w-full text-center sm:text-start text-4xl md:text-3xl lg:text-5xl py-8 sm:pb-2 text-zinc-200">
            Galeria
          </h3>
          <p className="md:text-lg lg:text-xl text-zinc-400 hidden sm:flex flex-col pb-8">
            Experiencia gaming óptima, descubre nuestros:
            <span className="font-medium text-zinc-200">
              Mousepads de calidad
            </span>
          </p>
        </div>
      </div>
      <main className="max-w-[900px] w-4/5 gap-2 grid grid-cols-12 grid-rows-2 pb-16 mx-auto justify-center rounded-md">
        {siteConfig.galery.map((cart) => (
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
