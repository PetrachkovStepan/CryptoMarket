import { formatValue } from "../../../utils/postPerformActions/textFormater";
import { coinInterface } from "../../../utils/types/coinType";
import Text from "../../Text";

function PopularLItem(props: { item: coinInterface }) {
  return (
    <div className="m-2 flex h-full flex-row">
      <pre className="text-[14px] text-dark-theme-text">
        {props.item.symbol.toUpperCase()}:
      </pre>
      <Text variant={"blue"} size={"normal"}>
        <pre>{formatValue(Number(props.item.priceUsd))} %</pre>
      </Text>
    </div>
  );
}

export default PopularLItem;
