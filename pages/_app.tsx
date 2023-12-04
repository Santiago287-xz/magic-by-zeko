import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono, outfit } from "@/config/fonts";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
      <Analytics />
    </>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  outfit: outfit.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
