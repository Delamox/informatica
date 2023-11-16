var disp=[,];
var i=0
var op=''
var ans=false
disp[0]=''
disp[1]=''
//i dicteert het nummer na [1] of voor [0] de operator in disp[]
//op is de operator
//res geeft het resultaat van de berekening
//ans geeft aan of je kan doorrekenen bijv. 6+6 = 12-4 = 6 in plaats van 6+6 = 12, 12-4 = 6
//de backslash knop wordt gebruikt als backspace knop
//alles zelf geschreven (met w3 en stackoverflow voor wat hulp bij specifieke syntax) behalve html en css (ik had er geen zin in)
function addToDisplay(e)
{
    if(ans==true){disp[i]=e}else{disp[i]+=e}
    ans=false
    document.getElementById('dp').value=disp[i]
}
function switchFloat(e)
{
    op=e
    if (i==0){i=1}else{i=0}
    document.getElementById('dp').value=e
}
function evaluateFloat(e)
{
    if (e=='sqrt'){disp[i]=Math.sqrt(disp[i])}
    document.getElementById('dp').value=disp[i]
}
function backspace()
{
    disp[i]=disp[i].toString().slice(0,-1)
    document.getElementById('dp').value=disp[i]
}
function dispClear()
{
    i=0
    op=''
    res='ERROR'
    disp=['','']
    document.getElementById('dp').value=''
}
function calculate()
{
    try{
    if (op=='+')
    {res=parseFloat(disp[0])+parseFloat(disp[1])}
    else if (op=='-')
    {res=disp[0]-disp[1]}
    else if (op=='*')
    {res=disp[0]*disp[1]}
    else if (op=='/')
    {res=disp[0]/disp[1]}
    else if (op=='exp')
    {res=disp[0]**disp[1]}
    document.getElementById('dp').value=res
    i=0
    disp[0]=parseFloat(res)
    disp[1]='';
    }catch{document.getElementById('dp').value='ERROR'}
    ans=true
}