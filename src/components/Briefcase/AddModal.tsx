import { useState } from "react";
import { useAppDispatch } from "hooks/redux";
import { briefcaseSlice } from "store/reducers/briefcaseReducer";
import { coinBriefcaseInterface, coinInterface } from "utils/types/coinType";
import Button from "components/InteractiveReused/Button/Button";
import Input from "components/InteractiveReused/Input/Input";
import { formatValue } from "utils/postPerformActions/textFormater";
import Text from "components/InteractiveReused/Text/Text";

function AddModal(props: { item: coinInterface }) {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<string>("");
  const addCoin = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    if (Number(count) > 0) {
      const addItem: coinBriefcaseInterface = {
        id: props.item.id,
        count: Number(count),
        symbol: props.item.symbol,
        name: props.item.name,
        priceUsd: props.item.priceUsd,
        changePercent24Hr: props.item.changePercent24Hr,
      };
      dispatch(briefcaseSlice.actions.addBriefcaseItem([addItem]));
      setCount("");
    }
  };
  return (
    <div className="m-10 flex h-[100%] flex-col">
      <div className="flex w-[100%] flex-row justify-between">
        <Text variant={"normal"} size={"normal"}>
          {props.item.symbol}
        </Text>
        <Text variant={"normal"} size={"normal"}>
          $ {formatValue(Number(props.item.priceUsd))}
        </Text>
        <Text
          variant={props.item.changePercent24Hr > 0 ? "priceUp" : "priceDown"}
          size={"normal"}
        >
          {props.item.changePercent24Hr > 0 ? "+" : "-"}
          {formatValue(Number(props.item.changePercent24Hr))} %
        </Text>
      </div>
      <div className="my-5 flex w-[100%] flex-row items-center justify-start gap-3">
        <Input
          variant={"secondary"}
          placeholder="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />
        <Button variant={"blueButton"} size={"sm"} onClick={addCoin}>
          Buy
        </Button>
      </div>
    </div>
  );
}

export default AddModal;
