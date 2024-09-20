import { coinBriefcaseInterface } from "../coinType";

export interface briefcaseAction {
  type: string;
  payload: coinBriefcaseInterface[];
}
export interface briefcaseState {
  items: coinBriefcaseInterface[];
}
export interface currentBriefcaseAction {
  type: string;
  payload: { priceUsd: number; id: string };
}
export interface currentBriefcaseState {
  items: { priceUsd: number; id: string }[];
}
