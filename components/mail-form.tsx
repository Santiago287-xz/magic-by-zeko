import { Input, Spinner, Button, Textarea } from "@nextui-org/react";
import React, { useState, FormEvent } from "react";

export default function MailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const target = event.nativeEvent.target as HTMLFormElement;
    let user
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
    console.log(data);
    setIsLoading(false);
    setIsSubscribed(true);
  }

  return (
    <form
      className="flex flex-col items-center gap-4 md:gap-8 justify-center py-16 bg-white dark:bg-transparent p-4"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl tracking-wide text-center mb-4">
        No te lo pierdas
      </h2>
      <section className="flex flex-wrap justify-center gap-2 w-full sm:w-4/5 lg:w-auto">
        <div className="flex flex-wrap gap-4 w-full">
          <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
            <Input
              isRequired
              type="email"
              variant="bordered"
              className="w-full"
              label="Email"
              placeholder="Ingrese su email"
            />
            <Input
              isRequired
              type="text"
              variant="bordered"
              className="w-full"
              label="Nombre completo"
              placeholder="Ingrese su nombre"
            />
          </div>
          <Textarea
            isRequired
            label="Pregunta"
            placeholder="Ingrese pregunta"
            className="w-full"
          />
        </div>
        <div className="w-full h-auto flex flex-wrap justify-end content-center">
          <Button
            className="w-full md:w-2/5 px-8 bg-transparent hover:bg-foreground-100 border-2 transition"
            type="submit"
          >
            {isLoading ? (
              <Spinner />
            ) : isSubscribed ? (
              "!Suscrito!"
            ) : (
              "Subscribete"
            )}
          </Button>
        </div>
      </section>
    </form>
  );
}
