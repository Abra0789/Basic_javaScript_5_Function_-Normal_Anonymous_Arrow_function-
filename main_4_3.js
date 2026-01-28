const numb = (arr) =>
{
  let cnt =0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
      cnt++;
    }
  }
  return cnt;
}

const numbers = [1,2,3,4,5,6];
const result = numb(numbers);
console.log("Total even numbers in the array is:", result);