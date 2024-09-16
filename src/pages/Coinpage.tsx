import Chart from "../components/Chart";
import CoinInfo from "../components/CoinInfo";

function Coinpage() {
  return (
    <div className="flex w-[100%] flex-col justify-center lg:flex-row">
      <CoinInfo />
      <Chart />
    </div>
  );
}

export default Coinpage;
