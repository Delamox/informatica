function clrBall()
    {
        document.getElementById('ball').style.backgroundColor = "#FF88FF";
        document.getElementById('ball').style.width = "200px";
        document.getElementById('ball').style.height = "200px";
    }
clrBall();

function msEnter()
    {
        document.getElementById('ball').style.backgroundColor = "#FF8800";
    }

function msLeave()
    {
        document.getElementById('ball').style.backgroundColor = "#FF88FF";
    }
document.getElementById('ball').onmouseenter = function() {msEnter()};
document.getElementById('ball').onmouseleave = function() {msLeave()};