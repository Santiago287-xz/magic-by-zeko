import { Input, Spinner, Button, Textarea } from "@nextui-org/react";
import React, { useState, FormEvent } from "react";

export default function MailForm({
  showAllInputs,
}: {
  showAllInputs: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const target = event.nativeEvent.target as HTMLFormElement;
    let user;
    setIsLoading(true);
    if (target instanceof HTMLFormElement) {
      user = {
        email: (target[0] as HTMLInputElement).value,
        name: (target[1] as HTMLInputElement).value,
        text: (target[2] as HTMLInputElement).value,
      };
    }

    const response = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(user),
    });
    const data = await response.json();
    setIsLoading(false);
    setIsSubscribed(true);
  }

  return (
    <form
      className="flex flex-col items-center gap-4 md:gap-8 justify-center py-16 bg-white dark:bg-transparent p-4"
      onSubmit={onSubmit}
    >
      <h1 className="text-lg md:text-xl lg:text-4xl text-center tracking-wide text-foreground-800 ">
        Suscribite a nuestro newsletter
      </h1>
      <p className="uppercase text-center tracking-[0.16em] text-foreground-700 lg:text-xs">
        ¿Quieres recibir nuestras promociones? ¡Suscríbete!
      </p>
      <section className="flex flex-wrap justify-center gap-2 w-full sm:w-4/5 lg:w-auto">
        <div className="flex flex-wrap gap-4 w-full">
          <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">            
            <Input
                name="email"
                label="Email"
                placeholder="Ingrese su email"
                className="w-full"
              />
            <div className="w-full h-auto flex flex-wrap justify-end content-center"> 
              <Button className="w-full md:w-2/5 px-8 bg-transparent hover:bg-foreground-100 border-2 transition">
                {isLoading ? (
                  <Spinner />
                ) : isSubscribed ? (
                  "!Suscrito!"
                ) : (
                  "Suscribirse"
                )}
              </Button>
              </div>

              {showAllInputs && (
                <div className="flex flex-wrap gap-4 w-full">
                <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
                  <Input
                    name="name"
                    label="Nombre completo"
                    placeholder="Ingrese su nombre"
                    className="w-full"
                  />

                  <Textarea
                    name="question"
                    label="Pregunta"
                    placeholder="Ingrese pregunta"
                    className="w-full"
                  />
                </div>
                </div>
              )}
          </div>
        </div>
      </section>
    </form>
  );
}
