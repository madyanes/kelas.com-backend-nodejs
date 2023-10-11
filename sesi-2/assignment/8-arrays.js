/** JavaScript Arrays */
const hobbies = ['Sports', 'Cooking'];

/** Accessing Elements */
console.log(hobbies[0]); // Sports
console.log(hobbies[1]); // Cooking

/** Getting the Last Element */
console.log(hobbies[hobbies.length - 1]); // Cooking

/** Reassigning Element */
hobbies[1] = 'Coding';
console.log(hobbies); // ['Sports', 'Coding']

/** Properties and Methods */
console.log(hobbies.length); // 2

const newHobbies = ['gaming', 'music'].concat(hobbies);
console.log(newHobbies); // ['gaming', 'music', 'Sports', 'Coding']

newHobbies.pop();
console.log(newHobbies); // ['gaming', 'music', 'Sports']

newHobbies.push('traveling');
console.log(newHobbies); // ['gaming', 'music', 'Sports', 'traveling']

newHobbies.reverse();
console.log(newHobbies); // ['traveling', 'Sports', 'music', 'gaming']
