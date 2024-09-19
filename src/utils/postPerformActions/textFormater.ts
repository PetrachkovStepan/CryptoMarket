import { TABLE_VALUE_RANGE } from "../../constants/intervalsAPI";

const BILLION = 1000000000;
const MILLION = 1000000;
const THOUSAND = 1000;

export const formatValue = (item: number) => {
  let text = "";
  if (item / BILLION > 1) {
    text += (Number(item.toFixed(2)) / BILLION).toString() + " b";
    return text;
  }
  if (item / MILLION > 1) {
    text += (Number(item.toFixed(2)) / MILLION).toString() + " m";
    return text;
  }
  if (item / THOUSAND > 1) {
    text += (Number(item.toFixed(2)) / THOUSAND).toString() + " k";
    return text;
  }
  return item.toFixed(TABLE_VALUE_RANGE).toString();
};
