import TableList from "../components/Lists/TableList";
import Pagination from "../components/Pagination";
import Select from "../components/Select";

function Homepage() {
  return (
    <div className="flex w-[100%] flex-col items-center justify-center">
      <div className="my-10 flex w-[80%] flex-col items-center justify-between gap-5 lg:flex-row">
        <header className="text-[26px] font-medium text-white">
          Today's Cryptocurrency Prices by Market Cap
        </header>
        <div className="flex flex-row items-center">
          <text className="mx-3 text-[16px] font-medium text-white">
            Sort by:
          </text>
          <Select variant={"primary"}>
            <option>Option1</option>
            <option>Option2</option>
            <option>Option3</option>
          </Select>
        </div>
      </div>
      <TableList></TableList>
      <Pagination />
    </div>
  );
}

export default Homepage;
