import { Image } from "@nextui-org/react";
export default function TypesSection() {
  return (
    <section className="bg-[#141a1f]">
      <ul className="flex flex-wrap justify-evenly md:flex-nowrap gap-2 py-12 sm:py-20 text-center">
        <li className="flex flex-col items-center text-slate-200 max-w-[25rem]">
          <Image
            src="https://i.imgur.com/UUSZmco.png"
            alt="Descripción de la imagen"
            className="mr-4"
          />
          <p className="mt-4 text-2xl font-bold text-slate-200">Control</p>
          <p className="mt-2 text-slate-400">
            Obtén un{" "}
            <span className="font-bold text-blue-400 inline-block w-max">control preciso</span> al
            mover tu mouse sobre la superficie de este mouse pad. Es altamente
            recomendado para juegos estratégicos como{" "}
            <span className="font-bold text-blue-400 inline-block w-max">CSGO y Valorant</span>
            (Sin revestimiento).
          </p>
        </li>
        <li className="flex flex-col items-center text-slate-200 max-w-[25rem]">
          <Image
            src="https://i.imgur.com/TK9LxKv.png"
            alt="Descripción de la imagen"
            className="w-85 h-85 mr-4"
          />
          <p className="mt-4 text-2xl font-bold text-slate-200">Speed</p>
          <p className="mt-2 text-slate-400">
            Experimenta una{" "}
            <span className="font-bold text-orange-400 inline-block w-max">mayor velocidad</span>{" "}
            al mover tu mouse sobre la superficie de este mouse pad. Ideal para
            juegos de alta acción como{" "}
            <span className="font-bold text-orange-400 inline-block w-max">Fortnite</span> (Sin
            revestimiento).
          </p>
        </li>
      </ul>
    </section>
  );
}
