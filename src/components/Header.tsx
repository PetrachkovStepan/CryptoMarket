import { useEffect, useState } from "react";
import Button from "./Interactive/Button";
import PopularList from "./Lists/PopularList/PopularList";
import Modal from "./Interactive/Modal";
import Serachbar from "./Serachbar";
import BriefcaseContent from "./Briefcase";
import { cryptoAPI } from "../api/coinAPI";
import LoaderError from "./LoaderError";
import { useAppSelector } from "../hooks/redux";
import { calculateBriefcaseValueChange } from "../utils/briefcasePricesCalc/briefcasePricesCalc";
import { formatValue } from "../utils/postPerformActions/textFormater";
import Text from "./Text";

function Header() {
  const [modalActive, setModalActive] = useState(false);
  const { data: coinList, error } = cryptoAPI.useFetchAllCoinsQuery("");

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
          <Text variant={"normal"} size={"normal"}>
            <pre>{formatValue(Number(briefcaseValue.value))} USD </pre>
          </Text>
          <Text
            variant={briefcaseValue.valueChange > 0 ? "priceUp" : "priceDown"}
            size={"middle"}
          >
            {briefcaseValue.valueChange > 0 ? "+" : "-"} {formatValue(Number(briefcaseValue.valueChange))} {"("}
            {formatValue(Number(briefcaseValue.percent))}%
            {")"}
          </Text>
        </Button>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        variant={"briefcase"}
        size={"neutral"}
      >
        <BriefcaseContent item={briefcaseValue}/>
      </Modal>
    </header>
  );
}

export default Header;
