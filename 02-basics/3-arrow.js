const user = {
    username: "khush"
    , price: 333
    , welcomeMessage: function () {
        console.log(`${this.username} welcome to website`);
        console.log(this)
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// function chai()
// {
//     let username="khush"
//     console.log(this.username)
// }
// chai()

const chai = () => {
    let user = "khush"
    console.log(this.user)

}
chai()

// const addtwo=(num1 , num2) => {

//     return num1 + num2
//  }
//  console.log(addtwo(3,5))

// const addtwo = (num1, num2) => (num1 + num2)


const addtwo = (num1, num2) =>({username:"khush"})

console.log(addtwo(3, 5))