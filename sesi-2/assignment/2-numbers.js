/** JavaScript Numbers */
const number = 123;
const notNumber = '123';

console.log(typeof number); // number
console.log(typeof notNumber); // string

/**
 * JavaScript doesn’t distinguish between whole numbers and decimals,
 * so you can use them together without having to convert from one to the other.
 */
console.log(10 + 3.14159); // 13.14159

/**
 * Fractions don’t exist in JavaScript,
 * but you can rewrite them as division problems using the division operator.
 * Note that the resulting number is always converted to decimals — just like with a calculator.
 */
console.log(1 / 3); // 0.3333333333333333

/** Improper fractions use the division operator in the same way. */
console.log(11 / 10); // 1.1

/** To use mixed numbers, you need to add the whole number and fraction. */
console.log(1 + 4 / 3); // 2.333333333333333

/** Negative Numbers */
console.log(-1); // -1
