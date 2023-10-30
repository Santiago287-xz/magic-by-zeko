import React from "react";
import { Button } from "@nextui-org/react";
interface SwatchProps {
  active?: boolean;
  children?: any;
  variant?: "size" | "color" | string;
  color?: string;
  label?: string | null;
  inStock: boolean;
}

const Swatch: React.FC<
  Omit<React.ButtonHTMLAttributes<any>, "variant"> & SwatchProps
> = ({
  active,
  color = "",
  label = null,
  variant = "size",
  inStock,
  ...props
}) => {
  variant = variant?.toLowerCase();

  if (label) {
    label = label?.toLowerCase();
  }
  return (
    <>
      <Button
        className={"rounded-full flex items-center justify-center " +
        (inStock ? "" : "border-zinc-700 border-3")}
        role="option"
        aria-selected={active}
        isDisabled={!inStock}
        aria-label={variant && label ? `${variant} ${label}` : "Variant Swatch"}
        {...(label && { title: label })}
        style={{ backgroundColor: color }}
        {...props}
      >
        {color && active && inStock && (
          <span>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </span>
        )}
      </Button>      
    </>
  );
};

export default React.memo(Swatch);
