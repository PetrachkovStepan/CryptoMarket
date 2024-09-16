// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar as BarChartJs } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// );

// const Bar = () => {
//   const options = ChartOptions<'line'> = {
//     animation: false,
//     type: 'time',
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Chart.js Bar Chart",
//       },
//     },
//   };

//   const labels = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//   ];

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: labels.map(() => Math.floor(Math.random() * 1000)),
//         backgroundColor: "rgba(255, 99, 132, 1)",
//       },
//       {
//         label: "Dataset 2",
//         data: labels.map(() => Math.floor(Math.random() * 1000)),
//         backgroundColor: "rgba(53, 162, 235, 1)",
//       },
//     ],
//   };
//   return <BarChartJs options={options} data={data} />;
// };

// export default Bar;
