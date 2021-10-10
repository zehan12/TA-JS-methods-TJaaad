// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers

numbers.indexOf(101);

// - Find the last index of `9` in numbers

numbers.lastIndexOf(9);

// - Convert value of strings array into a sentance like "This is a collection of words"

strings.toString();

// - Add two new words in the strings array "called" and "sentance"

strings.push("called","sentance");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

strings.join(' ');

// - Remove the first word in the array (strings)

strings.shift();

// - Find all the words that contain 'is' use string method 'includes'

strings.includes('is');

// - Find all the words that contain 'is' use string method 'indexOf'

st

// - Check if all the numbers in numbers array are divisible by three use array method (every)

numbers.every( ( num ) => num % 3 === 0 );

// -  Sort Array from smallest to largest

numbers.sort((a,b) => a - b );

//or

function smallestToLargest ( a , b ){
  return a - b ; 
}

numbers.sort(smallestToLargest);


// - Remove the last word in strings

strings.pop();

// - Find largest number in numbers

let num = -Infinity;

numbers.forEach((v)=>{
     if ( num < v ){
        num = v;
     }  
})
console.log(num)

// - Find longest string in strings

//var strings = ['This', 'is', 'a', "jehhan",'collection', 'of', 'words'];
//1
function findLong(strings){
  let max="";
   for(let i=0;i<strings.length;i++){

       if(max < strings[i].length){
           max=strings[i]
       }
   }
  return max
 }

//2
 function findLong(strings){
  let first=strings[0]
   for(let i=0;i<strings.length;i++){
         console.log(first,strings[i])
       if(first.length<strings[i].length){
             
           first=strings[i]
       }
   }
   return first;
 }

//3
  function findLong(aray){
  let longestString = ""
  aray.forEach(v => {
    if(v.length > longestString.length ){
      longestString = v
    }
  } )

  return longestString
  }

4//
  strings.sort((a,b) => b.length - a.length)[0]

// - Find all the even numbers

let evenNumbers = numbers.filter((num) => num % 2 === 0 );
console.log(evenNumbers);

// - Find all the odd numbers

let oddNumbers = numbers.filter((num) => num % 2 != 0 );
console.log(oddNumbers);

// - Place a new word at the start of the array use (unshift)

strings.unshift("Thiss");

// - Make a subset of numbers array [18,9,7,11]

numbers.slice(3,7);

// - Make a subset of strings array ['a','collection']

strings.slice(2,4);

// - Replace 12 & 18 with 1221 and 1881

numbers.splice(1,1,1221);
numbers.splice(3,1,1881);

// - Replace words in strings array with the length of the word

let wordsLength = strings.map(v => v.length );
console.log(wordsLength);

// - Find the sum of the length of words using above question

let sum = 0;
wordsLength.forEach((v) => sum += v );
console.log(sum);


// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

customers.filter((v) => v.firstname[0] === 'J');

customers.filter((v) => v.firstname.startsWith("J"));

// - Create new array with only first name

let firstNames = customers.map((v) => v.firstname );
console.log(firstNames);

// - Create new array with all the full names (ex: "Joe Blogs")

let fulNames = customers.map((v) =>  v.firstname + " " + v.lastname);
console.log(fulNames);

// - Sort the array created above alphabetically

fulNames.sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.

let vowelName = customers.filter((v) => {
     if ( v.firstname.includes('a') || v.firstname.includes('e') || v.firstname.includes('i') || v.firstname.includes('i') || v.firstname.includes('o') || v.firstname.includes('u') ){
       return true 
     } else{
       return false
     }
})


let vowals = ['a','e','u','i','o','A','E'] 
let vowelName = customers.filter(obj => obj.firstname.split('').some(letter=> vowals.includes(letter)))
