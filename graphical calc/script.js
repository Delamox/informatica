var table=document.createElement('table')
var Xaxis=300
var Yaxis=300
var fx='80*Math.cos((2*Math.PI*x)/100)+.5*x'
var clra=['#ff0000','#00ff00','#0000ff','#ffff00','#ff00ff','#00ffff']
var ci=0
//var fxa=['','','','','','']
//&&fxa[i]!=fx

function resize(){
  Xaxis=prompt('X axis length?')
  Yaxis=prompt('Y axis length?')
  init()
}
function redraw(){
  clearfield()
  ci=0
  for (let i=0;i<6;i++){
    fx=document.getElementById(i).value
      ci=i
      draw(document.getElementById(i).value)//fxa[i]=fx
  }
}
function clearfield(){
  cell=document.getElementsByClassName('cell')
  for(i=0;i<cell.length;i++){cell[i].style.background='white'}
}
function pixelsize(){
  cell=document.getElementsByClassName('cell')
  pad=prompt('cell padding size?')
  for(i=0;i<cell.length;i++){cell[i].style.padding=pad+'px'}
}
function init(){
  table.replaceChildren()
  for(i=0;i<Yaxis;i++){
    let row=table.insertRow()
    for (j=0;j<Xaxis;j++){
      let cell=row.insertCell()
      cell.setAttribute("class",'cell')
    }
  }document.getElementById('body').appendChild(table);
}
function draw(){
  try{
  prevY=0
  clr=clra[ci%6]
  offset=Math.ceil(Yaxis/2)
  for (let x=-offset;x<Xaxis+1-offset;x+=1) {
    try {dy=Math.round(eval(fx))+offset}catch{alert('formula is not correct JS');break}
    if (!(isNaN(dy)||(dy>Yaxis||dy<0)&&(prevY>Yaxis||prevY<0))){
      try {table.rows[Yaxis-dy+0].cells[x-1+offset].style.background='black'}catch(err){console.log(err, x, dy)}
      for (m=0;m<(Yaxis-dy+1)-prevY-1;m++){
        if (m<Math.floor(((Yaxis-dy+1)-prevY-1)/2)){
          try{table.rows[m+prevY+0].cells[x-2+offset].style.background=clr}catch{}
        }else{
          try{table.rows[m+prevY+0].cells[x-1+offset].style.background=clr}catch{}
        }
      }
      for (m=0;m<-1*((Yaxis-dy+1)-prevY)-1;m++){
        if (m<Math.ceil((-1*((Yaxis-dy+1)-prevY)-1)/2)){
          try{table.rows[prevY-m-2].cells[x-2+offset].style.background=clr}catch{}
        }else{
          try{table.rows[prevY-m-2].cells[x-1+offset].style.background=clr}catch{}
        }
      }prevY=Yaxis-dy+1
    }
  }ci++}catch(err){console.log(err)}
}
init();
draw();