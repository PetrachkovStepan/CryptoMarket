import { useState } from "react";

import Chart from "react-apexcharts";
import { useParams } from "react-router";

import Select from "components/InteractiveReused/Select";
import { cryptoAPI } from "api/coinAPI";
import {
  coinHistoryDateInterface,
  coinHistoryPriceInterface,
} from "../utils/types/historyType";
import {
  CHART_VALUE_RANGE,
  DAY,
  DAY_SIZE,
  HOUR_1,
  HOUR_1_SIZE,
  HOUR_12,
  HOUR_12_SIZE,
} from "../constants/intervalsAPI";

function MyChart() {
  const coinId = useParams();
  const [chartIntervalParam, setChartIntervalParam] = useState<string>(DAY);
  const [chartLength, setChartLength] = useState<string>(DAY_SIZE);

  const { data: coin } = cryptoAPI.useFetchCoinHistoryQuery({
    id: coinId.id,
    interval: chartIntervalParam,
  });
  const config = {
    options: {
      chart: {
        id: "basic-bar",
        height: "100%",
        width: "100%",
      },
      xaxis: {
        show: false,
        categories: coin?.data
          .slice(-Number(chartLength))
          .map((item: coinHistoryDateInterface) => {
            const date = new Date(item.date);
            let hours = date.getHours().toString();
            let minutes = date.getMinutes().toString();
            if (hours.length < 2) {
              hours = "0" + hours;
            }
            if (minutes.length < 2) {
              minutes = "0" + minutes;
            }
            return hours + ":" + minutes;
          }),
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      stroke: {
        width: 3,
      },
    },
    series: [
      {
        name: "$ price",
        data:
          coin?.data
            .slice(-Number(chartLength))
            .map((item: coinHistoryPriceInterface) => {
              return Number(
                item.priceUsd.toString().slice(0, CHART_VALUE_RANGE),
              );
            }) || [],
      },
    ],
  };

  return (
    <div className="m-14 w-[80%] overflow-hidden rounded-lg border-[3px] border-dark-theme-ligth-blue bg-dark-theme-main-blue p-4 shadow md:p-6 lg:mt-10 lg:w-[50%]">
      <div className="flex justify-start">
        <p className="text-base font-normal text-dark-theme-text">
          Price chart
        </p>
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
      <Select
        variant={"primary"}
        onChange={(e) => {
          setChartIntervalParam(e.target.value);
          switch (e.target.value) {
            case DAY: {
              setChartLength(DAY_SIZE);
              break;
            }
            case HOUR_1: {
              setChartLength(HOUR_1_SIZE);
              break;
            }
            case HOUR_12: {
              setChartLength(HOUR_12_SIZE);
              break;
            }
            default: {
              break;
            }
          }
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
