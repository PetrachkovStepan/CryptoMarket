interface InfoTagProps {
  propName: string;
  propValue: string | number;
}

function CoinInfoTag({ propName, propValue }: InfoTagProps) {
  return (
    <div className="flex w-[100%] flex-row items-center justify-between">
      <pre className="m-1 text-[16px] text-dark-theme-text">{propName}: </pre>
      <div className="m-1 text-[16px] text-white">{propValue}</div>
    </div>
  );
}

export default CoinInfoTag;
