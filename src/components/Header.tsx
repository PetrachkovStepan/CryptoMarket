import { useEffect, useState } from "react";

import { cryptoAPI } from "api/coinAPI";
import Serachbar from "components/Serachbar";
import { useAppSelector } from "hooks/redux";
import LoaderError from "components/LoaderError";
import BriefcaseContent from "components/Briefcase/Briefcase";
import Modal from "components/InteractiveReused/Modal";
import Button from "components/InteractiveReused/Button";
import PopularList from "components/Lists/PopularList/PopularList";
import { calculateBriefcaseValueChange } from "utils/briefcasePricesCalc/briefcasePricesCalc";

import BriefcareSummary from "./Briefcase/BriefcaseSummary";

function Header() {
  const [modalActive, setModalActive] = useState(false);
  const { data: coinList, error } = cryptoAPI.useFetchAllCoinsQuery(0);

  const briefcase = useAppSelector((state) => state.briefcase);
  const currentBriefcase = useAppSelector((state) => state.currentBriefcase);
  const [briefcaseValue, setBriefcaseValue] = useState<{
    value: number;
    valueChange: number;
    percent: number;
  }>({ value: 0, valueChange: 0, percent: 0 });

  useEffect(() => {
    if (briefcase.items.length == currentBriefcase.items.length) {
      setBriefcaseValue(
        calculateBriefcaseValueChange(briefcase.items, currentBriefcase.items),
      );
    }
  }, [briefcase.items, currentBriefcase.items]);

  return (
    <header className="flex min-h-[70px] flex-col items-center justify-between border-b-[2px] border-dark-theme-ligth-blue px-5 lg:flex-row">
      {error && <LoaderError item="Ooops, something is wrong!" />}
      {coinList && <PopularList items={coinList?.data.slice(0, 3)} />}
      <div className="m-3 flex flex-col items-center gap-5 lg:flex-row">
        <Serachbar />
        <Button
          variant={"secondary"}
          size={"sm"}
          onClick={() => setModalActive(true)}
        >
          <BriefcareSummary
            value={briefcaseValue.value}
            valueChange={briefcaseValue.valueChange}
            percent={briefcaseValue.percent}
          />
        </Button>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        variant={"briefcase"}
        size={"neutral"}
      >
        <BriefcaseContent item={briefcaseValue} />
      </Modal>
    </header>
  );
}

export default Header;
