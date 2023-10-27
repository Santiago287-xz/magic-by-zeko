import ProductCartSplide from "@/components/product-card-splide";

import Link from "next/link";
import { type Product } from "@/pages/types.d";
import { Image, Divider } from "@nextui-org/react";

export default function ProductAllData({
  selected_product
}: {
  selected_product: Product;
}) {
  return (
    <section className="flex justify-center flex-wrap flex-col lg:flex-row md:flex-nowrap items-center md:p-16 md:pt-0 rounded-lg w-full xl:w-4/5 m-auto">
      <ProductCartSplide selected_product={selected_product} />
      <article className="sm:p-8 w-auto lg:w-2/5">
        <div className="text-center">
          <span className="uppercase text-3xl tracking-[0.16em] text-foreground-600">
            {selected_product.name}
          </span>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-normal">
            {selected_product.name}
          </h3>
          <p className="py-12">
          Nuestro mousepad es una combinación de 2 telas (Control y Speed) las cuales otorgan la mejor precisión del mercado y una larga durabilidad.
          </p>
        </div>
        <Divider />
        <h4 className="pt-4 text-center font-medium text-lg">
          Seleccionar Color
        </h4>
        <div className="flex flex-col gap-4 justify-center items-center sm:flex-row sm:gap-4 sm:justify-evenly">
          
        </div>
      </article>
    </section>
  );
}
