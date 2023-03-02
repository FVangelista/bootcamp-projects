const API_KEY = '60cc9f6b9d9bf32ae92f8b23872a5557';

const BASE_URL = `https://api.themoviedb.org/3/tv/`;

const GET = async (category, id = '', page = 1) => {
  const res = await fetch(
    BASE_URL +
      `${id}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  const data = await res.json();
  return data;
};

export { GET };
