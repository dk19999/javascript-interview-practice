Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new Error(`${callback} is not a function`);
  }

  const arr = this;
  const length = arr.length;
  const result = [];

  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
};
