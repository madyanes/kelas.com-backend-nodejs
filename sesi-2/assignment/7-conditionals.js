/** JavaScript Conditionals */
const hasBalance = true;
const hasPermission = false;
const balance = 100000;
const withdrawAmount = 50000;

if (hasBalance) {
  if (balance >= withdrawAmount && hasPermission) {
    console.log('You can withdraw money');
  } else if (balance >= withdrawAmount && !hasPermission) {
    console.log('You do not have permission to withdraw');
  } else {
    console.log('You do not have enough money');
  }
} else {
  console.log('You do not have enough money');
}
