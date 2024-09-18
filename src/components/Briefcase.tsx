import CoinList from "./Lists/CoinList/CoinList";

function BriefcaseContent() {
  return (
    <div className="m-2 flex h-[100%] flex-col justify-between lg:m-10">
      <div className="flex flex-col items-center lg:flex-row">
        <h1 className="text-[16px] font-bold text-dark-theme-text">
          Total balance:
        </h1>
        <pre className="text-[16px] text-dark-theme-text"> {"134,32"} USD </pre>
        <pre className="text-[16px] text-green-text">
          {"+2,38"} {"(1,80 %)"}
        </pre>
      </div>
      <CoinList />
    </div>
  );
}

export default BriefcaseContent;
