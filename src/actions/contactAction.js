import axios from "axios";

// Define action types
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const SET_EVEN_DATA = "SET_EVEN_DATA";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_US_DATA_SUCCESS = "FETCH_US_DATA_SUCCESS";
export const FETCH_EVEN_DATA_SUCCESS = "FETCH_EVEN_DATA_SUCCESS";
export const dataFetchDispatch = () => ({
  type: FETCH_DATA_REQUEST,
});
// Action creators
export const fetchData = (query) => async (dispatch) => {
  dispatch(dataFetchDispatch());
  const options = {
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    params: query,
  };

  try {
    const response = await axios.request(options); // Use the 'options' you provided
    if (response?.data) {
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: response?.data,
      });
    }
    dispatch({
      type: FETCH_EVEN_DATA_SUCCESS,
      payload: response.data.filter((e) => e.id % 2 === 0),
    });
    dispatch({
      type: FETCH_US_DATA_SUCCESS,
      payload: response.data.filter((e) => e.country_id === 225),
    });
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const evenData = (value) => async (dispatch) => {
  console.log(value);
  dispatch({
    type: SET_EVEN_DATA,
    payload: value,
  });
};
