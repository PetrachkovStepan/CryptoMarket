import { useState } from "react";

import Chart from "react-apexcharts";
import { useParams } from "react-router";

import { cryptoAPI } from "api/coinAPI";
import Select from "components/InteractiveReused/Select/Select";
import {
  chartGeneration,
  generateParams,
} from "utils/chart/chartGenerateOptions";

import { DAY, DAY_SIZE, HOUR_1, HOUR_12 } from "constants/intervalsAPI";

function MyChart() {
  const coinId = useParams();
  const [chartIntervalParam, setChartIntervalParam] = useState<string>(DAY);
  const [chartLength, setChartLength] = useState<string>(DAY_SIZE);

  const { data: coin } = cryptoAPI.useFetchCoinHistoryQuery({
    id: coinId.id,
    interval: chartIntervalParam,
  });

  return (
    <div className="m-14 w-[80%] overflow-hidden rounded-lg border-[3px] border-dark-theme-ligth-blue bg-dark-theme-main-blue p-4 shadow md:p-6 lg:mt-10 lg:w-[50%]">
      <div className="flex justify-start">
        <p className="text-base font-normal text-dark-theme-text">
          Price chart
        </p>
      </div>
      <div className="h-[100%] w-[100%]">
        <Chart
          options={chartGeneration(coin, chartLength)?.options}
          series={chartGeneration(coin, chartLength)?.series}
          type="line"
          width="100%"
          height="350px"
        ></Chart>
      </div>
      <Select
        variant={"primary"}
        onChange={(e) => {
          setChartIntervalParam(e.target.value);
          setChartLength(generateParams(e.target.value));
        }}
      >
        <option value={DAY}>Day</option>
        <option value={HOUR_12}>12 hours</option>
        <option value={HOUR_1}>1 hour</option>
      </Select>
    </div>
  );
}

export default MyChart;
