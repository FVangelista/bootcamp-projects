// AUX functions

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error(`Such element ${selection} does not exist.`);
  }
};

const cEl = (element) => document.createElement(element);

export { getElement, cEl };
