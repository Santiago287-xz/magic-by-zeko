import { MiraIcon, LineIcon, PadIcon, PadCheckIcon } from "@/components/icons";

export default function IconsSection() {
  return (
    <section className="bg-[#141a1f]">
      <ul className="flex flex-wrap justify-evenly gap-2 py-12 sm:py-20 text-center">
        <li className="flex flex-col items-center text-slate-200">
          <PadIcon />
          <h6 className="mt-4 text-lg font-bold ">Caucho antideslizante</h6>
          <p className="mt-2 text-slate-400">Comodidad óptima</p>
        </li>
        <li className="flex flex-col items-center text-slate-200">
          <MiraIcon className="text-center" />
          <h6 className="mt-4 text-lg font-bold text-slate-200">Hecho para precision</h6>
          <p className="mt-2 text-slate-400">Ergonomía excepcional</p>
        </li>
        <li className="flex flex-col items-center text-slate-200">
          <LineIcon />
          <h6 className="mt-4 text-lg font-bold">Mejor Deslizamiento</h6>
          <p className="mt-2 text-slate-400">Precisión insuperable</p>
        </li>
        <li className="flex flex-col items-center text-slate-200">
          <PadCheckIcon />
          <h6 className="mt-4 text-lg font-bold">Mayor durabilidad</h6>
          <p className="mt-2 text-slate-400">Construcción sólida</p>
        </li>
      </ul>
    </section>
  );
}
