import API_KEY from '../apikeys.js';

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=`;

const GET = async (city = '') => {
  const res = await fetch(
    BASE_URL + `${city}&appid=${API_KEY}&units=metric&lang=en`
  );
  const data = await res.json();
  return data;
};

export { GET };
