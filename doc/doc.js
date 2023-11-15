var get=document.getElementById
var disp=[0, 0];
var r=1;
var op='+' 
function addToDisplay(e)
{
    disp[r]+=e
    get('dp').innerHTML=toString(disp[r])
}
function SwitchInt(e)
{
    if (r==1){r=2}
    else if (r==2){r=1}
    get('dp').innerHTML=toString(disp[r])
}
function calculate(disp)
{
if (op=='+')
{res=disp[1]+disp[2]}
else if (op=='-')
{res=disp[1]-disp[2]}
else if (op=='*')
{res=disp[1]*disp[2]}
else if (op=='/')
{res=disp[1]/disp[2]}
get('dp').innerHTML=toString(res)
}