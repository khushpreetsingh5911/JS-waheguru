const nums = [1,2,3]

// const newnums= nums.reduce( function(acc,curvl){
//     console.log(`acc: ${acc} and curval: ${curvl}`)
//     return acc + curvl
// },0)

const myNums = nums.reduce((acc, curvl)=> acc + curvl,0)
console.log(myNums)

const shoppingCart = [
    {
    itemName: "js course",
    price: 299,

},
{
    itemName: "android course",
    price: 2949,

},
{
    itemName: "mobile course",
    price: 699,

},
{
    itemName: "AI course",
    price: 199,

},
]

const shopping = shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(shopping)