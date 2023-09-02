const counterText = document.getElementById('counterText');

const incrementButton = document.getElementById('incrementButton');

const zeroButton = document.getElementById('zeroButton');

let count = 0;

incrementButton.addEventListener('click', () => {
    count++;
    if (count === 1) {
        counterText.textContent = `O contador está com ${count} clique`;
        return;
    }
    counterText.textContent = `O contador está com ${count} cliques`;
})

zeroButton.addEventListener('click', () => {
    count = 0;
    counterText.textContent = `O contador está com ${count} cliques`;
})
