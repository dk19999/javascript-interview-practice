function isDeepEqual(a, b) {
  if (typeof a !== typeof b) return false;

  if (typeof a !== 'object' || a === null || b === null) return a === b;

  // For Date objects, we are comparing their time values
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();

  // For arrays
  if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
          if (!isDeepEqual(a[i], b[i])) return false;
      }
      return true;
  }

  // For objects, comparing keys and their corresponding values
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;
  for (const key of aKeys) {
      if (!b.hasOwnProperty(key) || !isDeepEqual(a[key], b[key])) return false;
  }
  return true;
}

// Examples
console.log(isDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(isDeepEqual([1, 2, 3], [1, 2, 3]));           // true
console.log(isDeepEqual(new Date(2020, 0, 1), new Date(2020, 0, 1))); // true
console.log(isDeepEqual(null, null));                     // true
console.log(isDeepEqual(null, undefined));  //false

//this is basic implementation, it does not handle cyclic references