var table = document.createElement('table');
var Xaxis = 200;
var Yaxis = 200;
var fx = '80*Math.cos((2*Math.PI*x)/100)+100+.1*x'
function resize() {
    Xaxis = prompt('X axis length?')
    Yaxis = prompt('Y axis length?')
    init()
}
function redraw() {
  fx = prompt('formula in JS notation')
  draw()
}
function init() {
  try { table.replaceChildren(); } catch(err) { alert(err) }
  for (let i = 0; i < Yaxis; i++) {
    let row = table.insertRow();
    for (let j = 0; j < Xaxis; j++) {
      let cell = row.insertCell();
      cell.setAttribute("id", 'cell')
    }
  }
  document.getElementById('body').appendChild(table);
}
function draw() {
  prevY = 0
  for (let x = 0; x < Xaxis + 1; x += 1) {
    try { dy = Math.round(eval(fx)) } catch { alert('formula is not correct JS'); break }
    try { table.rows[Yaxis - dy + 0].cells[x - 1].style.background = 'black' } catch { ; }
    for (let m = 0; m < (Yaxis - dy + 1) - prevY - 1; m++) {
      try { table.rows[m + prevY + 0].cells[x - 1].style.background = 'black' } catch { ; }
    }
    for (let m = 0; m < -1 * ((Yaxis - dy + 1) - prevY) - 1; m++) {
      try { table.rows[prevY - m - 2].cells[x - 2].style.background = 'black' } catch { ; }
    }
    prevY = Yaxis - dy + 1
  }
}
init();
draw();