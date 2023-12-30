import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/core";

import { products } from "@wix/stores";
import { Image } from "@nextui-org/react";

export default function SliderImage({ images }: { images : products.MediaItem[] }) {
  return (
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
  );
}
