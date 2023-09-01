//singleton
//object literals
Object.create//


const mysym= Symbol("keyone")
const Jsuser = {
    name: 'hitesh',email:"hitesh@gamil.com", age: 20, location:
        "jaipur", isLoggedIn: false, lastLoginDays: ["mondy", "sunday"], [mysym]:"mykeyone"
}

console.log(Array.from({ name: "khush" }))
console.log(Jsuser.age)
console.log(Jsuser["age"])
console.log(Jsuser[mysym])

Jsuser.email="hitesh@chatgpt.com"
Object.freeze(Jsuser)
Jsuser.email="hitesh@Microsoft.com"
console.log(Jsuser);
