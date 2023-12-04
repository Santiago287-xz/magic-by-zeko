"use client"

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
  console.log(selected_product)
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
  return (
    <section className="grid max-w-[80rem] justify-center items-start md:grid-cols-2 md:grid-rows-3 md:p-8 py-8 rounded-lg w-full xl:w-4/5 m-auto">
      <div className="max-w-[38rem] rounded-lg w-auto m-auto col-start-1 col-end-1 md:row-start-1 md:row-end-3">
        <Splide
          options={{
            type: "loop",
            perMove: 1,
            loop: true,
            autoplay: true,
            interval: 5000,
            drag: true,
            updateOnMove: true,
          }}
          aria-label="Products"
        >
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

      <div className="text-center row-start-1 md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-2">
        <span className="uppercase text-3xl tracking-[0.16em] text-foreground-600">
          {selected_product.name + " " + selectedOptions.Color}
        </span>
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-normal">
          {selected_product.name}
        </h3>
        <p className="p-8 hidden md:block">
          Nuestro mousepad es una combinación de 2 telas (Control y Speed) las
          cuales otorgan la mejor precisión del mercado y una larga durabilidad.
        </p>
      </div>

      <footer className="flex justify-around p-4 row-start-4 md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-3">
        <div className="flex content-end flex-wrap">
          <ButtonCheckout
            buy_now_link={buyNowLink}
            inStock={isAvailableForPurchase!}
          />
        </div>
        <p className="text-xl text-foreground/70 grid text-end">
          Precio Total
          {selected_product.price!.formatted!.discountedPrice ==
          selected_product.price!.formatted!.price ? (
            <b className={"text-green-500 text-2xl"}>
              {selected_product.price!.formatted!.discountedPrice}
            </b>
          ) : (
            <>
              <b className="text-red-500 text-lg line-through">
                {selected_product.price!.formatted!.price}
              </b>
              <b className={"text-green-500 text-2xl"}>
                {selected_product.price!.formatted!.discountedPrice}
              </b>
            </>
          )}
        </p>
      </footer>

      <div className="md:col-start-2 md:col-end-2 md:row-start-2 md:row-end-4">
        <Divider className="hidden md:block" />
        <h4 className="pt-4 text-center font-medium text-lg">
          Seleccionar color
        </h4>
        <ProductOptions
          options={selected_product.productOptions!}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center sm:flex-row sm:gap-4 sm:justify-evenly"></div>
    </section>
  );
}
