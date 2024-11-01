Promise.any = function (promises) {
  const errors = new Array(promises.length);
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          resolve(promises);
        })
        .catch((err) => {
          errors[errors.length] = err;
          if (errors.length === promises.length) {
            reject(errors);
          }
        });
    });
  });
};
