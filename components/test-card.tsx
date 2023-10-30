import React from "react";
import { Image, Link } from "@nextui-org/react";
import { products } from "@wix/stores";

export default function TestCard({
  data,
  color,
}: {
  data: products.Product;
  color: string;
}) {
  return (
    <>
      <div
        key={data._id}
        className="m-4 p-4 w-full sm:w-auto rounded-2xl bg-white dark:bg-zinc-900"
      >
        <div className="font-medium inline m-auto text-center">
          <p className="uppercase text-m tracking-[0.16em]">
            {data.name} {color}
          </p>
          <h3 className="text-4xl font-normal">Magic V2</h3>
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
              color === "Red"
                ? "https://static.wixstatic.com/media/b8c362_96d448439c5940cf9ddcfe275b9bef55~mv2.png/v1/fit/w_473,h_473,q_90/file.png"
                : "https://static.wixstatic.com/media/b8c362_2ae4c79bf7a24bb6bb86dde0d68c93a9~mv2.png/v1/fit/w_473,h_473,q_90/file.png"
            }
            className="z-0 h-4/5 object-cover hover:scale-105"
          />
        </Link>
      </div>
    </>
  );
}
