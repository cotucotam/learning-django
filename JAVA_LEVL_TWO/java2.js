// function hello(name="cotam"){
//   console.log("hello world!"+name);
// }
// function addNum(num1, num2){
//   console.log(num1+num2);
// }
// function formal(name="Tam", title='sir'){
//   console.log(title+" "+name);
// }
// function timesFive(numInput){
//   var result = numInput * 5
//   return result
// }

// // GLOBAL SCOPE
// var v = "GLOBAL V"
// var stuff = "GLOBAL STUFF"

// function fun(stuff){
//   console.log(v);
//   stuff = "Reassign stuff inside func"
//   console.log(stuff);
// }

// fun();
// console.log(stuff);


function nextInLine(arr, item){
  arr.push(item);
  return arr.shift();
}

var testArr = [ 1,2,3,4,5];
console.log("before: "+ JSON.stringify(testArr));
console.log("After: "+ JSON.stringify(testArr));