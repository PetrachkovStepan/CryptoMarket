import { cva, VariantProps } from "class-variance-authority";
import cn from "utils/cn";
import { HTMLAttributes, ReactNode } from "react";

export interface TextProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  children: ReactNode;
}

export default function Text({
  className,
  variant,
  size,
  children,
  ...props
}: TextProps) {
  return (
    <span className={cn(textVariants({ variant, className, size }))} {...props}>
      {children}
    </span>
  );
}
const textVariants = cva("", {
  variants: {
    variant: {
      normal: " text-white",
      priceUp: " text-green-text",
      priceDown: " text-red-text",
      dark: " text-dark-theme-text",
      blue: " text-blue-600",
    },
    size:{
        normal: "font-semibold text-[14px]",
        middle: " font-bold text-[16px]",
        big: " font-bold text-[22px]"
    }
  },
  defaultVariants: {
    variant: "normal",
  },
});
