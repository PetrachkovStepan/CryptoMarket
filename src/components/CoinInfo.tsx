import { useState } from "react";

import { useParams } from "react-router";

import Modal from "./Interactive/Modal";
import Button from "./Interactive/Button";
import AddModal from "./AddModal";
import CoinInfoTag from "./CoinInfoTag";
import { cryptoAPI } from "../api/coinAPI";
import LoaderError from "./LoaderError";
import { formatValue } from "../utils/postPerformActions/textFormater";

function CoinInfo() {
  const coinId = useParams();
  const [modalActive, setModalActive] = useState(false);
  const {
    data: coin,
    error,
    isLoading,
  } = cryptoAPI.useFetchSingleCoinQuery(coinId.id);

  const add = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setModalActive(true);
  };

  return (
    <div className="m-14 flex w-[80%] flex-col items-start justify-between overflow-hidden rounded-[5px] border-[2px] border-dark-theme-ligth-blue p-5 lg:w-[25%]">
      {isLoading && <LoaderError item="Loading..." />}
      {error && <LoaderError item="Ooops, something is wrong!" />}
      {coin && (
        <>
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
            ${formatValue(Number(coin?.data.priceUsd))}
          </div>
          <CoinInfoTag
            propName={"Rank"}
            propValue={coin?.data.rank}
          ></CoinInfoTag>
          <CoinInfoTag
            propName={"Supply"}
            propValue={formatValue(Number(coin?.data.supply))}
          ></CoinInfoTag>
          <CoinInfoTag
            propName={"Max. Supply"}
            propValue={formatValue(Number(coin?.data.maxSupply))}
          ></CoinInfoTag>
          <CoinInfoTag
            propName={"Market cap"}
            propValue={formatValue(Number(coin?.data.marketCapUsd))}
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
              <AddModal item={coin.data} />
            </Modal>
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default CoinInfo;
