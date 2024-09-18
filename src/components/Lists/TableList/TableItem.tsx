import { useNavigate } from "react-router";

import Button from "../../Interactive/Button";
import { useState } from "react";
import Modal from "../../Interactive/Modal";
import AddModal from "../../AddModal";
import { coinInterface } from "../../../utils/types/coinType";
import { TABLE_VALUE_RANGE } from "../../../constants/intervalsAPI";
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
      <td className="flex h-[60px] w-[100%] items-center justify-center text-[14px] text-white">
        {props.item.symbol}
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
          <div>{Number(props.item.priceUsd).toFixed(TABLE_VALUE_RANGE)}</div>
        </TableCurrency>
      </td>
      <td className="text-[14px] text-white">
        <TableCurrency>
          {Number(props.item.marketCapUsd).toFixed(TABLE_VALUE_RANGE)}
        </TableCurrency>
      </td>

      <td className="text-[14px] text-white">
        <TableCurrency>
          {Number(props.item.changePercent24Hr).toFixed(TABLE_VALUE_RANGE)} %
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
            <AddModal />
          </Modal>
        </TableCurrency>
      </td>
    </tr>
  );
}

export default TableItem;
