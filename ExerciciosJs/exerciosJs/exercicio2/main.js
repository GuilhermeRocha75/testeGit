// alert('Olá, mundo');

function contarCaracteres() {
    var texto = document.getElementById("texto").value;
    var numeroDeCaracteres = texto.length;
    document.getElementById("contador").innerText = "Número de caracteres: " + numeroDeCaracteres;
}

