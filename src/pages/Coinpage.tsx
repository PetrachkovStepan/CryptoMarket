import { useNavigate } from "react-router";
import Button from "../components/Button";
import Chart from "../components/Chart";
import CoinInfo from "../components/CoinInfo";

function Coinpage() {
  const navigate = useNavigate();
  const navigateToHomepage = () => {
    navigate("/");
  };
  return (
    <>
      <div className="fixed m-3">
        <Button variant={"blueButton"} size={"md"} onClick={navigateToHomepage}>
          Back
        </Button>
      </div>
      <div className="flex w-[100%] flex-col justify-center lg:flex-row">
        <CoinInfo />
        <Chart />
      </div>
    </>
  );
}

export default Coinpage;
