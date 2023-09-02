


function sayMyName(){
    console.log("k")
console.log("h")
console.log("u")
console.log("s")
console.log("h")
console.log("i")
}

sayMyName()

// function addTwoNumbers(number2, number3){
//     console.log( number2 + number3)
 
//  }
//  addTwoNumbers(6,7)
//  function addTwoNumbers(){
// let result = number2 + number3
// return result
// return 2 + 3
 
//  }
//  const result = addTwoNumbers()
// console.log('result:', result)

function loginUserMessage(username="hitesh"){
    if(!username){
        console.log("please enter a username")
        return


    }
return `${username} just logged in `
}
console.log(loginUserMessage('brar'))

function calculatorCartPrice(...num2){
    return num2


}
console.log(calculatorCartPrice(20,400,233))

// const user={
//     username:"khush"
//     ,price:233
    

// }
function handleobject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user)
handleobject({
    username:"same"
    ,price:23
})

const newArray=[233,234,234,22,]
 function value(getarray){
    return getarray[3]
 }
console.log(value(newArray))