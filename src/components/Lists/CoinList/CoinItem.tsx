import { useNavigate } from "react-router";

import Input from "../../Interactive/Input";
import Button from "../../Interactive/Button";
import { coinBriefcaseInterface } from "../../../utils/types/coinType";
import { useAppDispatch } from "../../../hooks/redux";
import { briefcaseSlice } from "../../../store/reducers/briefcaseReducer";
import { useState } from "react";

function CoinItem(props: { item: coinBriefcaseInterface }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(0);
  const navigateToCoinpage = () => {
    navigate("coin/" + props.item.id.toString());
  };

  const deleteCoin = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    if (count > 0) {
      const deleteItem: coinBriefcaseInterface = {
        id: props.item.id,
        count: props.item.count - count,
        symbol: props.item.symbol,
        name: props.item.name,
        priceUsd: props.item.priceUsd,
        changePercent24Hr: props.item.changePercent24Hr,
      };
      dispatch(briefcaseSlice.actions.deleteBriefcaseItem([deleteItem]));
      console.log("Coin deleted");
    }
  };
  return (
    <div
      className="flex w-[100%] flex-col items-center justify-between border-t-[1px] border-dark-theme-ligth-blue p-2 px-[10%] hover:bg-dark-theme-middle-blue lg:flex-row"
      onClick={navigateToCoinpage}
    >
      <div className="flex w-[100%] flex-row justify-between">
        <div className="flex flex-row text-[14px] text-white">
          {props.item.symbol}
          <pre className="text-[14px] text-dark-theme-text">
            {" "}
            x{props.item.count}
          </pre>
        </div>
        <div className="text-[14px] text-white">$ {Number(props.item.priceUsd).toFixed(2)}</div>
      </div>

      <div className="m-2 flex w-[100%] flex-row items-center justify-start gap-3 lg:m-0 lg:justify-end">
        <Input
          variant={"secondary"}
          placeholder="count"
          type="number"
          onChange={(e) => setCount(Number(e.target.value))}
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
