import { Navbar } from "@/components/navbar";
import { Head } from "./head";
import Footer from "@/components/footer";

import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] });

export default function DefaultLayout({
  children,
  showAllInputsFooter = false,
}: {
  children: React.ReactNode;
  showAllInputsFooter?: boolean;
}) {
  return (
    <div className={outfit.className}>
      <div className="relative flex flex-col">
        <Head />
        <Navbar />
        {children}
        <Footer showAllInputs={showAllInputsFooter} />
      </div>
    </div>
  );
}
