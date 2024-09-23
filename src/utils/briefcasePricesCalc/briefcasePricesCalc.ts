import { coinBriefcaseInterface } from "utils/types/coinType";

export const calculateBriefcaseValueChange = (
  list: coinBriefcaseInterface[],
  curList: { priceUsd: number; id: string }[],
) => {
  const prev = sortList(list);
  const curr = sortList(curList);
  let currentValue = 0;
  let prevValue = 0;
  let valueChange = 0;
  for (let i = 0; i < prev.length; i++) {
    console.log(
      curr[i].priceUsd + " -- " + prev[i].priceUsd + " count: " + list[i].count,
    );
    currentValue += list[i].count * curr[i].priceUsd;
    prevValue += list[i].count * prev[i].priceUsd;
    valueChange += (curr[i].priceUsd - prev[i].priceUsd)
  }
  console.log(currentValue + " - " + valueChange + " - " + (valueChange/prevValue) * 100);
  
  return {
    value: currentValue,
    valueChange: valueChange,
    percent: (valueChange/prevValue) * 100,
  };
};
const sortList = (list: { id: string; priceUsd: number }[]) => {
  return [...list].sort((a, b) => {
    return a.id.toLowerCase() > b.id.toLowerCase() ? 1 : -1;
  });
};
