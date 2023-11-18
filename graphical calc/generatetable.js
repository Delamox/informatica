var table=document.createElement("table");
// x^2 +2x +1
var rx=100;
var ry=100;
var m=Math.floor(rx/2)
var n=Math.floor(ry/2)

init()
function init(){
  for(let i=0;i<ry;i++){
    let row=table.insertRow();
    //row.setAttribute("id", rx-i)
    for(let j=0;j<rx;j++){
      let cell=row.insertCell();
      //cell.setAttribute("id", j+1)
    }
  }
  document.getElementById('body').appendChild(table);
}
var a=(0.1);
var b=(-10);
var c=(260);
draw()
function draw()
{
  for(let u=0;u<rx;u++)
    {
      let dy=Math.round((parseFloat(a)*u**2)+u*b+c)
      try{table.rows[ry-dy+1].cells[u-1].style.background='purple'}catch(err){;}
    }
}