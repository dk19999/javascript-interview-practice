// Zeta frontend engineer question

const memoize = (fn) => {
  const result = {}
  return function(...args){
    const key = JSON.stringify(args);

    if(key in result){
      return result[key]; 
    }
    const res = fn(...args);
    result[key] = res; 
    return res;
  }
}