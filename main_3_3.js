//using array function
const numb = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    sum = sum + arr[i];
  return sum;
}

const numbers = [10, 20, 30];
const rslt = numb(numbers);
console.log("The number is:", rslt);