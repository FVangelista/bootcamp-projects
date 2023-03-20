const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

const GET = async (path) => {
  const res = await fetch(`${BASE_URL}${path}`);
  const data = await res.json();
  return data;
};

export default GET;
