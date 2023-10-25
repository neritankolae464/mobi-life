/* 
* Filename: complexCode.js
* Description: This code snippet demonstrates a complex JavaScript implementation 
* showcasing various advanced concepts and techniques.
*/

// Custom Array class to demonstrate inheritance
class CustomArray extends Array {
  // Custom method to calculate the sum of all elements in the array
  getSum() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  }
}

// Function to generate Fibonacci sequence using generators
function* fibonacciGenerator() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Creating a Fibonacci sequence array using generator function
const fibonacciArray = [...(function*() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
})()].slice(0, 20);

// Async function to fetch data from an API endpoint
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch(error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

// Custom error class to handle specific scenarios
class CustomError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.errorCode = errorCode;
  }
}

// Example usage of the complex features
function main() {
  const numbers = new CustomArray(1, 2, 3, 4, 5);
  console.log(`Sum of numbers array: ${numbers.getSum()}`);
  
  const fibonacciNumbers = fibonacciArray.join(", ");
  console.log(`First 20 numbers in Fibonacci sequence: ${fibonacciNumbers}`);
  
  fetchData('https://api.example.com/data')
    .then(data => console.log("Data fetched successfully: ", data))
    .catch(error => console.error("Error while fetching data: ", error));
  
  try {
    throw new CustomError("Custom error occurred.", 500);
  } catch(error) {
    console.error("Custom error details: ", error);
  }
}

main();