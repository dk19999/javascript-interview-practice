function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then((result) => {
        resolve(result);
      });
    });
  });
}
