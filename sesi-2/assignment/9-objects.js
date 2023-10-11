/** JavaScript Objects */
const phone = {
  brand: 'Samsung',
  type: 'Galaxy A52',
  memory: '8GB',
  storage: '128GB',
  color: 'Black',
};

console.log(phone); // { brand: 'Samsung', type: 'Galaxy A52', memory: '8GB', storage: '128GB', color: 'Black' }
console.log(phone.brand); // Samsung
console.log(phone['brand']); // Samsung

/** Reassigning value of a property */
phone.color = 'White';
console.log(phone.color); // White
