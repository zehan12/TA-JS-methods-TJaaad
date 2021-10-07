let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade

let average = persons.reduce((acc,v)=>{
   return acc + v.grade
},0) / persons.length;
console.log(parseInt(average));

// Find the average grade of male

const averageOfMale = (array) => array.reduce((acc,v)=> v.sex === "M" ? acc + v.grade : acc,0) / array.length

function averageOfMale(array){
  let result = array.reduce((acc,v)=>{
    if ( v.sex === "M" ){
      acc.sum += v.grade
      acc.maleCount += 1
    }
      return acc
  },{sum:0,maleCount:0}) 
 
  return result.sum / result.maleCount;
}

//*? forEach Method

function averageOfMale(array){
  let sum = 0,count = 0

  array.forEach(v => {
    if ( v.sex === "M" ){
      sum += v.grade
      count += 1
    }  
  });
  let avg = sum / count
  return avg.toFixed(2)
}

// Find the average grade of female

//*? forEach Method

function averageOfMale(array){
  let sum = 0;
  let avg;
  array.forEach(v => {
    if ( v.sex === "M" ){
      sum += v.grade
    }  
    avg = sum / array.length
  });
  return avg.toFixed(2)
}

// Find the highest grade


function highestGrade(array){
  let result = array.reduce((acc,v)=>{
      if ( acc < v.grade ){
        acc = v.grade
      }
      return acc
  },0)
    return result
}

//*? forEach


function highestGrade(array){
  let highest = 0;
  array.forEach((v)=>{
    if ( highest < v.grade ){
        highest = v.grade 
    }
  })
  return highest
}


// Find the highest grade in male

function highestGradeOfMale(array){
  let result = array.reduce((acc,v)=>{
      if ( v.sex === "M" &&  acc < v.grade ){
        acc = v.grade
      }
      return acc
  },0)
    return result
}

//*? forEach

let highest = 0;
function highestGradeMale(array){
    array.forEach((v)=>{
      if ( v.sex === "M" ){
        if ( highest < v.grade ){
          highest = v.grade
        }
      }
     }
    )
    console.log(highest)
  }

// Find the highest grade in female


//*? forEach

function highestGradeMale(array){
  array.forEach((v)=>{
    if ( v.sex === "F" ){
      if ( highest < v.grade ){
        highest = v.grade
      }
    }
   }
  )
  console.log(highest)
}

// Find the highest grade for people whose name starts with 'J' or 'P'

function highestGradeJP(array){
  let result = array.reduce((acc,v)=>{
    if ( v.name.startsWith("J") || v.name.startWith("P") && acc < v.grade ){
        acc = v.grade
  }
      return acc
},0)
    return result;
}

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

let fruitsObj = {};

function fruitBasket(array){
  let result = array.reduce((v) => {
    if ( firutsObj[v] == undefined ){
          fruitsObj[v] = 1
    } else {
          fruitsObj[v] += 1;
    }
    
},0)
      return fruitsObj
}

//*? 




/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/



const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array

data.reduce((pv,cv)=> pv.concat(cv),[]);

//*? forEach
let newData;
function flatThe(array){
  array.forEach((v)=>{
    newData = array.flat(Infinity);
  })
    return newData;
}

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array

dataTwo.reduce((pv,cv)=> pv.concat(cv),[]);

//*? forEach
let newData;
function flatThe(array){
  array.forEach((v)=>{
    newData = array.flat(Infinity);
  })
    return newData;
}

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

function operation(number){
  let result = pipeline.forEach((v)=>{
      
  })
}


let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/



let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8

