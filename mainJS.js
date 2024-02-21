alert("Hello guest, have a nice day");

console.log ("Hello Oussama");


// I String Manipulation Functions: //

// 1 Reverse a String //

let original =" Hello Oussama"; 
let reversed = original.split('').reverse().join(''); 
console.log (reversed);



// 2 count the number of characters in a string //

function countOccurrencesOfcharacterinString(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }

// 3 capitalizes the first letter of each word in a sentence //

const mySentence = "Hello, again world";
const words = mySentence.split(" ");

words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");


// II Array Functions:  // 

// 1  find the maximum and minimum values in an array of numbers // 


function findMinMax() {
    let Arr = [10, 7, 5,3, 1];
 
    let minValue = Math.min(...Arr);
    let maxValue = Math.max(...Arr);
     
    console.log("Minimum element is:" + minValue);
    console.log("Maximum Element is:" + maxValue);
}
 
findMinMax()

// 2  calculates the sum of all elements in an array // 

// create an array
let myNums = [1, 2, 3, 4, 5];

// create a variable for the sum and initialize it
let sum = 0;

// iterate over each item in the array
for (let i = 0; i < myNums.length; i++ ) {
  sum += myNums[i];
}

console.log(sum) // 15

// 3 filters out elements from an array based on a given condition // 

people = [
    {id : "1", name : "Thomas", gender : "m"},
    {id : "2", name : "Jhon", gender : "m"},
    {id : "3", name : "Martin", gender : "f"},
    {id : "4", name : "Bob", gender : "m"},
    {id : "5", name : "Mark", gender : "m"},
    {id : "6", name : "Heff", gender : "f"},
    {id : "7", name : "Mankind", gender : "f"},
    {id : "8", name : "Lucy", gender : "m"}
]
var id_filter = ["1","4","5","8"], filteredPeople = []; 
for( var i=people.length-1; i>=0; --i){ 
  if( id_filter.indexOf( people[i].id ) != -1 ){ 
    filteredPeople.push( people[i] ); 
  } 
}
console.log( filteredPeople );

// III // 

// 1 Write a function to calculate the factorial of a given number //

let n = 8; 
 
function factorial(X) { 
    let ans = 1; 
     
    if(X === 0)
        return 1;
    for (let i = 2; i <= X; i++) 
        ans = ans * i; 
    return ans; 
}
 
console.log(factorial(X));


// 2 : if a number is prime or not // 



let inputValue= 7;
let isprime=inputValue==1? false:true;  //bcoz 1 is not prime

for(let i=2;i<inputValue;i++){
  inputValue%i==0? isprime*=false :isprime*=true;
};

alert(`${inputValue} is ${isprime? 'prime':'not prime'} number`);



  // 3 : generate the Fibonacci sequence up to a given number of terms //


  // program to generate fibonacci series up to n terms

// take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

  