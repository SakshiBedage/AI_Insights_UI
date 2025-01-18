import React from "react";
import { Pie } from "react-chartjs-2";
import { ChartData, ChartOptions, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart as ChartJS } from "chart.js";
import "./styles/main.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }: { data: any }) => {
  const chartData: ChartData<"pie"> = {
    labels: data.ratings.map((item: any) => `Rating ${item.rating}`),
    datasets: [
      {
        label: "User Satisfaction",
        data: data.ratings.map((item: any) => item.count),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
  };

  return (
    <div className="pie-chart">
      <h3>User Satisfaction (Pie Chart)</h3>
      <div className="chart">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
