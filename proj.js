function calcular(){
var num1 =  Number(document.getElementById('num1').value)
var num2 = Number(document.getElementById('num2').value)
var num3 = num1 + num2

res = document.getElementById('res')
res.innerHTML = "<b>O Resultado é =  </b>" + num3
}