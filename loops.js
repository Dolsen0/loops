//LOOPS

/*  for loops

for([initialization]; [condition]; [iteration]){
   [statement];
}

initialization - typically used to initialize a counter variable
condition - Runs until condition is false.
iteration - how the loop should proceed
statement - what should be done (return will end the loop with the first positive result)

*/

// prints 0-9 in a for loop
// for (let i = 0; i < 10; i++) { 
//   console.log("iteration number", i);
// }



// const array =[ 4, 5, 87, 6, 3, 5]

// //loops through array and prints each item in the array.



// for(let i = 0; i <= array.length - 1; i++){
//     console.log(array[i])
// }

// //loops through array and prints each item in the array in reverse order.

// for(let i = array.length - 1; i > -1; i--){
//     console.log(array[i])
// }

// const names = [
//     "john ",
//     "matt ",
//     "damian ",
//     "vitoria"
// ]

// let bocaCode = []

// for(let i = 0; i <= names.length - 1; i++){
//     bocaCode = bocaCode + names[i]
// }
// console.log(`${bocaCode} are at BocaCode`)




// for(let i = 10; i >= 0; i--){
//     if (i === 0){
//         console.log("Blast Off!");
//         return;
//     }
//     console.log(i);
// }


~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// do while
//will run at least once. checks condition after running first time.

/* 

do {
    statement;
} while (condition);

*/


// let i = 0;                  
// do {
//     i++;                    
//     console.log(i);
// } while (i < 10);


~~~~~~~~~~~~~~~~~~~~~~~~~~~``


//while loops
//checks statement before running loop

/*

while (condition) {
    statement    
}

*/

// let i = 0 
// while (i < 10){
//     i++;
//     console.log(i)
// }


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//for in loop
// iterates over propertiees of object

/*

for (key in object) {
    statement;
}

*/

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
// }


// for (const key in obj){
//     console.log(key)
//}
// prints a, b, c, d


// const persons = {
//     name: "Derek",
//     age: 35,
//     inClass: true,
// }


// for(const key in persons){
//     console.log(key)
// }


// for(const key in persons){
//     console.log(persons[key])
// }


//for of
// iterates over value of array

/*
for(value of array){
    statement;
}
*/

// arrayOfNames = ["matt", "manny"]
// for(value of arrayOfNames){
//     console.log(value)
// }

// for(let i = 0; i <15; i++){
//     if(i===5){
//         break;
//     }
//     console.log(i)
// }


//break
//ends the loop

//continue 
//continues through the loop

// for(let i = 0; i <20; i++){
//     if(i === 10){
//         console.log("Ten")
//         continue;
//     }
//     console.log(i)
// }