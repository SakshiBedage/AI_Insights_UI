import React, { useEffect } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, toggleChart } from "./actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleFetchData = async () => {
    try {
      const response = await fetch("/ai-data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const fetchedData = await response.json();
      // console.log(fetchedData);

      dispatch(fetchData(fetchedData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, [dispatch]);

  const data = useSelector((state: any) => state.data);
  const visibleCharts = useSelector((state: any) => state.visibleCharts);

  const handleChartToggle = (chart: "barChart" | "lineChart" | "pieChart") => {
    // console.log("Data passed to chart toggle:", data.response_times);
    dispatch(toggleChart(chart));
  };

  return (
    <div>
      <h1>AI Insights Dashboard</h1>

      <button onClick={() => handleChartToggle("barChart")}>
        {visibleCharts.barChart ? "Hide" : "Show"} Category Distribution (Bar
        Chart)
      </button>
      {visibleCharts.barChart && data && (
        <BarChart data={data.category_distribution} />
      )}

      <button onClick={() => handleChartToggle("lineChart")}>
        {visibleCharts.lineChart ? "Hide" : "Show"} Response Times (Line Chart)
      </button>
      {visibleCharts.lineChart && data && (
        <LineChart data={data.response_times} />
      )}

      <button onClick={() => handleChartToggle("pieChart")}>
        {visibleCharts.pieChart ? "Hide" : "Show"} User Satisfaction (Pie Chart)
      </button>
      {visibleCharts.pieChart && data && (
        <PieChart data={data.user_satisfaction} />
      )}
    </div>
  );
};

export default Dashboard;
