//for of 

["","",""]
[{},{},{}]

const arr= [1, 3, 4, 4, 4,]

for (const value of arr) {
    console.log(value)
    
}

const greetings="hello world!"
for (const greet of greetings) {
    console.log(`each charactor is ${greet}`)
    
}

//Maps

const map=new Map()
map.set('IN',"india")
map.set('USA',"United States")
map.set('FR',"France")
console.log(map)

for (const [key,value] of map) {
    console.log(key, ':-', value)
    
}

const myObject ={
    'game1': 'NFS',
    'game2': 'spideman'
}

// for (const [key,value] of myObject) {
//     console.log(key,':-',value)
    
// }