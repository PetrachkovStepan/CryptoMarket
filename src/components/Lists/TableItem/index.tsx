import { useNavigate } from "react-router";

import Button from "../../Button";
import btc from "../../../assets/btc.png";
import { useState } from "react";
import Modal from "../../Modal";
import AddModal from "../../AddModal";

function TableItem() {
  const [modalActive, setModalActive] = useState(false);
  const navigate = useNavigate();
  const navigateToCoinpage = () => {
    navigate("coin");
  };

  const add = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setModalActive(true);
  };

  return (
    <div
      className="flex h-[60px] w-[100%] flex-row items-center justify-between border-t-[1px] border-dark-theme-ligth-blue px-[3%] hover:bg-dark-theme-middle-blue lg:px-[10%]"
      onClick={navigateToCoinpage}
    >
      <div className="text-[14px] text-white">{"BTC"}</div>
      <img src={btc} className="h-[20px] w-[20px]" />
      <div className="text-[14px] text-white">$ {"0,00"}</div>
      <div className="text-[14px] text-white">$ {"0000000"}</div>
      <div className="text-[14px] text-green-text">{"2.18"} %</div>
      <Button variant={"primary"} size={"sm"} onClick={add}>
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
  );
}

export default TableItem;
