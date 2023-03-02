const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`such element does not exist`);
};

export default getElement;
