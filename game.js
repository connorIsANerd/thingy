let leftPressed = false;
let rightPressed = false;
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const image = new Image();
image.src = 'babananan.gif';
const x = 100;
const y = 100;
const X = 0;
const Y = 0;
const messageDiv = document.getElementById('message');
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
function keyDownHandler(event) {
    if (event.key === 'ArrowLeft') {
        leftPressed = true;
        ctx.drawImage(image, x, y);
      messageDiv.textContent = "Left arrow key pressed!";
    } else if (event.key === 'ArrowRight') {
        rightPressed = true;
    }
}

function keyUpHandler(event) {
    if (event.key === 'ArrowLeft') {
        leftPressed = false;
        X=X+1;
    messageDiv.textContent = "";
    } else if (event.key === 'ArrowRight') {
        rightPressed = false;
        X=X-1;
    }
}
