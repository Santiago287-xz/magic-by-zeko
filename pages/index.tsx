import DefaultLayout from "@/layouts/default";
import ProductCatalog from "@/components/product-catalog";
import GaleryPics from "@/components/galery-section";
import { type Product } from "@/pages/types.d";

import { getWixClient } from '@/pages/hooks/useWixClientServer';
import { products } from '@wix/stores';

export async function getStaticProps() {
  const wixClient = await getWixClient();
  let posts: products.Product[] = [];
  try {
    posts = (await wixClient.products.queryProducts().limit(20).find()).items;
  } catch (err) {
    console.error(err);
  }
  return { props: { posts } };
}

export default function IndexPage({ posts }: { posts: Array<Product> }) {
  return (
    <DefaultLayout>      
      <ProductCatalog posts={posts} />
      <GaleryPics/>
    </DefaultLayout>
  );
}
