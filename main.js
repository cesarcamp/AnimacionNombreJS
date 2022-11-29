const h1 = document.querySelector('h1');
const letters = h1.innerText.split('')
h1.innerText = null;

function createNode(letter, index) {
    const span = document.createElement('span')
    span.innerText = letter
    span.classList.add('título')
    span.style = "--i:" + index
    h1.appendChild(span)
}

letters.forEach(createNode)


