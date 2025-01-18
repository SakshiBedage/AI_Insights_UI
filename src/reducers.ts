import { FETCH_DATA, TOGGLE_CHART, DashboardActionTypes } from "./actions";

interface VisibleCharts {
  barChart: boolean;
  lineChart: boolean;
  pieChart: boolean;
  donutChart: boolean;
}

export interface RootState {
  data: any | null;
  visibleCharts: VisibleCharts;
}

const initialState: RootState = {
  data: null,
  visibleCharts: {
    barChart: false,
    lineChart: false,
    pieChart: false,
    donutChart: false,
  },
};

const rootReducer = (
  state = initialState,
  action: DashboardActionTypes
): RootState => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case TOGGLE_CHART:
      const chartType = action.payload;
      return {
        ...state,
        visibleCharts: {
          ...state.visibleCharts,
          [chartType]: !state.visibleCharts[chartType],
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
