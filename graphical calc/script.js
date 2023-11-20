var table=document.createElement('table')
var Xaxis=300
var Yaxis=300
var fx='80*Math.cos((2*Math.PI*x)/100)+75+.5*x'
function resize(){
  Xaxis=prompt('X axis length?')
  Yaxis=prompt('Y axis length?')
  init()
}
function redraw(){
  fx=prompt('formula in JS notation')
  draw()
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
  try{table.replaceChildren()}catch(err){alert(err)}
  for(i=0;i<Yaxis;i++){
    let row=table.insertRow()
    for (j=0;j<Xaxis;j++){
      let cell=row.insertCell()
      cell.setAttribute("class",'cell')
    }
  }
  document.getElementById('body').appendChild(table);
}
function draw(){
  prevY=0
  for (let x=0;x<Xaxis+1;x+=1) {
    try {dy=Math.round(eval(fx))}catch{alert('formula is not correct JS');break}
    try {table.rows[Yaxis-dy+0].cells[x-1].style.background='black'}catch{}
    if (!((dy>Yaxis||dy<0)&&(prevY>Yaxis||prevY<0))){
      for (m=0;m<(Yaxis-dy+1)-prevY-1;m++){
        if (m<Math.floor(((Yaxis-dy+1)-prevY-1)/2)){try{table.rows[m+prevY+0].cells[x-2].style.background='dimgray'}catch{}}
        else{try{table.rows[m+prevY+0].cells[x-1].style.background='dimgray'}catch{}} }
      for (m=0;m<-1*((Yaxis-dy+1)-prevY)-1;m++){
        if (m<Math.ceil((-1*((Yaxis-dy+1)-prevY)-1)/2)){try{table.rows[prevY-m-2].cells[x-2].style.background='dimgray'}catch{}}
        else{try{table.rows[prevY-m-2].cells[x-1].style.background='dimgray'}catch{}}}
      prevY=Yaxis-dy+1
    }
  }
}
init();
draw();