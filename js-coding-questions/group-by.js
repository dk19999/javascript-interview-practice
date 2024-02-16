// Input: 
// array = [
//   [1, 2, 3],
//   [1, 3, 5],
//   [1, 5, 9]
// ]
// fn = function (list) { 
//   return String(list[0]); 
// }
// Output: 
// { 
//   "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] 
// }

function groupBy(arr, fn) {
  const result = {};
  arr.forEach((item) => {
    const key = fn(item);
    result[key] = result[key] ?? [];
    result[key].push(item);
  });
  return result;
}
