document.addEventListener('keydown', function(event) {
    const pacman = document.getElementById('pacman');
    const speed = 20;

    switch(event.key) {
        case 'ArrowLeft':
            moveLeft(pacman);
            break;
        case 'ArrowRight':
            moveRight(pacman);
            break;
    }
});

function moveLeft(pacman) {
    const currentLeft = parseInt(pacman.style.left) || 0;
    pacman.style.left = (currentLeft - speed) + 'px';
}

function moveRight(pacman) {
    const currentLeft = parseInt(pacman.style.left) || 0;
    pacman.style.left = (currentLeft + speed) + 'px';
}