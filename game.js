let leftPressed = false;
let rightPressed = false;
const image = new Image();
const messageDiv = document.getElementById('message');
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
function keyDownHandler(event) {
    if (event.key === 'ArrowLeft') {
        leftPressed = true;
      messageDiv.textContent = "Left arrow key pressed!";
        image.src = 'babananan.gif';
    } else if (event.key === 'ArrowRight') {
        rightPressed = true;
    }
}

function keyUpHandler(event) {
    if (event.key === 'ArrowLeft') {
        leftPressed = false;
    messageDiv.textContent = "";
    } else if (event.key === 'ArrowRight') {
        rightPressed = false;
    }
}
