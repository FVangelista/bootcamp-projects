const getAllElement = (selection) => {
  const element = document.querySelectorAll(selection);
  if (element) return element;
  throw new Error(`such element does not exist`);
};

export default getAllElement;
