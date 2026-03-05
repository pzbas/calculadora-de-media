alert ("´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´")

const number1 = document.getElementById("nota1")
const number2 = document.getElementById("nota2")

const resultado = document.getElementById("resultado")

const button = document.getElementById("button")

function calcularMedia(){
  
    const valorNota1 = Number(nota1.value)
    const valorNota2 = Number(nota2.value)

const media = (valorNota1 + valorNota2)/2

resultado.innerText = `a média é ${media.toFixed(2)}`
}


button.addEventListener("click", calcularMedia)