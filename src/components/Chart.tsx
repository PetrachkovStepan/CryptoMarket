import Chart from "react-apexcharts";

import Select from "./Select";

function myChart() {
  const config = {
    options: {
      chart: {
        id: "basic-bar",
        height: "100%",
        width: "100%",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <div className="m-14 w-[80%] overflow-hidden rounded-lg border-[3px] border-dark-theme-ligth-blue bg-dark-theme-main-blue p-4 shadow md:p-6 lg:mt-10 lg:w-[50%]">
      <div className="flex justify-between">
        <div>
          <h5 className="pb-2 text-3xl font-bold leading-none text-dark-theme-text">
            32.4k
          </h5>
          <p className="text-base font-normal text-dark-theme-text">
            Price chart
          </p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-center text-base font-semibold text-green-text">
          12%
          <svg
            className="ms-1 h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13V1m0 0L1 5m4-4 4 4"
            />
          </svg>
        </div>
      </div>
      <div className="h-[100%] w-[100%]">
        <Chart
          options={config.options}
          series={config.series}
          type="line"
          width="100%"
          height="350px"
        ></Chart>
      </div>

      <Select variant={"primary"} onChange={(e) => console.log(e.target.value)}>
        <option>Day</option>
        <option>12 hours</option>
        <option>1 hour</option>
      </Select>
    </div>
  );
}

export default myChart;
