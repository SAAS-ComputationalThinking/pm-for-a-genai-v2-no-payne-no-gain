const pacman = document.getElementById('pacman');
pacman.style.left = "400px"
pacman.style.top = "400px"
const pellets = document.querySelectorAll('.pellet');
const walls = document.querySelectorAll('.wall');
const speed = 10;
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
    }
}

function moveRight() {
    const currentLeft = parseInt(pacman.style.left) || 0;
    const nextLeft = currentLeft + speed;
    if (!isCollision(nextLeft - pacmanRadius, parseInt(pacman.style.top))) {
        pacman.style.left = nextLeft + 'px';
        checkPelletCollision();
    }
}

function moveUp() {
    const currentTop = parseInt(pacman.style.top) || 0;
    const nextTop = currentTop - speed;
    if (!isCollision(parseInt(pacman.style.left), nextTop + pacmanRadius)) {
        pacman.style.top = nextTop + 'px';
        checkPelletCollision();
    }
}

function moveDown() {
    const currentTop = parseInt(pacman.style.top) || 0;
    const nextTop = currentTop + speed;
    if (!isCollision(parseInt(pacman.style.left), nextTop - pacmanRadius)) {
        pacman.style.top = nextTop + 'px';
        checkPelletCollision();
    }
}

function isCollision(x, y) {
    // Check for collision with walls
    for (const wall of walls) {
        const wallRect = wall.getBoundingClientRect();
        const pacmanRect = {
            left: x - pacmanRadius,
            right: x + pacmanRadius,
            top: y - pacmanRadius,
            bottom: y + pacmanRadius
        };
        if (pacmanRect.left < wallRect.right && pacmanRect.right > wallRect.left && pacmanRect.top < wallRect.bottom && pacmanRect.bottom > wallRect.top) {
            return true;
        }
    }
    
    // Check for collision with outer perimeter of the board
    const gameContainer = document.getElementById('game-container');
    const containerRect = gameContainer.getBoundingClientRect();
    if (x - pacmanRadius < containerRect.left || x - pacmanRadius > containerRect.right || y - pacmanRadius < containerRect.top || y - pacmanRadius > containerRect.bottom) {
        return true;
    }
    
    return false;
}

function checkPelletCollision() {
    for (const pellet of pellets) {
        const pelletRect = pellet.getBoundingClientRect();
        const pacmanRect = pacman.getBoundingClientRect();
        if (pacmanRect.left < pelletRect.right && pacmanRect.right > pelletRect.left && pacmanRect.top < pelletRect.bottom && pacmanRect.bottom > pelletRect.top) {
            pellet.style.display = 'none';
            // Add scoring logic or other actions here
        }
    }
}