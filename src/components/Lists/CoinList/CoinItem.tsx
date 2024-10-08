import { useEffect, useState } from "react";

import { useNavigate } from "react-router";

import Text from "components/InteractiveReused/Text/Text";
import { cryptoAPI } from "api/coinAPI";
import { useAppDispatch } from "hooks/redux";
import Input from "components/InteractiveReused/Input/Input";
import Button from "components/InteractiveReused/Button/Button";
import { coinBriefcaseInterface } from "utils/types/coinType";
import { briefcaseSlice } from "store/reducers/briefcaseReducer";
import { formatValue } from "utils/postPerformActions/textFormater";
import { currentBriefcaseSlice } from "store/reducers/currentBriefcaseReducer";

function CoinItem(props: { item: coinBriefcaseInterface }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<string>("");
  const navigateToCoinpage = () => {
    navigate("coin/" + props.item.id.toString());
  };
  const { data: coin } = cryptoAPI.useFetchSingleCoinQuery(props.item.id);

  useEffect(() => {
    if (coin != undefined) {
      const addItem = {
        priceUsd: coin.data.priceUsd,
        id: props.item.id,
      };
      dispatch(currentBriefcaseSlice.actions.addBriefcaseCurrent(addItem));
    }
  });

  const deleteCoin = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    if (Number(count) > 0) {
      if (props.item.count <= Number(count)) {
        dispatch(
          currentBriefcaseSlice.actions.deleteBriefcaseCurrent({
            priceUsd: 0,
            id: props.item.id,
          }),
        );
      }
      const deleteItem: coinBriefcaseInterface = {
        id: props.item.id,
        count: props.item.count - Number(count),
        symbol: props.item.symbol,
        name: props.item.name,
        priceUsd: props.item.priceUsd,
        changePercent24Hr: props.item.changePercent24Hr,
      };
      dispatch(briefcaseSlice.actions.deleteBriefcaseItem([deleteItem]));
      setCount("");
    }
  };
  return (
    <div
      className="flex w-[100%] flex-col items-center justify-between border-t-[1px] border-dark-theme-ligth-blue p-2 px-[10%] hover:bg-dark-theme-middle-blue lg:flex-row"
      onClick={navigateToCoinpage}
    >
      <div className="flex w-[100%] flex-row justify-between">
        <div className="flex flex-row text-[14px] text-white">
          <Text variant={"dark"} size={"normal"}>
            {props.item.symbol}
          </Text>
          <Text variant={"dark"} size={"normal"}>
            <pre>x{formatValue(Number(props.item.count))}</pre>
          </Text>
        </div>
        <Text variant={"normal"} size={"normal"}>
          $ {formatValue(Number(props.item.priceUsd))}
        </Text>
      </div>

      <div className="m-2 flex w-[100%] flex-row items-center justify-start gap-3 lg:m-0 lg:justify-end">
        <Input
          variant={"secondary"}
          placeholder="count"
          value={count}
          id="deleteInput"
          onChange={(e) => setCount(e.target.value)}
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
