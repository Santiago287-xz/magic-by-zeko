import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import ProductAllData from "@/components/product-all-data";
import IconsSection from "@/components/icons-section";
import TypesSection from "@/components/types-section";
import SizeSection from "@/components/size-section";
import VideoSection from "@/components/video-section";
import GaleryPics from "@/components/galery-section";
import { Divider } from "@nextui-org/react";

import { getWixClient } from "@/hooks/useWixClientServer";
import { products } from "@wix/stores";
import React, { useState, useEffect } from "react";

export async function getStaticPaths() {
  const wixClient = await getWixClient();
  let paths;
  paths = await wixClient.products
    .queryProducts()
    .limit(10)
    .find()
    .then(({ items }) => {
      return items.map((product) => ({
        params: { id: product.slug },
      }));
    })
    .catch((err) => {
      console.error(err);
      paths = [""];
    });
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

import DefaultLayout from "@/layouts/default";

export default function Page({ product }: { product: products.Product }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }, []);
  return (
    <DefaultLayout>
      <main className="relative">
        <ProductAllData selected_product={product} />
        <Divider />
        <IconsSection />
        <Divider />
        <SizeSection />
        <Divider />
        <TypesSection />
        {isMobile ? <GaleryPics /> : <VideoSection />}
      </main>
    </DefaultLayout>
  );
}
