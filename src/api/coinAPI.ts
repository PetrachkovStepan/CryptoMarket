import axios from "axios";
import { coinInterface } from "../utils/types/coinType";
import {
  DAY,
  DAY_SIZE,
  HOUR_1,
  HOUR_12,
  HOUR_12_SIZE,
  HOUR_1_SIZE,
} from "../constants/intervalsAPI";
import { RANK } from "../constants/sortConst";

const URL = "https://api.coincap.io/v2/";

export const getCoinList = async (param: string) => {
  const resp = await axios.get(URL + "assets");
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
  let timeSize = 0;
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
  console.log(timeSize);

  const resp = await axios.get(
    URL + "assets/" + id + "/history?interval=" + interval,
  );
  return resp.data.data.slice(
    resp.data.data.length - timeSize - 1,
    resp.data.data.length - 1,
  );
};

export const getOneCoin = async (id: string) => {
  const resp = await axios.get(URL + "assets/" + id);
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
