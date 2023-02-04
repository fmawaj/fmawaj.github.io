var table = document.createElement('table'), tr, td, row, cell;
for (row = 0; row < 3; row++) {
    tr = document.createElement('tr');
    for (cell = 0; cell < 3; cell++) {
        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = 0 
    }
    table.appendChild(tr);
}
document.getElementById('container').appendChild(table);
<div id="container"></div>