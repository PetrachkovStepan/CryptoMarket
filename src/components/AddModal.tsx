import Button from "./Interactive/Button";
import Input from "./Interactive/Input";

function AddModal() {
  const addCoin = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    console.log("Coin added");
  };
  return (
    <div className="m-10 flex h-[100%] flex-col">
      <div className="flex w-[100%] flex-row justify-between">
        <div className="flex flex-row text-[14px] text-white">{"BTC"}</div>
        <div className="text-[14px] text-white">$ {"0000000"}</div>
        <div className="text-[14px] text-green-text">{"2.18"} %</div>
      </div>

      <div className="my-5 flex w-[100%] flex-row items-center justify-start gap-3">
        <Input
          variant={"secondary"}
          placeholder="count"
          onClick={(e) => e.stopPropagation()}
        />
        <Button variant={"blueButton"} size={"sm"} onClick={addCoin}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default AddModal;
