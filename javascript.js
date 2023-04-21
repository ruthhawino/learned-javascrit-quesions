// //Print all even numbers from 0 – 10
// Sort an array from lowest to highest
// Create a function that reverses an array
// Calculate the sum of numbers within an array
// Return the number of vowels in a string



// function to print even numbers from 0 to 10
function printEvenNumbers() {
    for (let i = 0; i <= 10; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  
  // function to sort an array from lowest to highest
  function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  console.log(sortArray);
  
  // function to calculate sum of numbers in an array
  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  console.log(sumArray);
  
  // function to count number of vowels in a string
  function countVowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  
  // example usage
  printEvenNumbers();
  let arr = [3, 1, 4, 1, 5] 
  