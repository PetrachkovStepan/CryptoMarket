import { useState } from "react";

import { useParams } from "react-router";

import Modal from "./Interactive/Modal";
import Button from "./Interactive/Button";
import AddModal from "./AddModal";
import CoinInfoTag from "./CoinInfoTag";
import { cryptoAPI } from "../api/coinAPI";

function CoinInfo() {
  const coinId = useParams();
  const [modalActive, setModalActive] = useState(false);
  const { data: coin } = cryptoAPI.useFetchSingleCoinQuery(coinId.id);

  const add = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setModalActive(true);
  };

  return (
    <div className="m-14 flex w-[80%] flex-col items-start justify-between overflow-hidden rounded-[5px] border-[2px] border-dark-theme-ligth-blue p-5 lg:w-[25%]">
      <div className="flex w-[70%] max-w-[190px] flex-row items-center justify-between">
        <img
          src={
            "https://assets.coincap.io/assets/icons/" +
            coin?.data.symbol.toLowerCase() +
            "@2x.png"
          }
          className="h-[40px] w-[40px]"
        />
        <h1 className="m-1 text-[28px] font-medium text-white">
          {coin?.data.name}
        </h1>
        <h2 className="m-1 text-[20px] text-dark-theme-text">
          {coin?.data.symbol}
        </h2>
      </div>
      <div className="m-1 text-[32px] font-bold text-white">
        ${Number(coin?.data.priceUsd).toFixed(2)}
      </div>
      <CoinInfoTag propName={"Rank"} propValue={coin?.data.rank}></CoinInfoTag>
      <CoinInfoTag
        propName={"Supply"}
        propValue={Number(coin?.data.supply).toFixed(2)}
      ></CoinInfoTag>
      <CoinInfoTag
        propName={"Max. Supply"}
        propValue={Number(coin?.data.maxSupply).toFixed(2)}
      ></CoinInfoTag>
      <CoinInfoTag
        propName={"Market cap"}
        propValue={Number(coin?.data.marketCapUsd).toFixed(2)}
      ></CoinInfoTag>
      <div className="mt-4 flex w-[100%] items-center justify-center">
        <Button variant={"blueButton"} size={"md"} onClick={add}>
          Add
        </Button>
        <Modal
          active={modalActive}
          setActive={setModalActive}
          variant={"add"}
          size={"neutral"}
        >
          <AddModal />
        </Modal>
      </div>
    </div>
  );
}

export default CoinInfo;
