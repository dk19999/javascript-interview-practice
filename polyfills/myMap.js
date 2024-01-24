// Map Polyfill

Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new Error(`${callback} is not a function`);
  }

  const arr = this;
  const length = arr.length;
  const result = [];

  for (let i = 0; i < length; i++) {
    const item = callback.call(thisArg, arr[i], i, arr);
    result.push(item);
  }

  return result;
};

//example

function multiplyFunction(item) {
  return item * this.value;
}

const multiplier = {
  value: 4,
  multiply: multiplyFunction,
};

const numbers = [1, 2, 3];

console.log(numbers.myMap(multiplier.multiply, multiplier)); //[4, 8, 12]
