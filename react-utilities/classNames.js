function classNames(...args) {
  const classes = [];

  args.forEach((arg) => {
    const argType = typeof arg;
    if (!arg) {
      return;
    }
    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
    } else if (argType === "object") {
      Object.entries(arg).forEach(([key, value]) => {
        if (value) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(" ");
}

const obj = new Map();
obj.cool = "!";
console.log(classNames({ Wow: [], dev: true, is: 3 }, obj));
console.log(classNames(null, undefined, Symbol(), 1n, true, false), "1");
