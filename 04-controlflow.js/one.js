//if 
const isUserloggedin= true
const temperature= 45
if(temperature < 40){
console.log("less than 50");

}
else{
    console.log("temperature is greater than 50")
}

const score= 300

if (score > 400)
{
    const power = "fly"
    console.log(`user power: ${power}`)
}
else{
    console.log("you can't fly the drone in your life as pilot so fuch off")
}



// if (balance > 500) console.log("test");
// const balance = 2000

// if(balance < 500)
// {
//     console.log("less than 500");
// }
// else if(balance < 750)
// {
//     console.log("less than 750");

// }
// else if(balance < 900)
// {
//     console.log("less than 900");

// }
// else{
//     console.log("less than 1200")
// }


const userLoggedin = true
const debitCard = true
const loggedInfromGoogle= false
const loggedInfromEmail= true
if (userLoggedin && debitCard) {
    console.log("allow to by a course")
    
}
if(loggedInfromEmail || loggedInfromGoogle)
{
console.log("user logged in ")    
}

let valone;
// valone = 30 ?? 20

// valone = null ?? 30
valone = undefined ?? 34
console.log(valone);

// terniary operator

// condition ? true : false
 
const teaprice= 329

teaprice<= 80 ? console.log("less than 80") : console.log("more than 80")
