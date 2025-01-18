export const FETCH_DATA = "FETCH_DATA";
export const TOGGLE_CHART = "TOGGLE_CHART";

export const fetchData = (data: any) => ({
  type: FETCH_DATA,
  payload: data,
});

export const toggleChart = (
  chart: "barChart" | "lineChart" | "pieChart" | "donutChart"
) => ({
  type: TOGGLE_CHART,
  payload: chart,
});

export interface FetchDataAction {
  type: typeof FETCH_DATA;
  payload: any;
}

export interface ToggleChartAction {
  type: typeof TOGGLE_CHART;
  payload: "barChart" | "lineChart" | "pieChart" | "donutChart";
}

export type DashboardActionTypes = FetchDataAction | ToggleChartAction;
