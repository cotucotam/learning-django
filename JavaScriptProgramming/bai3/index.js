let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")
console.log(num1)
function add(){
    
    console.log("add")
    console.log(num1)
    let result = num1 + num2
    console.log(result)
    sumEl.textContent = "Sum: "+result
}
function subtract(){
    let result = num1 - num2
    sumEl.textContent = "Substract: "+ result
}
function divide(){
    let result = num1 / num2
    sumEl.textContent = "Devide: "+ result
}
function multiply(){
    let result = num1 * num2
    sumEl.textContent = "Multiply: "+ result
}