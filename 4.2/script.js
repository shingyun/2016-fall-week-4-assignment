/**
 * Created by siqi on 9/24/16.
 */

//Create a function such that, given argument arr, an array, it returns the same array in reverse order

//var arr1=[1,2,3,4,5];
//var arr2=[];
//for(i=0; i<arr1.length; i++){
//  arr2.unshift(arr1[i]);
//}
//console.log(arr2);


function reverseArray(arr){
    //your code here
    var newarr = [];
    for(i=0; i<arr.length; i++){
    newarr.unshift(arr[i]);
    }
    return newarr;
}
console.log( reverseArray([1,2,3,4,5]) ); //should log [5,4,3,2,1]