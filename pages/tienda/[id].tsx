import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import ProductAllData from "@/components/product-all-data";
import IconsSection from "@/components/icons-section";
import TypesSection from "@/components/types-section";
import SizeSection from "@/components/size-section";
import VideoSection from "@/components/video-section";
import { Divider } from "@nextui-org/react";

import { getWixClient } from "@/hooks/useWixClientServer";
import { products } from "@wix/stores";

export async function getStaticPaths() {
  let paths;
  // const wixClient = await getWixClient();
  // paths = await wixClient.products
  //   .queryProducts()
  //   .limit(10)
  //   .find()
  //   .then(({ items }) => {
  //     return items.map((product) => ({
  //       params: { id: product.slug },
  //     }));
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     paths = [];
  //   });
  paths = [{ params: { id: "mouse-pad-red" } }];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const wixClient = await getWixClient();
  const { items } = await wixClient.products
    .queryProducts()
    .eq("slug", decodeURIComponent(params.id))
    .limit(1)
    .find();
  const product = items[0];
  return { props: { product } };
}

import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] });

export default function Page({ product }: { product: products.Product }) {
  return (
    <>
      <Navbar />
      <main className={outfit.className + " relative"}>
        <ProductAllData selected_product={product} />
        <Divider />
        <IconsSection />
        <Divider />
        <SizeSection />
        <Divider />
        <TypesSection />
        <VideoSection />
      </main>
      <Footer showAllInputs={false} />
    </>
  );
}
