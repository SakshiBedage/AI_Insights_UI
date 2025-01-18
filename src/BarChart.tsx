import React from "react";
import { Bar } from "react-chartjs-2";
import {
  ChartData,
  ChartOptions,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Chart as ChartJS } from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }: { data: any }) => {
  const chartData: ChartData<"bar"> = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Queries per Category",
        data: Object.values(data),
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
