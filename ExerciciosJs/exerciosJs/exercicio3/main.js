// alert('Olá, mundo');

function validarNumeroPositivo() {
    var texto = document.getElementById("texto").value;
    var numero = parseFloat(texto);
    var mensagem = document.getElementById("mensagem");

    if (!isNaN(numero) && numero > 0) {
        mensagem.innerText = "O número é positivo.";
        mensagem.style.color = "#00FF7F";
    } else {
        mensagem.innerText = "Erro: Por favor, insira um número positivo.";
        mensagem.style.color = "red";
    }
}


