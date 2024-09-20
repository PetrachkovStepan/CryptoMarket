import { RANK } from "constants/sortConst";
import { coinInterface } from "utils/types/coinType";

export const sortCoinList = (
  list: coinInterface[] | undefined,
  param: "priceUsd" | "changePercent24Hr" | "marketCapUsd" | "rank",
) => {
  if (list == undefined) {
    return [];
  }
  const res = [...list].sort((a: coinInterface, b: coinInterface) => {
    if (param == RANK) {
      return Number(a[param]) > Number(b[param]) ? 1 : -1;
    } else {
      return Number(a[param]) < Number(b[param]) ? 1 : -1;
    }
  });
  return res;
};
