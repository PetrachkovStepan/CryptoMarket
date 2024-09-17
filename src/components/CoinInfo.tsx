import CoinInfoTag from "./CoinInfoTag";
import btc from "../assets/btc.png";
import Button from "./Button";
import { useEffect, useState } from "react";

import { useParams } from "react-router";

import Modal from "./Modal";
import AddModal from "./AddModal";
import { getOneCoin } from "../api/coinAPI";

function CoinInfo() {
  const coinId = useParams();
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    getCoinInfo();
  });
  const getCoinInfo = async () => {
    if (coinId.id != undefined) {
      const resp = await getOneCoin(coinId.id);
      console.log(resp);
    }
  };

  const add = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setModalActive(true);
  };

  return (
    <div className="m-14 flex w-[80%] flex-col items-start justify-around rounded-[5px] border-[2px] border-dark-theme-ligth-blue p-5 lg:w-[25%]">
      <div className="flex w-[70%] max-w-[190px] flex-row items-center justify-between">
        <img src={btc} className="h-[40px] w-[40px]" />
        <h1 className="m-1 text-[28px] font-medium text-white">{"Bitcoin"}</h1>
        <h2 className="m-1 text-[20px] text-dark-theme-text">{"BTC"}</h2>
      </div>
      <div className="m-1 text-[32px] font-bold text-white">${"60000"}</div>
      <CoinInfoTag propName={"Rank"} propValue={"1"}></CoinInfoTag>
      <CoinInfoTag propName={"Supply"} propValue={"1"}></CoinInfoTag>
      <CoinInfoTag propName={"Max. Supply"} propValue={"1"}></CoinInfoTag>
      <CoinInfoTag propName={"Market cap"} propValue={"1"}></CoinInfoTag>
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
