import { Link, Image } from "@nextui-org/react";
import MailForm from "@/components/mail-form";
import { TwitterIcon, InstagramIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Footer({ showAllInputs }: { showAllInputs: boolean }) {
  return (
    <>
      <MailForm showAllInputs={showAllInputs} />
      <footer className="w-full flex flex-col items-center pb-6 pt-6 gap-5 bg-[#141a1f]">
        <div className="w-4/5 md:w-8/12">
          <div className="flex flex-col gap-2 items-center lg:flex-row lg:justify-evenly lg:items-start w-full">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <p className="text-slate-400 text-xl">Métodos de Pago</p>
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={siteConfig.images.paymentMethods}
                  alt="Método de Pago"
                  width={320}
                  height={320}
                />
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <p className="text-slate-400 text-xl text-center w-max">
                ¿Tienes alguna pregunta o comentario?
              </p>
              <p className="flex items-center gap-4 justify-start text-slate-200">
                {siteConfig.contact.gmail}
              </p>
              <p className="flex items-center gap-4 justify-start text-slate-200">
                Envíos a todo Argentina garantizados.
              </p>
            </div>
          </div>
        </div>
        <Image
          src={siteConfig.images.principalLogo}
          alt="Logo"
          className="rounded-none scale-150"
          width={225}
          height={255}
        />
        <div className="flex items-center gap-4 mt-4">
          <Link isExternal href={siteConfig.links.twitter}>
            <TwitterIcon className="w-8 h-8 text-white" />
          </Link>
          <Link isExternal href={siteConfig.links.instagram}>
            <InstagramIcon className="w-6 h-8 text-white" />
          </Link>
        </div>
        <div>
          <Link
            isExternal
            href={siteConfig.links.webcodebuilders}
            className="flex items-center gap-1 text-current"
          >
            <span className="text-zinc-200">Powered by</span>
            <p className="text-primary">WebCodeBuilders</p>
          </Link>
        </div>
      </footer>
    </>
  );
}
