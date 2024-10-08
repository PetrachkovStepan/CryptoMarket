import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";

import { cva, VariantProps } from "class-variance-authority";

import cn from "utils/cn";

export interface ModalProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  children: ReactNode;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({
  children,
  className,
  variant,
  size,
  active,
  setActive,
  ...props
}: ModalProps) {
  const closeModal = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setActive(false);
  };
  return (
    <dialog
      className={
        active
          ? "fixed left-0 top-0 z-50 flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-black bg-opacity-[40%]"
          : "hidden"
      }
      onClick={(e) => closeModal(e)}
    >
      <main
        className={cn(modalVariants({ variant, size, className }))}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </main>
    </dialog>
  );
}

const modalVariants = cva(
  "flex flex-col justify-center rounded-[5px] border-[2px] border-dark-theme-ligth-blue bg-dark-theme-main-blue",
  {
    variants: {
      variant: {
        briefcase: "min-w-[300px] w-[50%] ",
        add: "max-h-[200px] max-w-[350px]",
      },
      size: {
        neutral: "",
      },
    },
    defaultVariants: {
      variant: "briefcase",
      size: "neutral",
    },
  },
);
