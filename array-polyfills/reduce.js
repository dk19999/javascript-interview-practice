Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new Error(`${callback} is not a function`);
  }

  const argumentsLength = arguments.length;

  if (!this.length) {
    if (argumentsLength < 2) {
      //if no initial value is provided and array is empty, throw Error
      throw new Error("Reduce of empty array with no initial value");
    }
    return initialValue;
  }

  let total = initialValue;
  let currentIndex = 0;

  if (argumentsLength < 2) {
    //When there is no initial value set first element as total
    total = this[0];
    currentIndex = 1;
  }

  while (currentIndex < this.length) {
    total = callback(total, this[currentIndex], currentIndex, this);
    currentIndex++;
  }

  return total;
};
