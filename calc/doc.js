var disp=[,];
var i=0
var op=''
var fv=document.getElementById('dp').value
disp[0]=''
disp[1]='' 
//i dicteert het nummer na [1] of voor [0] de operator in disp[]
//op is de operator
//alles zelf geschreven behalve frontend (met w3 en stackoverflow voor wat hulp bij specifieke syntax)

function addToDisplay(e)
{
    if(ans=!true){disp[i]+=e}else{disp[i]=e}
    ans=false
    fv=disp[i]
}
function switchInt(e)
{
    op=e
    if (i==0){i=1}
    else if (i==1){i=0}
    fv=disp[i]
}
function backspace()
{
    disp[i]=disp[i].slice(0,-1)
    fv=(disp[i])
}
function dispclear()
{
    i=0
    op=''
    disp=['','']
    fv=''
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
    fv=res
    i=0
    disp[0]=parseInt(res)
    disp[1]='';
    ans=true
}