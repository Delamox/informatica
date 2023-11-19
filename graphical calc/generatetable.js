var table = document.createElement("table");
var rx = 200;
var ry = 200;
init()
function init() {
  for (let i = 0; i < ry; i++) {
    let row = table.insertRow();
    row.setAttribute("id", rx - i)
    for (let j = 0; j < rx; j++) {
      let cell = row.insertCell();
      cell.setAttribute("id", j + 1)
    }
  }
  document.getElementById('body').appendChild(table);
}
var a = (-0.1);
var b = (7);
var c = (0);

draw()
function draw() {
  prevY = 0
  for (let x = 0; x < rx; x += 1) {
    //let dy = Math.floor((parseFloat(a) * x ** 2) + x * b + c)
    let dy = Math.round(80 * Math.cos((2 * Math.PI * x) / 100) + 100 + .0 * x)
    try { table.rows[ry - dy + 1].cells[x - 1].style.background = 'black' } catch (err) { ; }
    for (m = 0; m < (ry - dy + 1) - prevY - 1; m++) {
      try { table.rows[m + prevY + 1].cells[x - 1].style.background = 'black' } catch (err) { ; }
    }
    for (m = 0; m < -1 * ((ry - dy + 1) - prevY) - 1; m++) {
      try { table.rows[prevY - m - 1].cells[x - 2].style.background = 'black' } catch (err) { ; }
    }
    prevY = ry - dy + 1
  }
}