// alert('Olá, mundo');
function calcularAreaRetangulo() {
    const largura = parseFloat(document.getElementById('largura').value);
    const comprimento = parseFloat(document.getElementById('comprimento').value);

    if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0) {
        resultado.innerText = "Por favor, insira valores válidos e positivos.";
        resultado.style.color = "red";
        return;
    }

    const area = comprimento * largura;
    const mensagem = `A área do retângulo é: ${area} m²`;

    document.getElementById('resultado').innerText = mensagem;
}
