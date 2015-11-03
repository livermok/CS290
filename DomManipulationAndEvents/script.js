//Author: Kyle Livermore
//Date: 31 October 2015

var table = document.createElement("table");
table.id = "4x4Table";
var header = document.createElement("thead");
var headerRow = document.createElement("tr");
for(var i = 1; i < 5; i++){
    var headerCell = document.createElement("td");
    headerCell.textContent = "Header " + i;
    headerRow.appendChild(headerCell);
};
header.appendChild(headerRow);
table.appendChild(header);

var tbody = document.createElement("tbody");
for(var j = 1; j < 4; j++)
{
    var row = document.createElement("tr");
    for(var k = 1; k < 5; k++)
    {
        var cell = document.createElement("td");
        cell.textContent = k + ", " + j;
        cell.id = k + "_" + j;
        row.appendChild(cell);
    }
    row.id = "row" + j;
    tbody.appendChild(row);
}
table.appendChild(tbody);
document.getElementById("DOMassignment").appendChild(table);

document.getElementById("4x4Table").style.borderColor = "black";
document.getElementById("4x4Table").style.borderWidth = "1px";
document.getElementById("4x4Table").style.borderStyle = "solid";
var elements = document.getElementsByTagName("td");
for (var i = 0; i < elements.length; i++){
	elements[i].style.borderColor = "black";
	elements[i].style.borderWidth = "1px";
	elements[i].style.borderStyle = "solid";
}
var buttonSpan = document.createElement("span");

var upButton = document.createElement("button");
upButton.textContent = "UP";
upButton.id = "up";
buttonSpan.appendChild(upButton);

var downButton = document.createElement("button");
downButton.textContent = "DOWN";
downButton.id = "down";
buttonSpan.appendChild(downButton);

var leftButton = document.createElement("button");
leftButton.textContent = "LEFT";
leftButton.id = "left";
buttonSpan.appendChild(leftButton);

var rightButton = document.createElement("button");
rightButton.textContent = "RIGHT";
rightButton.id = "right";
buttonSpan.appendChild(rightButton);

var markButton = document.createElement("button");
markButton.textContent = "Mark Cell";
markButton.id = "markCell";
buttonSpan.appendChild(markButton);

document.getElementById("DOMassignment").appendChild(document.createElement("br"));
document.getElementById("DOMassignment").appendChild(buttonSpan);

coords = {rowSelected: 1, columnSelected: 1};
var cellSelected = coords.columnSelected + "_" + coords.rowSelected;
document.getElementById(cellSelected).style.borderWidth = "4px";

function upClicked(coord){
	var currentRow = coord.rowSelected;
    var currentColumn = coord.columnSelected;
    if (currentRow > 1){
        coords.rowSelected--;
    	var currentCell = currentColumn + "_" + currentRow;
        console.log(currentCell);
    	document.getElementById((currentCell)).style.borderWidth = "1px";
    	var selectedCell = coord.columnSelected + "_" + coord.rowSelected;
        console.log(selectedCell);
    	document.getElementById(selectedCell).style.borderWidth = "4px";
    }
}


function downClicked(coord)
{
    var currentRow = coord.rowSelected;
    var currentColumn = coord.columnSelected;
    if (currentRow < 3){
        coords.rowSelected++;
    	var currentCell = currentColumn + "_" + currentRow;
        console.log(currentCell);
    	document.getElementById((currentCell)).style.borderWidth = "1px";
    	var selectedCell = coord.columnSelected + "_" + coord.rowSelected;
        console.log(selectedCell);
    	document.getElementById(selectedCell).style.borderWidth = "4px";
    }
}

function leftClicked(coord)
{
    var currentRow = coord.rowSelected;
    var currentColumn = coord.columnSelected;
    if (currentColumn > 1){
        coords.columnSelected--;
    	var currentCell = currentColumn + "_" + currentRow;
        console.log(currentCell);
    	document.getElementById((currentCell)).style.borderWidth = "1px";
    	var selectedCell = coord.columnSelected + "_" + coord.rowSelected;
        console.log(selectedCell);
    	document.getElementById(selectedCell).style.borderWidth = "4px";
    }
}

function rightClicked(coord)
{
    var currentRow = coord.rowSelected;
    var currentColumn = coord.columnSelected;
    if (currentColumn < 4){
        coords.columnSelected++;
    	var currentCell = currentColumn + "_" + currentRow;
        console.log(currentCell);
    	document.getElementById((currentCell)).style.borderWidth = "1px";
    	var selectedCell = coord.columnSelected + "_" + coord.rowSelected;
        console.log(selectedCell);
    	document.getElementById(selectedCell).style.borderWidth = "4px";
    }
}

function markCell(coord)
{
    var currentRow = coord.rowSelected;
    var currentColumn = coord.columnSelected;
    var currentCell = currentColumn + "_" + currentRow;
    if(document.getElementById(currentCell).className != "marked")
        document.getElementById(currentCell).style.backgroundColor = "yellow";
    
}

document.getElementById("up").addEventListener("click", function(){upClicked(coords);});
document.getElementById("down").addEventListener("click",  function(){downClicked(coords);});
document.getElementById("left").addEventListener("click",  function(){leftClicked(coords);});
document.getElementById("right").addEventListener("click",  function(){rightClicked(coords);});
document.getElementById("markCell").addEventListener("click",  function(){markCell(coords);});