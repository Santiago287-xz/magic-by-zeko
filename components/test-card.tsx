import React from "react";
import { Image, Link } from "@nextui-org/react";
import { products } from "@wix/stores";

export default function TestCard({ data, color }: { data: products.Product, color: string }) {
  return (
    <>
      <div
        key={data._id}
        className="m-4 p-4 w-full sm:w-auto rounded-2xl bg-white dark:bg-zinc-900"
      >
        <div className="font-medium inline m-auto text-center">
          <p className="uppercase text-m tracking-[0.16em]">{data.name} {color}</p>
          <h3 className="text-4xl font-normal">{data.description}</h3>
        </div>
        <Link
          className="relative mt-8 bg-foreground/10 rounded-2xl sm:w-[19rem] w-full"
          href={`/tienda/${data.slug}`}
        >
          <b
            className="bg-zinc-950 text-white border-white dark:border-zinc-900  border-5
          py-1 px-4 rounded-3xl flex items-center translate-x-[-50%] translate-y-[-50%] absolute top-[-.5rem] left-[50%] z-30"
          >
            <span>$</span>
            <span>{data.price!.price}</span>
          </b>
          <Image
          alt={data.name!}
          src={
        color === 'Black'
          ? 'https://media.discordapp.net/attachments/1019381524149305426/1165122987087900692/mousepad-black-3.png?ex=6545b457&is=65333f57&hm=b97968d9da593bb97d65763980dcfcc5a7fc63131578e3c4e7c9fe39124eb312&=&width=472&height=473'
          : color === 'Azul'
          ? 'https://media.discordapp.net/attachments/1019381524149305426/1165122988228739162/mousepad-blue-3.png?ex=6545b457&is=65333f57&hm=4a6d83a61bdf8a205e8e1088e999f2bab872f951dd8039b6ba9c2aed38364ebd&=&width=473&height=472'
          : ""
      }
      className="z-0 h-4/5 object-cover hover:scale-105"
    />
  </Link>
      </div>
    </>
  );
}
