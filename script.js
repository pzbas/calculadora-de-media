const nota1 = document.getElementById("numero1")
const nota2 = document.getElementById("numero2")

const button = document.getElementById("botao")

function CalcularMedia(){
    const valorNota1 = Number(nota1.value)
    const valorNota2 = Number(nota2.value)
    
    const media = (valorNota1 + valorNota2)/2
    
    console.log(media)
}

button.addEventListener("click", CalcularMedia)