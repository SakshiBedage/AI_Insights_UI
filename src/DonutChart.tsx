import React from "react";
import { Pie } from "react-chartjs-2";
import {
  ChartData,
  ChartOptions,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart as ChartJS } from "chart.js";
import "./styles/main.scss";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

interface DonutChartProps {
  data: { [key: string]: { [key: string]: number } };
}

const DonutChart = ({ data }: DonutChartProps) => {
  const chartData = Object.entries(data).flatMap(([category, values]) =>
    Object.entries(values).map(([name, value]) => ({
      name: `${category} - ${name}`,
      value,
    }))
  );

  console.log("Processed chart data:", chartData);

  const chartDataFormatted: ChartData<"pie"> = {
    labels: chartData.map((item) => item.name),
    datasets: [
      {
        data: chartData.map((item) => item.value),
        backgroundColor: [
          "#0088FE",
          "#00C49F",
          "#FFBB28",
          "#FF8042",
          "#D84D6C",
        ],
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`; // Display data as percentage
          },
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div className="donut-chart">
      <h3>Usage Statistics (Donut Chart)</h3>
      <div className="chart">
        <Pie data={chartDataFormatted} options={options} />
      </div>
    </div>
  );
};

export default DonutChart;
