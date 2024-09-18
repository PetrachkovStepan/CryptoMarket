import { ReactNode } from "react";
interface tableCurProps{
    children:ReactNode
}
function TableCurrency({children}:tableCurProps) {
  return <div className="flex h-[60px] w-[100%] items-center justify-center">{children}</div>;
}

export default TableCurrency;
