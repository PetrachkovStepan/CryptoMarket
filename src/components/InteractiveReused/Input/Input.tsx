import { InputHTMLAttributes } from "react";

import { cva, VariantProps } from "class-variance-authority";

import cn from "utils/cn";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export default function Input({
  className,
  variant,
  placeholder,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(inputVariants({ variant, className }))}
      placeholder={placeholder}
      {...props}
    />
  );
}

const inputVariants = cva(
  "flex h-[35px] flex-row items-center rounded-[5px] border-[2px]",
  {
    variants: {
      variant: {
        primary:
          "border-dark-theme-ligth-blue bg-dark-theme-middle-blue p-3 text-white hover:bg-dark-theme-ligth-blue",
        secondary:
          "w-[40%] border-dark-theme-ligth-blue bg-dark-theme-middle-blue p-3 text-white hover:bg-dark-theme-ligth-blue",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
