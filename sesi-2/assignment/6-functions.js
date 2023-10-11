/** JavaScript Functions */

/** Function Declaration */
function addTwoNumbers(a, b) {
  return a + b;
}

/** Function Expression */
const reverseString = function (str) {
  return str.split('').reverse().join('');
};

/** Function Expression ES6 Style or Arrow Function */
const sumNumbersInArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
