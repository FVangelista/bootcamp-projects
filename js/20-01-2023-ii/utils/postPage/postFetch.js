const url = 'https://api.escuelajs.co/api/v1/';

// Fetch api

const fetchData = async (objBody, path, method, id = '') => {
  try {
    const response = await fetch(url + path + '/' + id, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objBody),
    });

    if (!response.ok) {
      throw new Error(`There was an error seding your ${method}`);
    }

    const data = await response.json();
    console.log('REPONSE POST: ', data);
  } catch (error) {
    console.log(error.message);
  }
};

// Fetch delete method - needs a new fetch since it doesn't have a body parameter

const deleteFetch = async (path, method, id = '') => {
  try {
    const response = await fetch(url + path + '/' + id, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`There was an error seding your ${method}`);
    }

    const data = await response.json();
    console.log('REPONSE POST: ', data);
  } catch (error) {
    console.log(error.message);
  }
};

export { fetchData, deleteFetch };
