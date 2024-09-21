function getRandomHexColor () {
    return `#${Math.floor(Math.random() *16777215).toString(16)}`;
}

function changeBackgroundColor() {
    document.body.style.changeBackgroundColor = getRandomHexColor();
    setTimeout(changeBackgroundColor, 1000);
}

document.getElementById('startButton').addEventListener('click',function() {
    this.disabled = true;
    document.getElementById('stopButton').disabled = false;
    changeBackgroundColor();
});

document.getElementById('stopButton').addEventListener('click',function() {
    this.disabled = true;
    document.getElementById('startpButton').disabled = false;
});