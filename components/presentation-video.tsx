import { Button, Link, Image } from "@nextui-org/react";
import { Cart } from "@/components/icons";

export default function PresentationVideo() {
  return (
    <section className="h-screen bg-black top-[-4rem] relative">
    <div className="flex flex-wrap flex-col h-full w-full absolute content-center justify-center animate-fade-up z-20">
    <Image
        alt="Logo"
        src="https://media.discordapp.net/attachments/1116888339967119460/1156796158295949322/MBZ-Blanco.png?ex=654318e0&is=6530a3e0&hm=0f6cced39b81031ac9db46b743f3624712c33a7fead145f06b26bf828efbcb4d&=&width=1020&height=379"
        className="z-0 object-cover h-[200px] w-25"
      />
      <Button
        href="/tienda/prod_OgaEMmLdWZvxde"
        as={Link}
        className="mx-auto mt-8 z-20 py-8 px-8 shadow-md hover:shadow-lg bg-white text-black font-bold"
      >
        Ver Productos
        <Cart />
      </Button>
    </div>
      <div className="top-0 relative h-screen w-full z-1">
        <video
          className="w-full h-screen object-cover opacity-10 absolute"
          disableRemotePlayback
          preload="metadata"
          loop
          autoPlay
          muted
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/1a90808b84b141459baadf3f48898a88.webm"
            type="video/webm"
          ></source>
          {/* <source
            src="http://magicbyz.wwwaz1-ts114.a2hosted.com/presentation-video.mp4"
            type="video/mp4"
          ></source> */}
        </video>
      </div>
    </section>
  );
}
