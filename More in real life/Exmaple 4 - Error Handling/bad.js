const axios = require('axios');
const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function getUser() {
  try {
    someFunction();
    const response = await axios.get(`${BASE_URL}/todos?_limit=5`);
    console.log(response?.data);
  } catch (error) {
    console.log(error);
  }
}

getUser();
