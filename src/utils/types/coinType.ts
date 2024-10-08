export interface coinInterface {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: number;
  maxSupply: number;
  marketCapUsd: number;
  volumeUsd24Hr: number;
  priceUsd: number;
  changePercent24Hr: number;
  vwap24Hr: number;
}
export interface coinBriefcaseInterface {
  id: string;
  count: number;
  symbol: string;
  name: string;
  priceUsd: number;
  changePercent24Hr: number;
}
export interface coinListInterface {
  data: coinInterface[];
}
