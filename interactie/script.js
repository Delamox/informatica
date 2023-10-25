function init()
    {
        document.getElementById('ball').style.backgroundColor = "#FF88FF";
        document.getElementById('ball').style.width = "400px";
        document.getElementById('ball').style.height = "400px";
        document.getElementById('ball').style.position = "relative";
        document.getElementById('text').style.position = "absolute";
        document.getElementById('text').style.color = "#FF88FF"
        document.getElementById('text').style.top = "50%";
        document.getElementById('text').style.left = "50%";
        document.getElementById('text').style.transform = "translate(-50%, -50%)";
    }
init();

function msEnter()
    {
        var max = 85;
        var min = 15;
        var randXPosInt = Math.random() * (max - min) + min;
        var randYPosInt = Math.random() * (max - min) + min;
        document.getElementById('ball').style.backgroundColor = "#FF8800";
        document.getElementById('text').style.top = randYPosInt + "%";
        document.getElementById('text').style.left = randXPosInt + "%";
    }

function msLeave()
    {
        document.getElementById('ball').style.backgroundColor = "#FF88FF";
        document.getElementById('text').innerHTML = "missed!"
    }

function msClick()
    {
        document.getElementById('text').innerHTML = "got me!"
    }
document.getElementById('ball').onmousedown = function() {msEnter()};
document.getElementById('ball').onmouseup = function() {msLeave()};
document.getElementById('text').onclick = function() {msClick()};