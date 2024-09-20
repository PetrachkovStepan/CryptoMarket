import { coinInterface } from "utils/types/coinType";

import PopularLItem from "./PopularItem";

function PopularList({ items }: { items: coinInterface[] | undefined }) {
  return (
    <div className="m-x-2 flex flex-row items-center">
      {items?.map((item) => <PopularLItem key={item.id} item={item} />)}
    </div>
  );
}

export default PopularList;
