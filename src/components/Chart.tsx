import ApexCharts from "apexcharts";
import { useEffect } from "react";
import Select from "./Select";

function Chart() {
  const options = {
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    series: [
      {
        name: "prices",
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: "#1C64F2",
      },
    ],
    xaxis: {
      categories: [
        "01 February",
        "02 February",
        "03 February",
        "04 February",
        "05 February",
        "06 February",
        "07 February",
      ],
      labels: {
        show: true,
        color: "#A1A7B6",
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: {
      show: true,
    },
  };
  useEffect(() => {
    if (
      document.getElementById("area-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("area-chart"),
        options,
      );
      chart.render();
      console.log("chartState");
    }
  });

  return (
    <div className="m-10 w-full max-w-sm rounded-lg border-[3px] border-dark-theme-ligth-blue bg-dark-theme-main-blue p-4 shadow md:p-6">
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
      <div id="area-chart"></div>
      <Select variant={"primary"} onChange={(e) => console.log(e.target.value)}>
        <option>Day</option>
        <option>12 hours</option>
        <option>1 hour</option>
      </Select>
    </div>
  );
}

export default Chart;
