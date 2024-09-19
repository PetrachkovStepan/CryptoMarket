import Button from "components/InteractiveReused/Button";
import { Dispatch, HTMLAttributes, SetStateAction } from "react";

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
          setInterval((a) => a - 100);
        }}
      >
        <svg
          className="me-2 h-3.5 w-3.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Prev
      </Button>
      <Button
        variant={"blueButton"}
        size={"md"}
        onClick={() => {
          setInterval((a) => a + 100);
        }}
      >
        Next
        <svg
          className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Button>
    </div>
  );
}

export default Pagination;
