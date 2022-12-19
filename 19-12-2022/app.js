// Conditionals Challange

let operation = prompt('Insert an operation (ex: add, sub): ');
let num1 = +prompt('Insert the first number: ');
let num2 = +prompt('Insert the second number: ');

let result;

if (operation === 'add') {
  result = num1 + num2;
  console.log(`The final result is ${result}`);
} else if (operation === 'sub') {
  result = num1 - num2;
  console.log(`The final result is ${result}`);
} else {
  console.log('Enter the right operation');
}

// Switch

// switch (operation) {
//   case 'add':
//     result = num1 + num2;
//     console.log(`The final result is ${result}`);
//     break;
//   case 'sub':
//     result = num1 - num2;
//     console.log(`The final result is ${result}`);
//     break;

//   default:
//     console.log('Enter the right operation');
//     break;
// }

// Ternary Operators

// operation === 'add' ? console.log(`The final result is ${num1 + num2}`) : false;
// operation === 'sub' ? console.log(`The final result is ${num1 - num2}`) : false;

// operation !== 'add' && operation !== 'sub'
//   ? alert('Enter the right operation')
//   : false;
