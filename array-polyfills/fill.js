Array.prototype.myArrayFill = function(item, start = 0, end = this.length) {
  const length = this.length;

  let startRange = start < 0 ? Math.max(start + length, 0) : Math.min(start, length);
  let endRange = end < 0 ? Math.max(end + length, 0) : Math.min(end, length);

  for (let i = startRange; i < endRange; i++) {
      this[i] = item;
  }

  return this;
};