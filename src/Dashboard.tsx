import React, { useEffect } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import DonutChart from "./DonutChart";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, toggleChart } from "./actions";
import { RootState } from "./reducers";
import "./styles/main.scss";

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleFetchData = async () => {
    try {
      const response = await fetch("/ai-data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const fetchedData = await response.json();
      dispatch(fetchData(fetchedData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const data = useSelector((state: RootState) => state.data);
  const visibleCharts = useSelector((state: RootState) => state.visibleCharts);

  const handleChartToggle = (
    chart: "barChart" | "lineChart" | "pieChart" | "donutChart"
  ) => {
    dispatch(toggleChart(chart));
  };

  return (
    <div className="dashboard">
      <h1>AI Insights Dashboard</h1>

      <div className="heading-line"></div>

      <div className="button-container">
        <button onClick={() => handleChartToggle("barChart")}>
          {visibleCharts.barChart ? "Hide" : "Show"} Category Distribution (Bar
          Chart)
        </button>

        <button onClick={() => handleChartToggle("lineChart")}>
          {visibleCharts.lineChart ? "Hide" : "Show"} Response Times (Line
          Chart)
        </button>

        <button onClick={() => handleChartToggle("pieChart")}>
          {visibleCharts.pieChart ? "Hide" : "Show"} User Satisfaction (Pie
          Chart)
        </button>

        <button onClick={() => handleChartToggle("donutChart")}>
          {visibleCharts.donutChart ? "Hide" : "Show"} Usage Statistics (Donut
          Chart)
        </button>
      </div>

      {visibleCharts.barChart && data && (
        <div className="chart-wrapper">
          <div className="chart-container">
            <BarChart data={data.category_distribution} />
          </div>
        </div>
      )}

      {visibleCharts.lineChart && data && (
        <div className="chart-wrapper">
          <div className="chart-container">
            <LineChart data={data.response_times} />
          </div>
        </div>
      )}

      {visibleCharts.pieChart && data && (
        <div className="chart-wrapper">
          <div className="chart-container">
            <PieChart data={data.user_satisfaction} />
          </div>
        </div>
      )}

      {visibleCharts.donutChart && data && (
        <div className="chart-wrapper">
          <div className="chart-container">
            <DonutChart data={data.usage_statistics} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
