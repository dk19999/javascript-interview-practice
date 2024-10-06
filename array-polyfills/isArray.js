Array.prototype.myIsArray = function(){
  return Object.prototype.toString.call(this) === '[object Array]'
}