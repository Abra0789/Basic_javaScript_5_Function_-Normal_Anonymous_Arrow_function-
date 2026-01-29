//create func to search a number
//Using arrow function
const searchNumb=(arr, num)=>//2nd parameter to find =num and 1st one is for the list
{
  let rslt = "not found"; // default value declaration  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === num)//by checking every new numbers with the parameter(num) to find declared value in calling part (from outside of the function)
      result = "found";
  }
  return result;
};
const numbers = [-2,5,-1,3,0];
const searchNumber = searchNumb(numbers,3);
console.log("Capturing all the positive numbers:",searchNumber);