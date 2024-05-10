const pacman = document.getElementById('pacman');
const pellets = document.querySelectorAll('.pellet');
const walls = document.querySelectorAll('.wall');
const speed = 10;
const initialLeft = 180; // Initial left position of Pac-Man
const initialTop = 180; // Initial top position of Pac-Man
const pacmanRadius = 20; // Radius of Pac-Man in pixels

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
    const nextLeft = currentLeft - speed;
    if (!isCollision(nextLeft + pacmanRadius, parseInt(pacman.style.top))) {
        pacman.style.left = nextLeft + 'px';
        checkPelletCollision();
    } else {
        resetPacman();
    }
}

function moveRight() {
    const currentLeft = parseInt(pacman.style.left) || 0;
    const nextLeft = currentLeft + speed;
    if (!isCollision(nextLeft - pacmanRadius, parseInt(pacman.style.top))) {
        pacman.style.left = nextLeft + 'px';
        checkPelletCollision();
    } else {
        resetPacman();
    }
}

function moveUp() {
    const currentTop = parseInt(pacman.style.top) || 0;
    const nextTop = currentTop - speed;
    if (!isCollision(parseInt(pacman.style.left), nextTop + pacmanRadius)) {
        pacman.style.top = nextTop + 'px';
        checkPelletCollision();
    } else {
        resetPacman();
    }
}

function moveDown() {
    const currentTop = parseInt(pacman.style.top) || 0;
    const nextTop = currentTop + speed;
    if (!isCollision(parseInt(pacman.style.left), nextTop - pacmanRadius)) {
        pacman.style.top = nextTop + 'px';
        checkPelletCollision();
    } else {
        resetPacman();
    }
}

function isCollision(x, y) {
    // Check for collision with walls
    for (const wall of walls) {
        const wallRect = wall.getBoundingClientRect();
        if (x + pacmanRadius > wallRect.left && x - pacmanRadius < wallRect.right && y + pacmanRadius > wallRect.top && y - pacmanRadius < wallRect.bottom) {
            return true;
        }
    }
    return false;
}

function resetPacman() {
    pacman.style.left = initialLeft + '0 px';
    pacman.style.top = initialTop + '0 px';
}
