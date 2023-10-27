import { createClient, OAuthStrategy } from '@wix/sdk';
import { collections, products } from '@wix/stores';
import { orders, currentCart, checkout as ecomCheckout } from '@wix/ecom';
import { redirects } from '@wix/redirects';
import {
  wixEvents,
  checkout,
  schedule,
  orders as eventOrders,
} from '@wix/events';

export const getWixClient = async () => {
  let refreshToken;
  try {
    refreshToken = JSON.parse('{}');
  } catch (e) {}
  const wixClient = createClient({
    modules: {
      products,
      collections,
      wixEvents,
      checkout,
      ecomCheckout,
      schedule,
      orders,
      eventOrders,
      currentCart,
      redirects,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: { value: '', expiresAt: 0 },
      },
    }),
  });
  return wixClient;
};
