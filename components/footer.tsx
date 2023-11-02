import { Button, Link, Image } from "@nextui-org/react";
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
                  src="https://media.discordapp.net/attachments/1019381524149305426/1165128333432987690/accepted-payments.png?ex=6545b951&is=65334451&hm=846936e1cf7365210d42bd519da506f7febcdca37460bd736830bc9fd75fae6c&="
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
              <p
                className="flex items-center gap-4 justify-start text-slate-200"
              >
                magicbyzeko@gmail.com
              </p>
              <p
                className="flex items-center gap-4 justify-start text-slate-200"
              >
                Envíos a todo Argentina garantizados.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="https://media.discordapp.net/attachments/1116888339967119460/1156796158295949322/MBZ-Blanco.png?ex=651991a0&is=65184020&hm=4fc8bb10c7cf1f23bd482d9c1fe6f935e97ebd813aee613507969f471fa23bc7&=&width=1020&height=379"
          alt="Logo"
          className="rounded-none"
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
            isExternal href={siteConfig.links.webcodebuilders}
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
