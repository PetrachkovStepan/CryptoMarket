import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { coinHistoryListInterface } from "utils/types/historyType";
import { coinInterface, coinListInterface } from "utils/types/coinType";

const URL = "https://api.coincap.io/v2/assets";
export const cryptoAPI = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    fetchAllCoins: build.query<coinListInterface, number>({
      query: (offset) => ({
        url: "",
        params: {
          offset: offset,
        },
      }),
    }),
    fetchSingleCoin: build.query<{ data: coinInterface }, string | undefined>({
      query: (id: string | undefined) => ({
        url: `/${id}`,
      }),
    }),
    fetchCoinHistory: build.query<
      coinHistoryListInterface,
      { id: string | undefined; interval: string }
    >({
      query: ({ id, interval }) => ({
        url: `/${id}/history?interval=${interval}`,
        params: {},
      }),
    }),
  }),
});
