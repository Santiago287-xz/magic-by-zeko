import type { NextApiRequest, NextApiResponse } from "next";
import { checkout as checkoutTypes } from "@wix/ecom";
import { getWixClient } from "@/hooks/useWixClientServer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const productId: string = req.query.productId as string;
  const STORES_APP_ID = "1380b703-ce81-ff05-f115-39571d94dfcd";

  const requestUrl = "http://localhost:3000" + req.url;
  const baseUrl = new URL("/", requestUrl).toString();
  const { searchParams } = new URL(requestUrl);
  const quantity = parseInt(searchParams.get("quantity") || "1", 10);
  const productOptions = JSON.parse(
    searchParams.get("productOptions") || "null"
  );
  const wixClient = await getWixClient();
  const { product } = await wixClient.products.getProduct(productId);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  const selectedOptions =
    productOptions ??
    (product.manageVariants
      ? { variantId: product.variants![0]._id }
      : product?.productOptions?.length
      ? {
          options:
            product?.productOptions?.reduce((acc, option) => {
              acc[option.name!] = option.choices![0].description!;
              return acc;
            }, {} as Record<string, any>) ?? {},
        }
      : undefined);
  const item = {
    quantity,
    catalogReference: {
      catalogItemId: product._id!,
      appId: STORES_APP_ID,
      options: selectedOptions,
    },
  };
  const checkout = await wixClient.ecomCheckout.createCheckout({
    lineItems: [item],
    channelType: checkoutTypes.ChannelType.WEB,
    overrideCheckoutUrl: `${baseUrl}api/redirect-to-checkout?checkoutId={checkoutId}`,
  });

  const { redirectSession } = await wixClient.redirects.createRedirectSession({
    ecomCheckout: { checkoutId: checkout!._id! },
    callbacks: {
      postFlowUrl: baseUrl,
      thankYouPageUrl: `${baseUrl}stores-success`,
      cartPageUrl: `${baseUrl}cart`,
    },
  });
  return res.redirect(307, redirectSession!.fullUrl!);
}
