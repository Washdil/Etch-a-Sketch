const container = document.querySelector('.container');
const resetButton = document.getElementById('reset');

function createGrid(size) {
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function randomColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

let interactionCount = 0;

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('square')) {
        interactionCount++;
        const square = e.target;
        const color = randomColor();
        const darkness = (interactionCount / 10) * 0.1;

        square.style.backgroundColor = color;
        square.style.filter = `brightness(${1 - darkness})`;
    }
});

resetButton.addEventListener('click', () => {
    const newSize = parseInt(prompt('Enter the number of squares'));
    if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
        interactionCount = 0;
    } else {
        alert('Invalid input. Enter a number smaller than  100');
    }
});

