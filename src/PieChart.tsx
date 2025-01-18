import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }: { data: any }) => {
  const [isDaily, setIsDaily] = useState(true);
  const responseTimeData = isDaily
    ? data?.day_wise || []
    : data?.week_wise || [];

  const toggleDataView = () => {
    setIsDaily(!isDaily);
  };

  const chartData = {
    labels: isDaily
      ? responseTimeData.map((item: any) => item.date)
      : responseTimeData.map((item: any) => `Week ${item.week}`),
    datasets: [
      {
        label: isDaily
          ? "Average Response Time (Daily)"
          : "Average Response Time (Weekly)",
        data: responseTimeData.map((item: any) =>
          isDaily ? item.average_time : item.average_time
        ),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
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
    <div>
      <button onClick={toggleDataView}>
        {isDaily ? "Switch to Weekly View" : "Switch to Daily View"}
      </button>
      {responseTimeData.length > 0 ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>No data available for the chart.</p>
      )}
    </div>
  );
};

export default LineChart;
