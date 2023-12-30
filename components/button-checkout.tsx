import { Button, Link } from "@nextui-org/react";
import { useState } from "react";
function ButtonCheckout({
  buy_now_link,
  in_stock
}: {
  buy_now_link: string;
  in_stock: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex flex-wrap w-48">
      <Button
        as={Link}
        isLoading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        href={buy_now_link}
        isDisabled={!in_stock}
        color={"primary"}
        variant={"solid"}
        className="h-12 w-48 text-lg"
      >
        Comprar ahora
      </Button>
      {in_stock ? null : (
        <small className="m-auto text-red-500 font-bold">Sin Stock</small>
      )}
    </div>
  );
}

export default ButtonCheckout;
