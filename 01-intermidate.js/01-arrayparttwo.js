const marvel_heroes= ["thor", "ironman", "spiderman"]
const dc= ["superman", "flash", "dr"]


// marvel_heroes.push(dc)

// console.log(marvel_heroes)


// const allheroes= marvel_heroes.concat(dc)
// console.log(allheroes)

const allheroes= [...marvel_heroes,...dc]
console.log(allheroes)

const anotherarray=[1,3,3,[4,5,6] ,7,8,[6,7, [4,6]]]
let realanotheraray= anotherarray.flat(Infinity)
console.log(realanotheraray)

console.log(Array.isArray("khush"))
console.log(Array.from("khush"))
console.log(Array.from({name:"khush"}))

let score1= 100
let score2= 300

console.log(Array.of(score1,score2))
