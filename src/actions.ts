export const FETCH_DATA = "FETCH_DATA";
export const TOGGLE_CHART = "TOGGLE_CHART";

export const fetchData = (data: any) => ({
  type: FETCH_DATA,
  payload: data,
});

export const toggleChart = (chart: "barChart" | "lineChart" | "pieChart") => ({
  type: TOGGLE_CHART,
  payload: chart,
});
