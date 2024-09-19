import { coinBriefcaseInterface } from "../../../utils/types/coinType";
import CoinItem from "./CoinItem";

function CoinList({ items }: { items: coinBriefcaseInterface[] }) {
  return (
    <div className="mt-5 justify-center">
        {items.map((item) => (
          <CoinItem key={Math.random()} item={item} />
        ))}
    </div>
  );
}

export default CoinList;
