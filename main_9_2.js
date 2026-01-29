//All positive num 
//Using anonymous function
const posNumb = function(arr){
  let pos = []; //store all the positive num
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0)//to check all the nums are bigger than o 
    //all pos numb 
      pos.push(arr[i]);//pussing elements in the end of an array list
  }
  return pos;
};
const numbers = [-2,5,-1,3,0];
const positiveNumber = posNumb(numbers);
console.log("Capturing all the positive numbers:",positiveNumber);