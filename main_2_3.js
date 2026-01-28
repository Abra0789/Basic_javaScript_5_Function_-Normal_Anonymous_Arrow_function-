const numb = (arr) => {
  let count = 0;
  for (let i in arr)
    count++
  return count;
}
const numbers = [10, 20, 30, 40];
const rslt = numb(numbers)
console.log("The number is:", rslt)