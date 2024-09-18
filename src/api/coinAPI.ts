import axios from "axios";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RANK } from "../constants/sortConst";
import { coinInterface, coinListInterface } from "../utils/types/coinType";
import {
  DAY,
  DAY_SIZE,
  HOUR_1,
  HOUR_1_SIZE,
  HOUR_12,
  HOUR_12_SIZE,
} from "../constants/intervalsAPI";
import { coinHistoryListInterface } from "../utils/types/historyType";

const URL = "https://api.coincap.io/v2/assets";
export const cryptoAPI = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    fetchAllCoins: build.query<coinListInterface, string>({
      query: () => ({
        url: "",
        params: {},
      }),
    }),
    fetchSingleCoin: build.query<{data: coinInterface}, string | undefined>({
      query: (id: string|undefined) => ({
        url: `/${id}`,
      }),
    }),
    fetchCoinHistory: build.query<coinHistoryListInterface, { id: string | undefined; interval: string }>({
      query: ({ id, interval }) => ({
        url: `/${id}/history?interval=${interval}`,
        params: {
        },
      }),
    }),
  }),
});

export const getCoinList = async (param: string) => {
  const resp = await axios.get(URL);
  switch (param) {
    case "priceUsd": {
      return sortCoins(resp.data, param);
    }
    case "changePercent24Hr": {
      return sortCoins(resp.data, param);
    }
    case "marketCapUsd": {
      return sortCoins(resp.data, param);
    }
    case "rank": {
      return sortCoins(resp.data, param);
    }
    default: {
      break;
    }
  }
};

export const getCoinHistory = async (id: string, interval: string) => {
  let timeSize = "";
  switch (interval) {
    case DAY: {
      timeSize = DAY_SIZE;
      break;
    }
    case HOUR_1: {
      timeSize = HOUR_1_SIZE;
      break;
    }
    case HOUR_12: {
      timeSize = HOUR_12_SIZE;
      break;
    }
    default: {
      break;
    }
  }

  const resp = await axios.get(
    URL + "/" + id + "/history?interval=" + interval,
  );
  return resp.data.data.slice(
    resp.data.data.length - Number(timeSize) - 1,
    resp.data.data.length - 1,
  );
};

export const getOneCoin = async (id: string) => {
  const resp = await axios.get(URL + "/" + id);
  return resp.data;
};

const sortCoins = (
  list: { data: coinInterface[] },
  param: "priceUsd" | "changePercent24Hr" | "marketCapUsd" | "rank",
) => {
  const res = list.data.sort((a: coinInterface, b: coinInterface) => {
    if (param == RANK) {
      return Number(a[param]) > Number(b[param]) ? 1 : -1;
    } else {
      return Number(a[param]) < Number(b[param]) ? 1 : -1;
    }
  });
  return res;
};
