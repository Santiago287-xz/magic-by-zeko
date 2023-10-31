import { Image } from "@nextui-org/react";

export default function SizeSection() {
  return (
    <section className="bg-gradient-to-b from-foreground/10 to-foreground/5 flex justify-center">
      <main className="flex justify-evenly flex-col md:flex-row w-4/5 md:w-full py-8">
        <article>
          <div className="my-4">
            <span className="font-bold md:m-0 text-md md:text-xl lg:text-2xl text-center text-foreground-500">
              Tamaño
            </span>
            <h3 className="font-bold text-xl md:text-2xl lg:text-4xl">
              Grande
            </h3>
          </div>
          <ul className="justify-center flex flex-col gap-4 md:gap-16 h-3/5">
            <li>Ancho: 420mm</li>
            <li>Alto: 420mm</li>
            <li>Expesor: 4.5mm</li>
          </ul>
        </article>
        <div>
          <Image
            alt={"size-image"}
            src={
              "https://media.discordapp.net/attachments/1019381524149305426/1165126923685474404/mousepad-size.png?ex=6545b801&is=65334301&hm=27b54110eb5aaff0896ced392aeddbcc2c42286d5380320b9139e0eaad7b2805&=&width=947&height=670"
            }
            className="h-auto max-h-[500px] my-8 object-contain"
          />
        </div>
        <div>
          <span className="font-bold text-md md:text-xl lg:text-2xl text-foreground-500">
            Garantía
          </span>
          <h3 className="font-bold text-xl md:text-2xl lg:text-4xl">6 Meses</h3>
        </div>
      </main>
    </section>
  );
}
