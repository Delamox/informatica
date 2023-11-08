function init()
    {
        var square = document.getElementById('square');
        var object = document.getElementById('object');
        square.style.backgroundColor = "#FF88FF";
        square.style.width = "400px";
        square.style.height = "400px";
        square.style.position = "relative";
        object.style.position = "absolute";
        object.style.color = "#FF88FF"
        object.style.backgroundColor = "#FF88FF"
        object.style.top = "50%";
        object.style.left = "50%";
        object.style.transform = "translate(-50%, -50%)";
    } init();

function msEnter()
    {
        var max = 85;
        var min = 15;
        var randXPosInt = Math.random() * (max - min) + min;
        var randYPosInt = Math.random() * (max - min) + min;
        square.style.backgroundColor = "#FF8800";
        object.style.backgroundColor = "#FF8800";
        object.style.top = randYPosInt + "%";
        object.style.left = randXPosInt + "%";
    }

function msLeave()
    {
        square.style.backgroundColor = "#FF88FF";
        object.innerHTML = "missed!";
        object.style.backgroundColor = "#FF88FF";
    }

function msClick()
    {
        object.innerHTML = "got me!";
    }
square.onmousedown = function() {msEnter()};
square.onmouseup = function() {msLeave()};
object.onclick = function() {msClick()};