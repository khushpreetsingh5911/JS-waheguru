// for loop 

for (let index = 0;
    index <= 20;
    index++) {
    const element = index;
    // console.log(element);

}

for (let i = 0;
    i <= 20;
    i++) {
    const element = i;
    if (element ==5) {
        ///console.log("5 is the best and great number of all time")
        
    }
    //console.log(element);

}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`)
    for (let a = 0; a <= 10; a++) {
        // console.log( i*a)
        
    }


}

 let myArray=['flash','batman','khush']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}


// break and continue

// for (let index = 1; index <= 10; index++) {

//     if (index== 5) {
//         console.log(`detected 5`);
//         break;
        
//     }
//     console.log(`value of i is ${index}`);

// }
for (let index = 1; index <= 10; index++) {

    if (index== 5) {
        console.log(`detected 5`);
        continue;
        
    }
    console.log(`value of i is ${index}`);

}