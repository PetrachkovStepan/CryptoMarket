interface InfoTagProps {
  propName: string;
  propValue: string;
}

function CoinInfoTag({ propName, propValue }: InfoTagProps) {
  return (
    <div className="flex flex-row items-center justify-between w-[100%]">
      <pre className="text-[16px] text-dark-theme-text m-1">{propName}: </pre>
      <div className="text-[16px] text-white m-1">{propValue}</div>
    </div>
  );
}

export default CoinInfoTag;
