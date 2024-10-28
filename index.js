let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let answer = document.getElementById("sum-el")

function add(){
    answer.textContent = num1 + num2
    
}

function difference(){
    answer.textContent = num1 - num2
}

function devide(){
    answer.textContent = num1 / num2
    
}

function multiply(){
    answer.textContent = num1 * num2
    
}