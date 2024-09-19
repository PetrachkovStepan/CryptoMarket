import CoinList from "./Lists/CoinList/CoinList";
import { useAppSelector } from "../hooks/redux";
import Text from "./Text";
import { formatValue } from "../utils/postPerformActions/textFormater";
import { useEffect } from "react";
import { calculateBriefcaseValueChange } from "../utils/briefcasePricesCalc/briefcasePricesCalc";

function BriefcaseContent(props: {
  item: { value: number; valueChange: number; percent: number };
}) {
  const briefcase = useAppSelector((state) => state.briefcase);
  const currentBriefcase = useAppSelector((state) => state.currentBriefcase);

  useEffect(() => {
    if (briefcase.items.length == currentBriefcase.items.length) {
      console.log(
        calculateBriefcaseValueChange(briefcase.items, currentBriefcase.items),
      );
    }
  }, [briefcase.items, currentBriefcase.items]);
  return (
    <div className="m-2 flex h-[100%] flex-col justify-between lg:m-10">
      <div className="flex flex-col items-center gap-1 lg:flex-row">
        <Text variant={"normal"} size={"big"}>
          <pre>Total: </pre>
        </Text>
        <Text variant={"normal"} size={"normal"}>
          <pre>{formatValue(Number(props.item.value))} USD </pre>
        </Text>
        <Text
          variant={props.item.valueChange > 0 ? "priceUp" : "priceDown"}
          size={"middle"}
        >
          {props.item.valueChange > 0 ? "+" : "-"}{" "}
          {formatValue(Number(props.item.valueChange))} {"("}
          {formatValue(Number(props.item.percent))}%{")"}
        </Text>
      </div>
      <CoinList items={briefcase.items} />
    </div>
  );
}

export default BriefcaseContent;
