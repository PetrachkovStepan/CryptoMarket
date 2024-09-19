import { useNavigate } from "react-router";
import SearchImg from "assets/SearchImg";
import Button from "components/Interactive/Button";
import Input from "components/Interactive/Input";
import { useState } from "react";

function Serachbar() {
  const [id, setId] = useState<string>("")
  const navigate = useNavigate();
  const navigateToCoinpage = () => {
    navigate("coin/" + id.toLowerCase());
  };
  return (
    <div className="m-x-2 relative flex h-[35px] flex-row-reverse items-center bg-dark-theme-middle-blue">
      <Button variant={"searchButton"} size={"neutral"} onClick={navigateToCoinpage}>
        <SearchImg />
      </Button>
      <Input variant={"primary"} placeholder="Search" 
        onChange={(e) => setId(e.target.value)}/>
    </div>
  );
}

export default Serachbar;
