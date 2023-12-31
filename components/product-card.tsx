import React from "react";
import { Image, Link } from "@nextui-org/react";

export default function ProductCard({
  name,
  slug,
  discountedPrice,
  imageUrl,
}: {
  name: string;
  slug: string;
  discountedPrice: string;
  imageUrl: string;
}) {
  return (
    <div className="m-4 p-4 w-full sm:w-auto rounded-2xl bg-white dark:bg-zinc-900">
      <div className="font-medium inline m-auto text-center">
        <p className="uppercase text-m tracking-[0.16em]">{name} Black</p>
        <h3 className="text-4xl font-normal">Magic V2</h3>
      </div>
      <Link
        className="relative mt-8 bg-foreground/10 rounded-2xl sm:w-[19rem] w-full"
        href={`/tienda/${slug}`}
      >
        <b
          className="bg-zinc-950 text-white border-white dark:border-zinc-900  border-5
          py-1 px-4 rounded-3xl flex items-center translate-x-[-50%] translate-y-[-50%] absolute top-[-.5rem] left-[50%] z-30"
        >
          <span>{discountedPrice}</span>
        </b>
        <Image
          alt={name}
          src={imageUrl}
          className="z-0 h-4/5 object-cover hover:scale-105"
        />
      </Link>
    </div>
  );
}
