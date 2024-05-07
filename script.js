const pacman = document.getElementById('pacman');
const speed = 30; // Adjust the speed as needed
const pacman = document.getElementById('pacman');
pacman.style.left = '180px';
pacman.style.top = '180px';

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
            moveDown();
            break;
    }
});

function moveLeft() {
    const currentLeft = parseInt(pacman.style.left) || 0;
    pacman.style.left = `${Math.max(0, currentLeft - speed)}px`;
}

function moveRight() {
    const currentLeft = parseInt(pacman.style.left) || 0;
    pacman.style.left = `${Math.min(360, currentLeft + speed)}px`; // Adjust the maximum value as needed
}

function moveUp() {
    const currentTop = parseInt(pacman.style.top) || 0;
    pacman.style.top = `${Math.max(0, currentTop - speed)}px`;
}

function moveDown() {
    const currentTop = parseInt(pacman.style.top) || 0;
    pacman.style.top = `${Math.min(360, currentTop + speed)}px`; // Adjust the maximum value as needed
}