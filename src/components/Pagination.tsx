import { Dispatch, HTMLAttributes, SetStateAction } from "react";

import ArrowLeft from "assets/ArrowLeft";
import ArrowRight from "assets/ArrowRight";
import Button from "components/InteractiveReused/Button";
import { OFFSET_CHANGE } from "constants/paginationConst";

interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  setInterval: Dispatch<SetStateAction<number>>;
  interval: number;
}
function Pagination({ setInterval, interval }: PaginationProps) {
  return (
    <div className="my-10 flex flex-row gap-4">
      <Button
        variant={interval > 0 ? "blueButton" : "primary"}
        size={"md"}
        onClick={() => {
          if (interval == 0) {
            return;
          }
          setInterval((a) => a - OFFSET_CHANGE);
        }}
      >
        <ArrowLeft />
        Prev
      </Button>
      <Button
        variant={"blueButton"}
        size={"md"}
        onClick={() => {
          setInterval((a) => a + OFFSET_CHANGE);
        }}
      >
        Next
        <ArrowRight />
      </Button>
    </div>
  );
}

export default Pagination;
