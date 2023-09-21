import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_US_DATA_SUCCESS,
  FETCH_EVEN_DATA_SUCCESS,
  SET_EVEN_DATA,
} from "../../actions/contactAction";

const initialState = {
  data: null,
  loading: false,
  error: null,
  isEven: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        allData: state.isEven
          ? action.payload.filter((e) => e % 2 === 0)
          : action.payload,
      };
    case FETCH_US_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        usData: action.payload,
      };
    case FETCH_EVEN_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        evenData: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_EVEN_DATA:
      console.log(action.payload, "reducer--------------------");
      return {
        ...state,
        isEven: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
