import React from "react";

import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  Link,
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
        "https://media.discordapp.net/attachments/1149404211017175232/1168596488402780280/DSC06567_1.jpg?ex=6552574a&is=653fe24a&hm=696a3cee61f45e3ad3a7a68dccb7e3d09d0affd158c8efe5a82898d6eccbfcf5&=&width=1005&height=670",
    },
    {
      span: "MOUSEPAD BLUE",
      h4: "",
      grid: "sm:col-span-4",
      fotter: null,
      image:
        "https://media.discordapp.net/attachments/1149404211017175232/1168596488880918539/DSC06561_1.jpg?ex=6552574a&is=653fe24a&hm=952f4fed357875d3d2b8dc91997ad1576e4899696b2d925faf3ecdf487bf390c&=&width=1005&height=670",
    },
    {
      span: "MOUSEPAD BLACK",
      h4: "",
      grid: "sm:col-span-4",
      fotter: null,
      image:
        "https://media.discordapp.net/attachments/1149404211017175232/1168596489593946154/DSC06565_1.jpg?ex=6552574a&is=653fe24a&hm=51eeff6aeaddaaef6b342d79bcfc341324267f0e4895e94fbcae0ecf15a935b2&=&width=1005&height=670",
    },
    {
      span: "",
      h4: "",
      grid: "sm:col-span-5",
      fotter: null,
      image:
        "https://media.discordapp.net/attachments/1149404211017175232/1168596493553385592/tres_pads_zeko_1.jpg?ex=6552574b&is=653fe24b&hm=350e5345bf10b39be519e9daea18023a4d0946b2563628290f0ef404684ed733&=&width=1005&height=670",
    },
    {
      span: "",
      h4: "",
      grid: "sm:col-span-7",
      fotter: null,
      image:
        "https://media.discordapp.net/attachments/1149404211017175232/1168596487823953930/C3927.00_00_30_00.Imagen_fija001_2.jpg?ex=6552574a&is=653fe24a&hm=426a5dd0b0e51fc7bf9ad4796adc2a6b5fcb8a3ed42f2f0dbf020bebf170a6cd&=&width=1191&height=670",
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
