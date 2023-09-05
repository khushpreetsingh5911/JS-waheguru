// const coding=["js"
// ,"uby"
// ,"python"


// ]
// const values = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values)

const myNums=[1,3,4,5,6,76,8,8,]

const newnumbs= myNums.filter((num)=>{
    return num >= 4
    
}
)

const oldnums=[]

myNums.forEach( (num)=>{
    if(num > 40)
    {
        oldnums.push(num)

    }
    else{
        // console.log("no matching")
    }
})
// console.log(oldnums)

