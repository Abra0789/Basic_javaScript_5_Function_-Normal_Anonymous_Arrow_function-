//All positive num 
function posNumb(arr){
  let pos = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0)
      pos.push(arr[i]);
  }
  return pos;
};
const numbers = [-2,5,-1,3,0];
const positiveNumber = posNumb(numbers);
console.log("Capturing all the positive numbers:",positiveNumber);