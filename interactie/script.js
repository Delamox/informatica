function init()
    {
        var ball = document.getElementById('ball');
        var text = document.getElementById('text');
        ball.style.backgroundColor = "#FF88FF";
        ball.style.width = "400px";
        ball.style.height = "400px";
        ball.style.position = "relative";
        text.style.position = "absolute";
        text.style.color = "#FF88FF"
        text.style.backgroundColor = "#FF88FF"
        text.style.top = "50%";
        text.style.left = "50%";
        text.style.transform = "translate(-50%, -50%)";
    } init();

function msEnter()
    {
        var max = 85;
        var min = 15;
        var randXPosInt = Math.random() * (max - min) + min;
        var randYPosInt = Math.random() * (max - min) + min;
        ball.style.backgroundColor = "#FF8800";
        text.style.backgroundColor = "#FF8800";
        text.style.top = randYPosInt + "%";
        text.style.left = randXPosInt + "%";
    }

function msLeave()
    {
        ball.style.backgroundColor = "#FF88FF";
        text.innerHTML = "missed!";
        text.style.backgroundColor = "#FF88FF";
    }

function msClick()
    {
        text.innerHTML = "got me!";
    }
ball.onmousedown = function() {msEnter()};
ball.onmouseup = function() {msLeave()};
text.onclick = function() {msClick()};