import { useNavigate } from "react-router";
import SearchImg from "assets/SearchImg";
import Button from "components/InteractiveReused/Button/Button";
import Input from "components/InteractiveReused/Input/Input";
import { useState } from "react";

function Serachbar() {
  const [id, setId] = useState<string>("");
  const navigate = useNavigate();
  const navigateToCoinpage = () => {
    navigate("coin/" + id.toLowerCase());
    setId("");
  };
  return (
    <div className="m-x-2 relative flex h-[35px] flex-row-reverse items-center bg-dark-theme-middle-blue">
      <Button
        id={"searchButton"}
        variant={"searchButton"}
        size={"neutral"}
        onClick={navigateToCoinpage}
      >
        <SearchImg />
      </Button>
      <Input
        value={id}
        variant={"primary"}
        placeholder="Search"
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
    </div>
  );
}

export default Serachbar;
