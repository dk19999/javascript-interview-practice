// Requirement 
// Implement promiseMerge to accept multiple promises, returning a promise that:

// Sums values for number inputs.
// Concatenates strings for string inputs.
// Computes AND operation for boolean inputs.
// Concatenates arrays for array inputs.
// Merges objects for object inputs.
// Rejects with TypeError for mixed input types.

async function promiseMerge(...promises) {
  if (!promises.length) throw new TypeError('No promises provided');

  const results = await Promise.all(promises);
  const getItemType = (item) => Array.isArray(item) ? 'array' : typeof item;
  const firstType = getItemType(results[0]);

  // Ensure all results are of the same customized type
  if (!results.every(result => getItemType(result) === firstType)) {
    throw new TypeError('All inputs must be of the same type');
  }

  const mergeStrategies = {
    number: (values) => values.reduce((acc, value) => acc + value, 0),
    string: (values) => values.join(''),
    boolean: (values) => values.every(Boolean),
    array: (values) => values.flat(),
    object: (values) => Object.assign({}, ...values),
  };

  // Get the appropriate merge function based on the type of the first result
  const mergeFunction = mergeStrategies[firstType];
  if (!mergeFunction) {
    throw new TypeError(`Unsupported type: ${firstType}`);
  }

  return mergeFunction(results);
}

// const value = await promiseMerge(Promise.resolve(1), Promise.resolve(2));
// => 3

// const value = await promiseMerge(Promise.resolve("devtools"), Promise.resolve(".tech"));
// => devtools.tech

// const value = await promiseMerge(Promise.resolve([1, 2, 3]), Promise.resolve([4, 5, 6]), Promise.resolve([7, 8, 9]));
// => [1,2,3,4,5,6,7,8,9]

// const value = await promiseMerge(Promise.resolve({ a: 1 }), Promise.resolve({ b: 2 }), Promise.resolve({ c: 3 }));
// => { a: 1, b: 2, c: 3};

// const value = await promiseMerge(Promise.resolve(true), Promise.resolve(false));
// => false

// const value = await promiseMerge(Promise.resolve("devtools"), Promise.resolve(1));
// => rejects with TypeError

// const value = await promiseMerge(Promise.resolve("devtools"), Promise.resolve([1, 2]));
// => rejects with TypeError

// const value = await promiseMerge();
// => rejects with TypeError
