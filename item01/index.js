const button = document.getElementById('button');
const paragraph = document.getElementById('paragraph');

button.addEventListener('click', () => {
    const name = prompt('Digite seu nome: ');
    paragraph.textContent = `E aí ${name}! Você está deixando seu site dinâmico!`;
});
