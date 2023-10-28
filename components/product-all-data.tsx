"use client";
import { useEffect, useMemo, useState, Dispatch, SetStateAction } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/core";

import { Image } from "@nextui-org/react";
import ButtonCheckout from "@/components/button-checkout";
import { ProductOptions } from "@/components/product-options";

import { products } from "@wix/stores";
import { Divider } from "@nextui-org/react";

type SelectedOptions = Record<string, string | null>;

const createProductOptions = (
  selectedOptions?: any,
  selectedVariant?: products.Variant
) =>
  Object.keys(selectedOptions ?? {}).length
    ? {
        options: selectedVariant?._id
          ? { variantId: selectedVariant!._id }
          : { options: selectedOptions },
      }
    : undefined;

export default function ProductAllData({
  selected_product,
}: {
  selected_product: products.Product;
}) {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedVariant, setSelectedVariant] = useState<products.Variant>({});
  const [selectedOptions, setSelectedOptions] = useState<any>({});

  useEffect(() => {
    if (
      selected_product.manageVariants &&
      Object.keys(selectedOptions).length ===
        selected_product.productOptions?.length
    ) {
      const variant = selected_product.variants?.find((variant) =>
        Object.keys(variant.choices!).every(
          (choice) => selectedOptions[choice] === variant.choices![choice]
        )
      );
      setSelectedVariant(variant!);
    }
    setQuantity(1);
  }, [
    selectedOptions,
    selected_product.manageVariants,
    selected_product.productOptions?.length,
    selected_product.variants,
  ]);

  useEffect(() => {
    selectDefaultOptionFromProduct(selected_product, setSelectedOptions);
  }, [selected_product]);

  function selectDefaultOptionFromProduct(
    product: products.Product,
    updater: Dispatch<SetStateAction<SelectedOptions>>
  ) {
    product.productOptions?.forEach((option) => {
      updater((choices) => ({
        ...choices,
        [option.name!]: option.choices![0].description!,
      }));
    });
  }

  const isAvailableForPurchase = useMemo(() => {
    if (!selected_product.manageVariants && selected_product.stock?.inStock) {
      return true;
    }
    if (!selected_product.manageVariants && !selected_product.stock?.inStock) {
      return false;
    }

    return selectedVariant?.stock?.inStock;
  }, [selectedVariant, selected_product]);

  const buyNowLink = useMemo(() => {
    const productOptions = createProductOptions(
      selectedOptions,
      selectedVariant
    );
    return `/api/quick-buy/${
      selected_product._id
    }?quantity=${quantity}&productOptions=${
      productOptions
        ? decodeURIComponent(JSON.stringify(productOptions.options))
        : ""
    }`;
  }, [selectedOptions, selectedVariant, selected_product._id, quantity]);
  const images = selected_product.media!.items;
  // const images = [selected_product.media?.mainMedia];
  console.log(selected_product);
  return (
    <section className="flex justify-center flex-wrap flex-col lg:flex-row md:flex-nowrap items-center md:p-16 md:pt-0 rounded-lg w-full xl:w-4/5 m-auto">
      <div className="rounded-lg mt-8 mx-auto">
        <div className="max-w-[38rem] rounded-lg w-auto m-auto">
          <Splide aria-label="Products">
            {images!.map((media, index) => (
              <SplideSlide key={index} className="flex justify-center">
                <Image
                  removeWrapper
                  alt={media.image?.url}
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
              buy_now_link={buyNowLink}
              inStock={isAvailableForPurchase!}
            />
          </div>
          <p className="text-xl text-foreground/70 grid text-end">
            Total price
            {selected_product.price!.formatted!.discountedPrice ==
            selected_product.price!.formatted!.price ? null : (
              <b className="text-red-500 text-lg line-through">
                {selected_product.price!.formatted!.discountedPrice}
              </b>
            )}
            <b className={"text-green-500 text-2xl"}>
              {selected_product.price!.formatted!.price}
            </b>
          </p>
        </footer>
      </div>
      <article className="sm:p-8 w-auto lg:w-2/5">
        <div className="text-center">
          <span className="uppercase text-3xl tracking-[0.16em] text-foreground-600">
            {selected_product.name + " " + selectedOptions.Color}
          </span>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-normal">
            {selected_product.name}
          </h3>
          <p className="py-12">{selected_product.description}</p>
        </div>
        <Divider />
        <h4 className="pt-4 text-center font-medium text-lg">
          Seleccionar color
        </h4>
        <ProductOptions
          options={selected_product.productOptions!}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
        <div className="flex flex-col gap-4 justify-center items-center sm:flex-row sm:gap-4 sm:justify-evenly"></div>
      </article>
    </section>
  );
}
