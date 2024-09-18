import { coinInterface } from "../../../utils/types/coinType";
import TableItem from "./TableItem";

function TableList({ items }: { items: coinInterface[] }) {
  return (
    <table className="w-[80%] table-auto">
      <thead>
        <tr className="gap-2">
          <th className="text-[14px] text-white">Name</th>
          <th className="text-[14px] text-white">Img</th>
          <th className="text-[14px] text-white">$ Prise</th>
          <th className="text-[14px] text-white">$ Market cap.</th>
          <th className="text-[14px] text-white">24hr change</th>
          <th className="text-[14px] text-white">Add to case</th>
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
