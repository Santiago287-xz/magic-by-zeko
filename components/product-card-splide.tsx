import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/core";

import { Image } from "@nextui-org/react";
import ButtonCheckout from "@/components/button-checkout";
import { products } from "@wix/stores";

export default function ProductCard({
  selected_product,
  buy_now_link,
  selected_variant,
}: {
  selected_product: products.Product;
  buy_now_link: string;
  selected_variant: products.Variant
}) {
  const images = selected_product.media!.items;
  return (
    <div className="rounded-lg mt-8 mx-auto">
      <div className="max-w-[38rem] rounded-lg w-auto m-auto">
        <Splide aria-label="Products">
          {images!.map((media, index) => (
            <SplideSlide key={index} className="flex justify-center">
              <Image
                removeWrapper
                alt={media.image.altText}
                src={media.image?.url}
                className="z-0 object-cover w-auto max-h-[28rem]"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <footer className="flex justify-around p-4">
        <div className="flex content-end flex-wrap">
          <ButtonCheckout
            buy_now_link={buy_now_link}
            inStock={selected_product.stock!.inStock}
          />
        </div>
        <p className="text-xl text-foreground/70 grid text-end">
          Total price
          {selected_product.price.formatted.discountedPrice ==
          selected_product.price.formatted.price ? null : (
            <b className="text-red-500 text-lg line-through">
              {selected_product.price.formatted.discountedPrice}
            </b>
          )}
          <b className="text-green-500 text-2xl">
            {selected_product.price.formatted.price}
          </b>
        </p>
      </footer>
    </div>
  );
}
