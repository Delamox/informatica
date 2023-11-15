var disp=[];
var r=0
var op=''
disp[1]=''
disp[0]='' 
function addToDisplay(e)
{
    disp[r]+=e
    document.getElementById('dp').value=disp[r]
}
function switchInt(e)
{
    op=e
    if (r==0){r=1}
    else if (r==1){r=0}
    document.getElementById('dp').value=disp[r]
}
function backSpace()
{
    disp[r]=disp[r].slice(0,-1)
}
function clearDisplay()
{
    disp.pop()
    op='+'
    r=0
    document.getElementById('dp').value=''
}
function calculate()
{
if (op=='+')
{res=parseInt(disp[0])+parseInt(disp[1])}
else if (op=='-')
{res=disp[0]-disp[1]}
else if (op=='*')
{res=disp[0]*disp[1]}
else if (op=='/')
{res=disp[0]/disp[1]}
document.getElementById('dp').value=res
r=0
disp[0]=res
disp[1]=''
}