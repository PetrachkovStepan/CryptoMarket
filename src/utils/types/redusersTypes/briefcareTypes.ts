import { coinBriefcaseInterface } from "../coinType";

export interface briefcaseAction {
  type: string;
  payload: coinBriefcaseInterface[];
}
export interface briefcaseState {
  items: coinBriefcaseInterface[];
}
