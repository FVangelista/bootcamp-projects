const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const GET = async (path) => {
  const res = await fetch(`${BASE_URL}${path}`);
  const data = await res.json();
  return data;
};

export const objFilter = (obj, value) => {
  let arrayObj = [];

  for (let prop in obj) {
    if (prop.includes(value) && obj[prop] != null) {
      arrayObj.push(obj[prop]);
    }
  }

  return arrayObj;
};

export const scrollToSection = (elRef) => {
  window.scrollTo({
    top: elRef.current.offsetTop,
    behavior: 'smooth',
  });
};
