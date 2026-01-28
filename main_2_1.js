//a araay list is given
//use loop to find out how many elements are there in this list and count ot
//without using length
//formal function

function numb(arr){
  let count = 0;
  for(let i in arr)
    count++;
  return count;
}
const numbers = [10, 20, 30, 40];
const rslt = numb(numbers);
console.log("The number is:", rslt);
