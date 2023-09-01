const TinderUser = new Object()
TinderUser.id="123abc"
TinderUser.name="khush"
TinderUser.isLoggedIn= true
console.log(TinderUser)

const regularuser={
    email:"khush@gmail",
    fullname:{
        userName:{
            firstname:"singh",  
            lastname:"code"
        }
    }
}

console.log(regularuser.fullname)

const objectone={
    1:"a",2:"b"
}

const objecttwo={
    3:"a",4:"b"
}
//const obj3=Object.assign(objectone,objecttwo
const obj3={...objectone,...objecttwo}
console.log(obj3)

const users=[
    {id: 1, email:"khushgamil"},{id: 1, email:"khushgamil"},{id: 1, email:"khushgamil"},{id: 1, email:"khushgamil"},{id: 1, email:"khushgamil"}
]

users[1].email
console.log(TinderUser)
console.log(Object.keys(TinderUser))
console.log(Object.values(TinderUser))
console.log(Object.entries(TinderUser))

const course={
    course:"js in hindi",price:"200",courseInstructor:"khush"
}

const {courseInstructor:Instructor}=course
console.log(Instructor)

// {
//     "name":"khush","courseName":"js in hindi","price":"free"
// }