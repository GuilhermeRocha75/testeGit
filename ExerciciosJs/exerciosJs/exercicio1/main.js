// alert('Olá, mundo');
function saudacao() {
    // Obtendo o valor do input de nome
    const nome = document.getElementById('nome').value;
    // Criando a mensagem de saudação
    const mensagem = `Olá, ${nome}! Bem-vindo(a)!`;
    // Exibindo a saudação na div 'saudacao'
    document.getElementById('saudacao').innerText = mensagem;
}
