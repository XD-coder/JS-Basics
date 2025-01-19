// we use `let` to define a variable and `=` operator to assign a value to it 

let name = 'Kartikey Mishra';
//console.log(name)

// can not be a reserved keyword
// should be meaningful (no  'a' ,'a1' , 'x')
// Cannot contain space or hyphen (only $, _ allowed)
// variable can not start with digits (1name) (if used js will think this is a number)
// we can not use special key words like "let"

// ***** Constants ******

// constant is a type of variable that will never change in the program
const interestRate = 0.3;

// to change the value we just re assign variable with new value.
// but we dont use let as it will try to create new variable
// with name "interestRate" which will not be posible
interestRate = 1;
console.log(interestRate);