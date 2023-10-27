"use client";
import { Button, Link } from "@nextui-org/react";
function ButtonCheckout({ priceId }: { priceId: string }) {
  return (
    <Button
      as={Link}
      href={`/api/quick-buy/${priceId}?quantity=1`}
      color={"primary"}
      variant={"solid"}
      className="h-12 w-32 text-lg"
    >
      Checkout
    </Button>
  );
}

export default ButtonCheckout;
