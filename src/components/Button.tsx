import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../utils/cn";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export default function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva(
  "flex flex-row items-center",
  {
    variants: {
      variant: {
        primary:
          "rounded-[5px] border-[2px] border-dark-theme-ligth-blue text-dark-theme-text hover:bg-dark-theme-ligth-blue",
        secondary:
          "rounded-[5px] border-[2px] border-dark-theme-ligth-blue text-dark-theme-text hover:bg-dark-theme-middle-blue",
        blueButton: "rounded-[5px] border-[2px] border-none bg-main-blue text-white hover:bg-ligth-blue",
        searchButton: "absolute m-2 opacity-[50%]"
      },
      size: {
        neutral: "",
        sm: "px-3 py-1 text-[14px] max-h-[30px]",
        md: "px-5 py-1  text-[16px] max-h-[30px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
