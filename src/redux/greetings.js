import getGreetingFromApi from "./api";

const GET_GREETING = 'GET_GREETING';

const initialState = {
  greeting: {}
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return {
        ...state,
        greeting: action.payload
      };
    default: return state;
  }
};

export const getGreeting = () => (dispatch) => {
  getGreetingFromApi((res) => {
    dispatch({
      type: GET_GREETING,
      payload: res.data,
    });
  });
};

export default greetingsReducer;
