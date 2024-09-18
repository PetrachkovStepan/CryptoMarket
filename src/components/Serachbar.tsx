import SearchImg from "../assets/SearchImg";
import Button from "./Interactive/Button";
import Input from "./Interactive/Input";

function Serachbar() {
  return (
    <div className="m-x-2 relative flex h-[35px] flex-row-reverse items-center bg-dark-theme-middle-blue">
      <Button variant={"searchButton"} size={"neutral"}>
        <SearchImg />
      </Button>
      <Input variant={"primary"} placeholder="Search" />
    </div>
  );
}

export default Serachbar;
