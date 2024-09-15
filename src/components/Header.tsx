import Button from "./Button";
import PopularList from "./Lists/PopularList";
import Serachbar from "./Serachbar";

function Header() {
  return (
    <div className="flex min-h-[70px] flex-col items-center justify-between border-b-[2px] border-dark-theme-ligth-blue px-5 lg:flex-row">
      <PopularList />
      <div className="m-3 flex flex-col items-center gap-5 lg:flex-row">
        <Serachbar />
        <Button variant={"secondary"} size={"sm"}>
          <pre className="text-[14px] text-dark-theme-text">
            {"134,32"} USD{" "}
          </pre>
          <pre className="text-[14px] text-green-text">
            {"+2,38"} {"(1,80 %)"}
          </pre>
        </Button>
      </div>
    </div>
  );
}

export default Header;
