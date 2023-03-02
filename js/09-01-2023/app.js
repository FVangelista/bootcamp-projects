// callback arrow - operations

const add = (n1, n2) => console.log(n1 + n2);
const sub = (n1, n2) => console.log(n1 - n2);
const mtp = (n1, n2) => console.log(n1 * n2);
// const div = (n1, n2) => console.log(n1 / n2);

function calculatorSecond() {
  const operation = prompt('insert math operation: (ex: +, -, *, /) ');
  const num1 = +prompt('insert first number: ');
  const num2 = +prompt('insert second number: ');
  const div = (n1, n2) => console.log(n1 / n2);

  if (operation === '+') {
    add(num1, num2);
  } else if (operation === '-') {
    sub(num1, num2);
  } else if (operation === '*') {
    mtp(num1, num2);
  } else if (operation === '/') {
    div(num1, num2);
  }
}

// calculatorSecond();
