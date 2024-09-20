import { useState } from "react";

import { useNavigate } from "react-router";

import Text from "components/InteractiveReused/Text/Text";
import AddModal from "components/Briefcase/AddModal";
import Modal from "components/InteractiveReused/Modal/Modal";
import Button from "components/InteractiveReused/Button/Button";
import { coinInterface } from "utils/types/coinType";
import { formatValue } from "utils/postPerformActions/textFormater";

import TableCurrency from "./TableCurrency";

function TableItem(props: { item: coinInterface }) {
  const [modalActive, setModalActive] = useState(false);
  const navigate = useNavigate();
  const navigateToCoinpage = () => {
    navigate("coin/" + props.item.id);
  };

  const add = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setModalActive(true);
  };

  return (
    <tr
      className="h-[60px] border-t-[1px] border-dark-theme-ligth-blue px-[3%] hover:bg-dark-theme-middle-blue lg:px-[10%]"
      onClick={navigateToCoinpage}
    >
      <td className="flex h-[60px] w-[100%] items-center justify-center">
        <Text variant={"normal"} size={"normal"}>
          {props.item.symbol}
        </Text>
      </td>
      <td>
        <TableCurrency>
          <img
            src={
              "https://assets.coincap.io/assets/icons/" +
              props.item.symbol.toLowerCase() +
              "@2x.png"
            }
            className="h-[20px] w-[20px]"
          />
        </TableCurrency>
      </td>
      <td className="text-[14px] text-white">
        <TableCurrency>
          <Text variant={"normal"} size={"normal"}>
            {formatValue(Number(props.item.priceUsd))}
          </Text>
        </TableCurrency>
      </td>
      <td>
        <TableCurrency>
          <Text variant={"normal"} size={"normal"}>
            {formatValue(Number(props.item.marketCapUsd))}
          </Text>
        </TableCurrency>
      </td>
      <td>
        <TableCurrency>
          <Text
            variant={props.item.changePercent24Hr > 0 ? "priceUp" : "priceDown"}
            size={"normal"}
          >
            {props.item.changePercent24Hr > 0 ? "+" : "-"}
            {formatValue(Number(props.item.changePercent24Hr))} %
          </Text>
        </TableCurrency>
      </td>
      <td>
        <TableCurrency>
          <Button variant={"primary"} size={"sm"} onClick={add}>
            Add
          </Button>
          <Modal
            active={modalActive}
            setActive={setModalActive}
            variant={"add"}
            size={"neutral"}
          >
            <AddModal item={props.item} />
          </Modal>
        </TableCurrency>
      </td>
    </tr>
  );
}

export default TableItem;
