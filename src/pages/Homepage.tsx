import { useEffect, useState } from "react";
import TableList from "../components/Lists/TableList/TableList";
import Pagination from "../components/Pagination";
import Select from "../components/Interactive/Select";
import { getCoinList } from "../api/coinAPI";
import {
  CHANGE_PERCENT_24HR,
  MARKET_CAP_USD,
  PRICE_USD,
  RANK,
} from "../constants/sortConst";
import { coinInterface } from "../utils/types/coinType";

function Homepage() {
  const [sortParam, setSortParam] = useState<string>(RANK);

  const [coinList, setCoinList] = useState<coinInterface[]>([]);

  useEffect(() => {
    getAllCoins();
  }, [sortParam]);
  const getAllCoins = async () => {
    const resp = await getCoinList(sortParam);
    if (resp != undefined) {
      setCoinList(resp);
    }
  };
  return (
    <div className="flex w-[100%] flex-col items-center justify-center">
      <div className="my-10 flex w-[80%] flex-col items-center justify-between gap-5 lg:flex-row">
        <header className="text-[26px] font-medium text-white">
          Today's Cryptocurrency Prices by Market Cap
        </header>
        <div className="flex flex-row items-center">
          <h2 className="mx-3 text-[16px] font-medium text-white">Sort by:</h2>
          <Select
            variant={"primary"}
            onChange={(e) => setSortParam(e.target.value)}
          >
            <option value={RANK}>Rank</option>
            <option value={PRICE_USD}>Price</option>
            <option value={CHANGE_PERCENT_24HR}>24h change</option>
            <option value={MARKET_CAP_USD}>Market cap</option>
          </Select>
        </div>
      </div>
      <TableList items={coinList} />
      <Pagination />
    </div>
  );
}

export default Homepage;
