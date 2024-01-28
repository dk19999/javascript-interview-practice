function throttle(func, timeFrame) {
  var lastRan = 0;
  return function (...args) {
      var now = new Date();
      if (now - lastRan >= timeFrame) {
          func(...args);
          lastRan = now;
      }
  };
}
