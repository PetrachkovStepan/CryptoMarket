import Text from "components/Text";
import { coinInterface } from "utils/types/coinType";

import TableItem from "./TableItem";

function TableList({ items }: { items: coinInterface[] , offset:number}) {
  return (
    <table className="w-[80%] table-auto">
      <thead>
        <tr className="gap-2">
          <th className="text-[14px] text-white">
            <Text variant={"normal"} size={"normal"}>
              Name
            </Text>
          </th>
          <th className="text-[14px] text-white">
            <Text variant={"normal"} size={"normal"}>
              Img
            </Text>
          </th>
          <th className="text-[14px] text-white">
            <Text variant={"normal"} size={"normal"}>
              $ Prise
            </Text>
          </th>
          <th className="text-[14px] text-white">
            <Text variant={"normal"} size={"normal"}>
              $ Market cap.
            </Text>
          </th>
          <th className="text-[14px] text-white">
            <Text variant={"normal"} size={"normal"}>
              24hr change
            </Text>
          </th>
          <th className="text-[14px] text-white">
            <Text variant={"normal"} size={"normal"}>
              Add to case
            </Text>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TableItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default TableList;
