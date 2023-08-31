const myArry =[1,3,4,5,6,7 ,true, 'hitesh'];

const newArry=['hitesh',"khush"];
console.log(newArry)
console.log(typeof(newArry))

myArry.push(10)
console.log(myArry)

newArry.push(10)
console.log(newArry)


console.log("a", myArry)

const mynewArry= myArry.slice(1,4)
console.log(mynewArry)

console.log("b", myArry)

const narray=myArry.splice(1,4)
console.log("c" , myArry)
console.log(narray)
