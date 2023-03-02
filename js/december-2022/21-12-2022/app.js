// Challange n.1

function convert(str) {
  return `${str} - bootcamp`;
}

// const fullStr = convert(prompt('Enter your string here: '));
// console.log(fullStr);

// Challange n.2

const person = {
  firstName: 'Filippo',
  lastName: 'Bortoletti',
  age: 27,
  hobby: function () {
    console.log(`${this.firstName}, loves to play video games`);
  },
};

// console.log(person.age);
// person.hobby();

// Advance challange

function calculator(operation, num1, num2) {
  if (operation === '+') {
    console.log(num1 + num2);
  } else if (operation === '-') {
    console.log(num1 - num2);
  } else if (operation === '*') {
    console.log(num1 * num2);
  } else if (operation === '/') {
    console.log(num1 / num2);
  }
}

// calculator('+', 5, 2);

function calculatorFirst(operation, [num1, num2]) {
  if (operation === '+') {
    console.log(num1 + num2);
  } else if (operation === '-') {
    console.log(num1 - num2);
  } else if (operation === '*') {
    console.log(num1 * num2);
  } else if (operation === '/') {
    console.log(num1 / num2);
  }
}

// calculatorFirst('*', [8, 2]);

function calculatorSecond() {
  const operation = prompt('insert math operation: ');
  const num1 = +prompt('insert first number: ');
  const num2 = +prompt('insert second number: ');

  if (operation === '+') {
    console.log(num1 + num2);
  } else if (operation === '-') {
    console.log(num1 - num2);
  } else if (operation === '*') {
    console.log(num1 * num2);
  } else if (operation === '/') {
    console.log(num1 / num2);
  }
}

// calculatorSecond();
