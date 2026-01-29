//reverse function
//Using anonymous function
const rev = function(arr){
  let rslt = "";
  for (let i = arr.length-1; i >= 0; i--)
  {
    rslt = rslt + arr[i] + "";
  }

  return rslt;
};

const numbers = [1,2,3,4];
const reverseNumber = rev(numbers);
console.log("The reverse num is:",reverseNumber);