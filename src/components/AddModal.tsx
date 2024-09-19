import { useState } from "react";
import { TABLE_VALUE_RANGE } from "../constants/intervalsAPI";
import { useAppDispatch } from "../hooks/redux";
import { briefcaseSlice } from "../store/reducers/briefcaseReducer";
import { coinBriefcaseInterface, coinInterface } from "../utils/types/coinType";
import Button from "./Interactive/Button";
import Input from "./Interactive/Input";

function AddModal(props: { item: coinInterface }) {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(0);
  const addCoin = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    if (count > 0) {
      const addItem: coinBriefcaseInterface = {
        id: props.item.id,
        count: count,
        symbol: props.item.symbol,
        name: props.item.name,
        priceUsd: props.item.priceUsd,
        changePercent24Hr: props.item.changePercent24Hr,
      };
      dispatch(briefcaseSlice.actions.addBriefcaseItem([addItem]));
      console.log("Coin added");
    }
  };
  return (
    <div className="m-10 flex h-[100%] flex-col">
      <div className="flex w-[100%] flex-row justify-between">
        <div className="flex flex-row text-[14px] text-white">
          {props.item.symbol}
        </div>
        <div className="text-[14px] text-white">
          $ {Number(props.item.priceUsd).toFixed(TABLE_VALUE_RANGE)}
        </div>
        <div className="text-[14px] text-green-text">
          {Number(props.item.changePercent24Hr).toFixed(TABLE_VALUE_RANGE)} %
        </div>
      </div>

      <div className="my-5 flex w-[100%] flex-row items-center justify-start gap-3">
        <Input
          variant={"secondary"}
          placeholder="count"
          type="number"
          onChange={(e)=>setCount(Number(e.target.value))}
          onClick={(e) => e.stopPropagation()}
        />
        <Button variant={"blueButton"} size={"sm"} onClick={addCoin}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default AddModal;
