import { TABLE_VALUE_RANGE } from "constants/intervalsAPI";

const BILLION = 1000000000;
const MILLION = 1000000;
const THOUSAND = 1000;

export const formatValue = (item: number) => {
  let text = "";
  if (item < 0) {
    item *= -1;
  }
  if (item / BILLION > 1) {
    text +=
      (Number(item) / BILLION).toFixed(TABLE_VALUE_RANGE).toString() + "b";
    return text;
  }
  if (item / MILLION > 1) {
    text +=
      (Number(item) / MILLION).toFixed(TABLE_VALUE_RANGE).toString() + "m";
    return text;
  }
  if (item / THOUSAND > 1) {
    text +=
      (Number(item) / THOUSAND).toFixed(TABLE_VALUE_RANGE).toString() + "k";
    return text;
  }
  if (item <= 10 / BILLION) {
    text +=
      (Number(item) * BILLION).toFixed(TABLE_VALUE_RANGE).toString() + "e-9";
    return text;
  }
  if (item <= 10 / MILLION) {
    text +=
      (Number(item) * THOUSAND).toFixed(TABLE_VALUE_RANGE).toString() + "e-6";
    return text;
  }
  if (item <= 10 / THOUSAND) {
    text +=
      (Number(item) * THOUSAND).toFixed(TABLE_VALUE_RANGE).toString() + "e-3";
    return text;
  }
  return item.toFixed(TABLE_VALUE_RANGE).toString();
};
