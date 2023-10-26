import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-08-16',
});

async function loadAllProducts(){
  return (
    await stripe.products.search({
      query: "active:'true'",
    })
  ).data;
}

export async function loadProductsId() {
  const products = await loadAllProducts()
  return Promise.all(products.map((product) => product.id));
}

export async function loadProduct(productId: any) {
  return await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });
}

export async function loadFullData() {
  const products = await loadAllProducts()
  return Promise.all(products.map((product) => loadProduct(product.id)));
}
