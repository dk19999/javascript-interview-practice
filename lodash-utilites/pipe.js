const val = { salary: 10000 };

const getSalary = (person) => person.salary
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);

const result = pipe(
  getSalary,
  addBonus,
  deductTax 
)(val); //7700

function pipe(...functions){
  return (value) => {
    let result = value;
    functions.forEach((fn) => {
      if(typeof fn === 'function'){
        result = fn(result)
      }
    })
  }

}