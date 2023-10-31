import { Input, Spinner, Button, Textarea } from "@nextui-org/react";
import React, { useState, FormEvent } from "react";

export default function MailForm({ showAllInputs }: { showAllInputs: boolean }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    const user = {
      email,
      name,
      text,
    };

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
      className="flex flex-col items-center gap-4 md:gap-8 justify-center p-4"
      onSubmit={onSubmit}
    >
      <h1 className="text-lg md:text-xl lg:text-4xl text-center tracking-wide text-foreground-800">
        {showAllInputs
          ? "Contactate con Nosotros"
          : "Suscribite a nuestro newsletter"}
      </h1>
      <p className="uppercase text-center tracking-[0.16em] text-foreground-700 lg:text-xs">
        {showAllInputs
          ? "Completa los campos asi nos ponemos en contacto !Te atenderemos!"
          : "¿Quieres recibir nuestras promociones? ¡Suscríbete!"}
      </p>

      {showAllInputs ? (
        <div className="flex flex-wrap gap-2 w-full max-w-lg">
          <div className="flex gap-4 w-full">
            <Input
              isRequired
              type="email"
              variant="faded"
              className="w-full max-w-lg"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              isRequired
              type="text"
              variant="faded"
              className="w-full max-w-lg"
              label="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Textarea
            isRequired
            label="Pregunta"
            variant="faded"
            placeholder="Ingrese pregunta"
            className="w-full max-w-lg"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      ) : (
        <Input
          isRequired
          type="email"
          variant="faded"
          className="w-full max-w-lg"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}

      <div className="flex justify-center">
      <Button className="w-42" type="submit" variant="faded" isLoading={isLoading} disabled={isLoading || isSubscribed}>
      {isSubscribed ? (
          "Enviado !"
        ) : showAllInputs ? (
          "Enviar"
        ) : (
          "Subscribete"
        )}
      </Button>
      </div>
    </form>
  );
}
