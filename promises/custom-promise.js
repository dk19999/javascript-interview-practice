class Promise {
  constructor(handler) {
    this.status = "pending";
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn(value));
      }
    };

    const reject = (value) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.value = value;
        this.onRejectedCallbacks.forEach((fn) => fn(value));
      }
    };

    try {
      handler(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    return new Promise((resolve, reject) => {
      const fulfilledCallback = () => {
        try {
          const result = onFulfilled(this.value);
          result instanceof Promise
            ? result.then(resolve, reject)
            : resolve(result);
        } catch (err) {
          reject(err);
        }
      };

      const rejectedCallback = () => {
        try {
          const result = onRejected(this.value);
          result instanceof Promise
            ? result.then(resolve, reject)
            : reject(result);
        } catch (err) {
          reject(err);
        }
      };

      if (this.status === "pending") {
        this.onFulfilledCallbacks.push(fulfilledCallback);
        this.onRejectedCallbacks.push(rejectedCallback);
      } else if (this.status === "fulfilled") {
        fulfilledCallback();
      } else if (this.status === "rejected") {
        rejectedCallback();
      }
    });
  }
}

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('resolved first one'), 1000);
});
p1.then((res) => {
  console.log(res);
  return new Promise(resolve => {
      setTimeout(() => resolve('resolved second one'), 1000);
  });
}).then(res => {
  console.log(res);
});
