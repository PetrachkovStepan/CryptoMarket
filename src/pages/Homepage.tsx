import { useState } from "react";

import { cryptoAPI } from "api/coinAPI";
import Pagination from "components/Pagination";
import Select from "components/Interactive/Select";
import TableList from "components/Lists/TableList/TableList";
import { sortCoinList } from "utils/postPerformActions/sortFunctions";
import {
  CHANGE_PERCENT_24HR,
  MARKET_CAP_USD,
  PRICE_USD,
  RANK,
} from "../constants/sortConst";
import LoaderError from "../components/LoaderError";

function Homepage() {
  const [sortParam, setSortParam] = useState<
    "rank" | "priceUsd" | "changePercent24Hr" | "marketCapUsd"
  >(RANK);
  const {
    data: coinList,
    error,
    isLoading,
  } = cryptoAPI.useFetchAllCoinsQuery("");

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
            onChange={(e) => {
              switch (e.target.value) {
                case RANK: {
                  setSortParam(e.target.value);
                  break;
                }
                case PRICE_USD: {
                  setSortParam(e.target.value);
                  break;
                }
                case CHANGE_PERCENT_24HR: {
                  setSortParam(e.target.value);
                  break;
                }
                case MARKET_CAP_USD: {
                  setSortParam(e.target.value);
                  break;
                }
                default: {
                  setSortParam("rank");
                }
              }
            }}
          >
            <option value={RANK}>Rank</option>
            <option value={PRICE_USD}>Price</option>
            <option value={CHANGE_PERCENT_24HR}>24h change</option>
            <option value={MARKET_CAP_USD}>Market cap</option>
          </Select>
        </div>
      </div>
      {isLoading && <LoaderError item="Loading..." />}
      {error && <LoaderError item="Ooops, something is wrong!" />}
      {coinList && (
        <TableList items={sortCoinList(coinList?.data, sortParam)} />
      )}
      <Pagination />
    </div>
  );
}

export default Homepage;
