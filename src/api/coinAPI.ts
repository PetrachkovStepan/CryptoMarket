import axios from "axios";
import { coinInterface } from "../utils/types/coinType";

const URL = "https://api.coincap.io/v2/";

export const getCoinList = async (
  param: "priceUsd" | "changePercent24Hr" | "marketCapUsd" | "rank",
) => {
  const resp = await axios.get(URL + "assets");
  return sortCoins(resp.data, param);
};

export const getCoinHistory = async (
  id: string,
  interval: "h1" | "h12" | "d1",
) => {
  const resp = await axios.get(
    URL + "assets/" + id + "/history?interval=" + interval,
  );
  return resp.data;
};

export const getOneCoin = async (id: string) => {
  const resp = await axios.get(URL + "assets/" + id);
  return resp.data;
};

const sortCoins = (
  list: { data: coinInterface[] },
  param: "priceUsd" | "changePercent24Hr" | "marketCapUsd" | "rank",
) => {
  const res = list.data.sort((a: coinInterface, b: coinInterface) =>
    a[param] > b[param] ? 1 : -1,
  );
  return res;
};
