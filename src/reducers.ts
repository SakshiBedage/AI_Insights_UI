import { FETCH_DATA, TOGGLE_CHART } from "./actions";

const initialState = {
  data: null,
  visibleCharts: {
    barChart: false,
    lineChart: false,
    pieChart: false,
  },
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case TOGGLE_CHART:
      const chartType = action.payload as keyof typeof state.visibleCharts;
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
