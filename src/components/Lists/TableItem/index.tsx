import { useNavigate } from "react-router";

import Button from "../../Button";
import btc from "../../../assets/btc.png";

function TableItem() {
  const navigate = useNavigate();
  const navigateToCoinpage = () => {
    navigate("coin");
  };

  const add = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    console.log("a");
  };
  return (
    <div
      className="flex h-[60px] w-[100%] flex-row items-center justify-between border-t-[1px] border-dark-theme-ligth-blue px-[10%] hover:bg-dark-theme-middle-blue"
      onClick={navigateToCoinpage}
    >
      <div className="text-[14px] text-white">{"BTC"}</div>
      <img src={btc} className="h-[20px] w-[20px]" />
      <div className="text-[14px] text-white">$ {"0,00"}</div>
      <div className="text-[14px] text-white">$ {"0000000"}</div>
      <div className="text-[14px] text-green-text">{"2.18"} %</div>
      <Button variant={"primary"} size={"sm"} onClick={add}>
        Add
      </Button>
    </div>
  );
}

export default TableItem;
