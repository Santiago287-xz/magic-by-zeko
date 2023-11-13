import { Button, Link, Image } from "@nextui-org/react";
import { Cart } from "@/components/icons";

export default function PresentationVideo() {
  return (
    <section className="h-screen bg-black top-[-4rem] relative">
    <div className="flex flex-wrap flex-col h-full w-full absolute content-center justify-center animate-fade-up z-20">
      <Image
      alt="Logo"
      src="https://media.discordapp.net/attachments/1116888339967119460/1156796158295949322/MBZ-Blanco.png?ex=654318e0&is=6530a3e0&hm=0f6cced39b81031ac9db46b743f3624712c33a7fead145f06b26bf828efbcb4d&=&width=1020&height=379"
      className="rounded-none z-0 object-cover h-24 w-auto sm:h-24 sm:w-auto md:h-32 md:w-auto lg:h-40 lg:w-auto xl:h-48 xl:w-auto"
      />
      <Button
        href="/tienda/magic-control"
        as={Link}
        className="mx-auto mt-8 z-20 py-6 px-4 sm:py-6 sm:px-4 md:py-6 md:px-6 lg:py-8 lg:px-8 xl:py-8  xl:px-8  shadow-md hover:shadow-lg bg-white text-black font-bold"
        >
        Ver Productos
        <Cart />
      </Button>
    </div>
      <div className="top-0 relative h-screen w-full z-1">
        <video
          className="w-full h-screen object-cover opacity-5 absolute"
          disableRemotePlayback
          preload="metadata"
          loop
          autoPlay
          muted
        >
          {/* <source
            src="https://cdn.discordapp.com/attachments/1019381524149305426/1169755820913864734/C3927_-_Compressed_with_FlexClip_1.mp4?ex=65568f00&is=65441a00&hm=303eb9291d5385f6b1ee285cf18519b4f7e6c580897ddb6f415b3f78e57f2638&"
            type="video/webm"
          ></source> */}
          <source
            src="https://cdn.discordapp.com/attachments/1019381524149305426/1169755820913864734/C3927_-_Compressed_with_FlexClip_1.mp4?ex=65568f00&is=65441a00&hm=303eb9291d5385f6b1ee285cf18519b4f7e6c580897ddb6f415b3f78e57f2638&"
            type="video/mp4"
          ></source>          
        </video>
      </div>
    </section>
  );
}
