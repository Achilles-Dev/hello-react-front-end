import API from './api';

const GET_GREETING = 'GET_GREETING';

const initialState = {
  greeting: {},
  loading: true,
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return {
        ...state,
        greeting: action.payload,
        loading: false,
      };
    default: return state;
  }
};

export const getGreeting = () => (dispatch) => {
  API.getGreeting((res) => {
    dispatch({
      type: GET_GREETING,
      payload: res.data,
    });
  });
};

export default greetingsReducer;
