/**
 * Created by siqi on 9/24/16.
 */

//Given this empty array, perform the following tasks
var arr1 = [];

//Task 1: populate the empty array with 10 random, *rounded*, numbers between 0 and 100
//Hint: within a 'for' loop, use 'Math.random() * 100' and 'Math.round()'

/*arr1.push(1,2,3,4);
console.log(arr1);*/

    for(i=0; i<10; i++){
    	
    	rand = Math.random()*100;
    	//arr1[i]= Math.round(rand);
    	//arr1[i]=rand;
    	arr1.push(Math.round(rand));
    }
console.log(arr1);
	
//Task 2: remove the first element in the array and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
arr1.shift();
console.log(arr1);

//Task 3: remove the last element in the array, and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

arr1.pop();
console.log(arr1);

//Question: how many elements does arr1 have at this moment?

console.log(arr1.length);

//Task 4: given a new empty array arr2, populate it with the exact same values as in arr1
//...but in reverse order
//Hint: use the '.unshift()' method of array. Can you look up the API for it?
var arr2 = [];
 for(i=0; i<arr1.length; i++){
 arr2.unshift(arr1[i]);
 }

//arr2.unshift(arr1[arr1.length-1],arr1[arr1.length-2],arr1[arr1.length-3],arr1[arr1.length-4]);
console.log(arr2);

//Task 5 OPTIONAL: filter out all the odd values in arr1, keeping the even values
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
var arr_temp=[]

function even(value){
  if(value%2==0){
  	return value;
  }

// for(i=0; i<arr1.length; i++){
//  if(arr1[i]%2==0){
//   arr_temp.push(arr1[i]);
//  }
// }
//	return arr_temp;
}

var arr3 = arr1.filter(even);

console.log(arr3);




