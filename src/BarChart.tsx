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
import "./styles/main.scss";

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
        backgroundColor: "#36A2EB",
        borderColor: "#36A2EB",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bar-chart">
      <h3>Category Distribution (Bar Chart)</h3>
      <div className="chart">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
