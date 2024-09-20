import { coinBriefcaseInterface } from "utils/types/coinType";

export const calculateBriefcaseValueChange = (
  list: coinBriefcaseInterface[],
  curList: { priceUsd: number; id: string }[],
) => {
  const prev = sortList(list);
  const curr = sortList(curList);
  let prevValue = 0;
  let nextValue = 0;
  for (let i = 0; i < prev.length; i++) {
    nextValue += list[i].count * curr[i].priceUsd;
    prevValue += list[i].count * prev[i].priceUsd;
  }
  return {
    value: nextValue,
    valueChange: prevValue - nextValue,
    percent: ((prevValue - nextValue) / nextValue)*100,
  };
};
const sortList = (list: { id: string; priceUsd: number }[]) => {
  return [...list].sort((a, b) => {
    return a.id.toLowerCase() > b.id.toLowerCase() ? 1 : -1;
  });
};
