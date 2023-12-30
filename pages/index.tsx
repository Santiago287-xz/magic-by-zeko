import DefaultLayout from "@/layouts/default";
import ProductCatalog from "@/components/product-catalog";
import PresentationVideo from "@/components/presentation-video";
import GaleryPics from "@/components/galery-section";

import { getWixClient } from "@/hooks/useWixClientServer";
import { products } from "@wix/stores";

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

export default function IndexPage({ posts }: { posts: products.Product[] }) {
  return (
    <DefaultLayout>
      <PresentationVideo />
      <main className="container mx-auto flex-grow">
        <ProductCatalog posts={posts} />
      </main>
      <GaleryPics />
    </DefaultLayout>
  );
}
