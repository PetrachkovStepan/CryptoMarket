import { useEffect, useState } from "react";
import Button from "./Interactive/Button";
import PopularList from "./Lists/PopularList/PopularList";
import Modal from "./Interactive/Modal";
import Serachbar from "./Serachbar";
import BriefcaseContent from "./Briefcase";
import { RANK } from "../constants/sortConst";
import { getCoinList } from "../api/coinAPI";
import { coinInterface } from "../utils/types/coinType";
import { POPULAR_LIST_LENGTH } from "../constants/intervalsAPI";

function Header() {
  const [modalActive, setModalActive] = useState(false);
  const [coinList, setCoinList] = useState<coinInterface[]>([]);
  useEffect(() => {
    getAllCoins();
  }, []);
  const getAllCoins = async () => {
    const resp = await getCoinList(RANK);
    if (resp != undefined) {
      setCoinList(resp.slice(0, POPULAR_LIST_LENGTH));
    }
  };
  return (
    <header className="flex min-h-[70px] flex-col items-center justify-between border-b-[2px] border-dark-theme-ligth-blue px-5 lg:flex-row">
      <PopularList items={coinList} />
      <div className="m-3 flex flex-col items-center gap-5 lg:flex-row">
        <Serachbar />
        <Button
          variant={"secondary"}
          size={"sm"}
          onClick={() => setModalActive(true)}
        >
          <pre className="text-[14px] text-dark-theme-text">
            {"134,32"} USD{" "}
          </pre>
          <pre className="text-[14px] text-green-text">
            {"+2,38"} {"(1,80 %)"}
          </pre>
        </Button>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        variant={"briefcase"}
        size={"neutral"}
      >
        <BriefcaseContent />
      </Modal>
    </header>
  );
}

export default Header;
