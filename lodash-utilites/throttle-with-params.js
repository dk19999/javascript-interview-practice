function throttle(cb, time) {
  if (typeof cb !== "function" || typeof time !== "number") {
    throw new Error(
      "Callback should be a function and time should be a number"
    );
  }
  let timer = null;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        cb(...args);
        clearTimeout(timer);
        timer = null;
      }, time);
    }
  };
}