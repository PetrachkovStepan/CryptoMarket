import { TABLE_VALUE_RANGE } from "../../../constants/intervalsAPI";
import { coinInterface } from "../../../utils/types/coinType";

function PopularLItem(props: { item: coinInterface }) {
  return (
    <div className="m-2 flex h-full flex-row">
      <pre className="text-[14px] text-dark-theme-text">
        {props.item.symbol.toUpperCase()}:
      </pre>
      <pre className="text-[14px] text-blue-600">
        {Number(props.item.priceUsd).toFixed(TABLE_VALUE_RANGE)} %
      </pre>
    </div>
  );
}

export default PopularLItem;
