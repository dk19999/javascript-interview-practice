// Implement a function compute amount such that it adds the numbers passed to it as shown below and .value() returns the output.

// computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()

// Expected output: 143545000

// Navi | UI Engineer - 2 | Bangalore

function computeAmount() {
  let number = 0;
  let obj = {
    lacs: function (value) {
      number += value * 100000;
      return this;
    },
    crore: function (value) {
      number += value * 10000000;
      return this;
    },
    thousand: function (value) {
      number += value * 1000;
      return this;
    },
    value: () => number,
  };
  return obj;
}
