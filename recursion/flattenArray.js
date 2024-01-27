function flat(arr, depth = 1) {
  if (depth < 0 || !Array.isArray(arr)) {
    return [arr];
  }
  const result = [];
  arr.forEach((item) => {
    result.push(...flat(item, depth - 1));
  });
  return result;
}

//FB Followup: The input array can be really deep.
// What's the drawback of using recursion for this ??
// recursion does have a potential drawback: it can lead to a stack overflow error if the array is too deeply nested.
// This is because each recursive call adds a new frame to the call stack, and if the stack gets too deep, it exceeds the stack size limit.

// Can you do it without using recursion to avoid the risk of a stack overflow??

function flattenArrayIteratively(arr) {
  let stack = [...arr];
  let res = [];
  while (stack.length) {
    let next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}



// Also can you do it without using Stack data structure??
function flattenIteratively(arr) {
  let result = [];
  let queue = [...arr]; // Initialize queue with the original array

  while (queue.length > 0) {
    let item = queue.shift(); // Dequeue the next item

    if (Array.isArray(item)) {
      queue.unshift(...item); // If the item is an array, enqueue its elements to the front
    } else {
      result.push(item); // If the item is not an array, add it to the result
    }
  }

  return result;
}