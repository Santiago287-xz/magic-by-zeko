import { Button, Link } from "@nextui-org/react";
import { useState } from "react";
function ButtonCheckout({
  buy_now_link,
  inStock
}: {
  buy_now_link: string;
  inStock: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex flex-wrap w-48">
      <Button
        as={Link}
        isLoading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        href={buy_now_link}
        isDisabled={!inStock}
        color={"primary"}
        variant={"solid"}
        className="h-12 w-48 text-lg"
      >
        Comprar ahora
      </Button>
      {inStock ? null : (
        <small className="m-auto text-red-500 font-bold">Sin Stock</small>
      )}
    </div>
  );
}

export default ButtonCheckout;
