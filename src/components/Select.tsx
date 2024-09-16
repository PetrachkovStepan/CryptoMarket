import { cva, VariantProps } from "class-variance-authority";
import { SelectHTMLAttributes, ReactNode } from "react";
import cn from "../utils/cn";

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {
  children: ReactNode;
}

function Select({ children, className, variant, ...props }: SelectProps) {
  return (
    <select className={cn(selectVariants({ variant, className }))} {...props}>
      {children}
    </select>
  );
}

export default Select;

const selectVariants = cva(
  "h-[35px] w-[200px] m-x-2 p-1 flex flex-row items-center rounded-[5px] border-[2px]",
  {
    variants: {
      variant: {
        primary:
          "bg-dark-theme-middle-blue border-dark-theme-ligth-blue text-[14px] text-dark-theme-text hover:bg-dark-theme-ligth-blue",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
