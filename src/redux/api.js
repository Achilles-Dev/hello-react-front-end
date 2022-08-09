import axios from 'axios';

const API = {
  getGreeting: async (success) => {
    await axios.get('http://localhost:3000/api/greeting')
      .then((res) => success(res));
  },
};

export default API;
