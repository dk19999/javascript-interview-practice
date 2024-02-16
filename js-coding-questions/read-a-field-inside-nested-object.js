// ## AWS Frontend Interview Question

const obj = {
  A: {
    B: {
      C: {
        D: {
          E: 2,
        },
      },
    },
  },
};

// read(obj, 'A.B.C.D.E');
// should return 2


const read = (object, keyString) => {
  
  if (typeof object !== 'object' || object == null) {
    return undefined;
  }

	const keys = keyString.split('.')
  let result = object
  
  for(let i = 0; i<keys.length;i++){
  	result = result[keys[i]]
    if(result == null){
    	return undefined
    }
  }
  
  return result;

}