import React from "react";
import { Pie } from "react-chartjs-2";
import { ChartData, ChartOptions, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart as ChartJS } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }: { data: any }) => {
  console.log(data);

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

  return <Pie data={chartData} options={options} />;
};

export default PieChart;
