//All positive num 
//count the positive numbers
function cntposNumb(arr){
  let count = 0; //to count the all pos numbs
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0)//to check all the nums are bigger than o 
    //all pos numb 
      count++;
  }
  return count;
};
const numbers = [-2,5,-1,3,0];
const countpositiveNumber = cntposNumb(numbers);
console.log("Capturing all the positive numbers:",countpositiveNumber);