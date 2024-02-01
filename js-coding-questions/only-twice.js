
//Dream 11 SDE 2

// Implement a function onlyTwice which stores two instances a function invocation and returns first on odd calls and second on even calls.

// console.log(myFancyAdd(2, 3)) // 5
// console.log(myFancyAdd(1, 2)) // 3
// console.log(myFancyAdd(3, 4)) // 5
// console.log(myFancyAdd(3, 7)) // 3

function onlyTwice(fn) {
  let firstTime = null;
  let secondTime = null;

  //keeping track of this because can't just rely on if first one and second one exists because fn may return a falsy value as well
  let firstTimeCalled = false;
  let secondTimeCalled = false; 

  let isEven = false;

  return (...args) => {
    isEven = !isEven;
    if (isEven) {
      if (!firstTimeCalled) {
        firstTime = fn(...args);
        firstTimeCalled = true
      }
      return firstTime;
    } else {
      if (!secondTimeCalled) {
        secondTime = fn(...args);
        secondTimeCalled = true
      }
      return secondTime;
    }
  };
}

const addTwoNumbers = (a, b) => a + b
const myFancyAdd = onlyTwice(addTwoNumbers)

console.log(myFancyAdd(2, 3)) // 5
console.log(myFancyAdd(1, 2)) // 3
console.log(myFancyAdd(3, 4)) // 5
console.log(myFancyAdd(3, 7)) // 3