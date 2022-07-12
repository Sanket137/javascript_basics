
// BASICS OF JAVASCRIPT

// Array - variable that holds multiple values

/* multi line 
arrays */



const toDoList = [ 
    { 
        id: 01,
        task: 'learn basics of Html',
        status: true
    },

    { 
        id: 02,
        task: 'learn basics of CSS',
        status: true
    },

    { 
        id: 03,
        task: 'learn basics of javascript',
        status: false
    }




 ];


 toDoList.push(
    {
        id: 04,
        task: 'learn Bootstrap',
        status: false
    },
    {
        id: 05,
        task: 'learn React',
        status: false
    },
    {
        id: 06,
        task: 'learn MongoDB',
        status: false
    }
)






// console.log(toDoList[2].task);







// for loop


// for (let i= 2 ; i <= 50 ; i++){
//     console.log(`this value ${i}`);
// }

// while loop

// let i= 50; 
// while (i >= 6) {
//     console.log(`while loop number: ${i}`);
//     i--;

// }

// let j= 3;
// while(j <= 50){
//     console.log('loop value' + j);
//     j++;
// }

// for loop 

// for (let output of toDoList){


//     console.log(output.task);
// }

// High ordered array method for Each,  map, filter

    // for Each

// toDoList.forEach(function(result){

//     console.log(result.task);
    
// });

/*
toDoList.forEach (function(output){

    console.log(output.task);
})

    // map


const resultMap = toDoList.map(function(output){

    return output.task;
})

console.log (resultMap.reverse());
    
    
// FILTER

const resultFilter = toDoList.filter(function(output){

    return output.status === true;
            }).map(function(dataOutput){
                 return dataOutput.id;   
            });

console.log (resultFilter);

*/




// CONDITIONALS

// if statement

// const x = 'sanket';

// if(x === 25){
//     console.log('x is 25')
// }
// else { console.log('x is not 25')}


// let input1 = prompt('input the para');

// if (input1 > 10){
//     console.log('input is greater than 10');
// } else {  console.log('input is smaller than 10')}


// const data = 1;

// if (data === 20){
//     console.log('input is 20');
// } else if (data > 20 && data === 1){
//     console.log('input is greater than 20 ' && 'input is 1');
// } else if (data < 20){
//     console.log('input is less than 20')
// } 
//  else {'input'}




// const a = 5;
// const b = 15;

// if (a > 5  || b > 20){
//     console.log('a is greater than 5 ')
// } else if (a > 20) {
//     console.log('a is greater than 10')
// } else {
//     console.log ('a is less than 10')
// }


const s = 'Hello World';
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split('');


console.log(val.reverse());