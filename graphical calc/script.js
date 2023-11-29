var table=document.createElement('table')
var Xaxis=300
var Yaxis=300
//var fx='80*Math.cos((2*Math.PI*x)/100)+.5*x'
var fx='-1*x**2'
var clra=['#ff0000','#00ff00','#0000ff','#ffff00','#ff00ff','#00ffff']
var ci=0
//var fxa=['','','','','','']
//&&fxa[i]!=fx

// UPDATE: IK HEB EEN FIX GEVONDEN, MOET NOG DEBUGGEN


//x³ werkt met hard limit op m size, ik probeer een script the scrijven die de interpolatie stopt wanneer de y van m out of m bounds is
//zit een fout in tweede for loop voor interpolatie: oude versie word later vandaag teruggezet via github (i love version control)
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
  //zet waarde van vorige pixel op null (word dus niet geïnterpoleerd)
  prevY=null
  //selecteert de kleur van de lijn
  clr=clra[ci%6]
  //berekend offset
  offset=Math.ceil(Yaxis/2)
    //repeat het aantal x waarden in grafiek
    for (let x=-offset;x<Xaxis+1-offset;x+=1) {
    //bereken y waarde
    try {dy=Math.round(eval(fx))+offset}catch{alert('formula is not correct JS');break}
    //als beide punten buiten het grafiek vallen of het antwoord NaN is dan skip je de loop van deze x waarde
    if (!(isNaN(dy)||(dy>Yaxis||dy<0)&&(prevY>Yaxis||prevY<0))){
      //plaats berekende pixel y in grafiek
      try {table.rows[Yaxis-dy+0].cells[x-1+offset].style.background='black'}catch(err){console.log(err, x, dy)}
      //repeat voor delta y tussen de huidige en vorige berekende pixel
      for (m=0;m<(Yaxis-dy+1)-prevY-1;m++){
        //if(prevY-m-2+Math.abs(m)-m<0||prevY-m-2+Math.abs(m)-m>Yaxis){break}
        //deel delta y in tweeën laat een helft de pixels aan de kant van de huidige en de andere helft aan de vorige pixel plaatsen
        if (m<Math.floor(((Yaxis-dy+1)-prevY-1)/2)){
          //plaats pixel rechts (vorige pixel kant)
          try{table.rows[m+prevY+0].cells[x-2+offset].style.background=clr}catch{}
        }else{
          //plaats pixel links (huidige pixel kant)
          try{table.rows[m+prevY+0].cells[x-1+offset].style.background=clr}catch{}
        }
        //cycle color value voor debug
        //ci++
        //clr=clra[ci%6]
      }
      //deze doet het niet vvvv
      for (m=0;m<-1*((Yaxis-dy+1)-prevY)-1;m++){
        console.log(x+offset, prevY-m-2+Math.abs(m)-m)
        if(Yaxis-dy+0<=0){insert=prevY-m-2}else{insert=prevY-m-2+Math.abs(-1*((Yaxis-dy+1)-prevY)-1)-m}
        if(prevY-m-2+Math.abs(m)-m<0||prevY-m-2+Math.abs(m)-m>Yaxis){break}
        //hele berekening negatief
        if (m<Math.ceil((-1*((Yaxis-dy+1)-prevY)-1)/2)){
          //plaats pixel rechts (vorige pixel kant) maar in plaats van de huidige m + de vorige Y waarde van de pixel doet ie - de vorige Y waarde van de pixelb
          try{table.rows[insert].cells[x-2+offset].style.background=clr}catch{}
        }else{
          try{table.rows[insert].cells[x-1+offset].style.background=clr}catch{}
        }
        //cycle color value voor debug
        ci++
        clr=clra[ci%6]
      }prevY=Yaxis-dy+1
    }
  }ci++}catch(err){console.log(err)}
}
init();
draw();