Array.prototype.myFindIndex = function (fn, thisArg){
	if(typeof fn !== 'function'){
  	throw new Error(`${fn} is not a function`)
  }
  for(let i=0; i<this.length; i++){
  	if(fn.call(thisArg, this[i], i, this)){
    	return i
    }
  }
  return -1
}