import { useNavigate } from "react-router";

import Input from "../Input";
import Button from "../Button";

function CoinItem() {
  const navigate = useNavigate();
  const navigateToCoinpage = () => {
    navigate("coin");
  };

  const deleteCoin = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    console.log("Coin deleted");
  };
  return (
    <div
      className="flex w-[100%] flex-col items-center justify-between border-t-[1px] border-dark-theme-ligth-blue p-2 px-[10%] hover:bg-dark-theme-middle-blue lg:flex-row"
      onClick={navigateToCoinpage}
    >
      <div className="flex w-[100%] flex-row justify-between">
        <div className="flex flex-row text-[14px] text-white">
          {"BTC"}
          <pre className="text-[14px] text-dark-theme-text"> x{200}</pre>
        </div>
        <div className="text-[14px] text-white">$ {"0000000"}</div>
        <div className="text-[14px] text-green-text">{"2.18"} %</div>
      </div>

      <div className="m-2 flex w-[100%] flex-row items-center justify-start gap-3 lg:m-0 lg:justify-end">
        <Input
          variant={"secondary"}
          placeholder="count"
          onClick={(e) => e.stopPropagation()}
        />
        <Button variant={"primary"} size={"sm"} onClick={deleteCoin}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default CoinItem;
