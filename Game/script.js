var freeCell = {
    x:3,
    y:3};

var tiles = [];

function createField() {
    var x, y, cell;
    for (y = 0; y < 4; ++y) {
        for (x = 0; x < 4; ++x) {
            cell = createCellNull();
            cell.y = y;
            cell.x = x;
            setCellOffset(cell);
            appendCell(cell);
        }
    }
}

function createCellNull() {
    var cell = document.createElement("div");
    cell.classList.add("field__cell", "field__cell--null");
    return cell;
}

function setCellOffset(cell){
    cell.style.left = (15 + (15 + 80) * cell.x) + "px";
    cell.style.top = (15 + (15 + 80) * cell.y) + "px";
}

function appendCell(cell){
    var field = document.getElementById("field");
    field.appendChild(cell);
}

createField();

function createTiles() {
    var x,y, cell;
    for(y = 0; y < 4; ++y){
        for(x = 0; x < 4; ++x){
            if((y != 3) || (x != 3)){
            cell = createOneTile();
            cell.y = y;
            cell.x = x;
            setCellOffset(cell);
            appendCell(cell);
            cell.innerHTML = cell.y * 4 + cell.x + 1;
            tiles.push(cell);
            }
        }
    }
}

function createOneTile(){
    var cell = document.createElement("div");
    cell.classList.add("field__cell", "field__cell--tile");
    return cell;
}

createTiles();
animateTiles();
function animateTiles() {
    for (var j = 0; j < tiles.length; j++){
    tiles[j].addEventListener("click", tileClick);
}
}

function tileClick(event) {
    var bar = event.target;
    if((bar.y == freeCell.y) && ((bar.x + 1) == freeCell.x)){
        freeCell.x = bar.x;
        bar.x++;
    }else if((bar.y == freeCell.y) && ((bar.x - 1) == freeCell.x)) {
        freeCell.x = bar.x;
        bar.x--;
    }else if((bar.x == freeCell.x) && ((bar.y + 1) == freeCell.y)) {
        freeCell.y = bar.y;
        bar.y++;  
    }else if((bar.x == freeCell.x) && ((bar.y - 1) == freeCell.y)){
        freeCell.y = bar.y;
        bar.y--;
    }
    setCellOffset(bar);
    if(r == 2000){
        checkVictory();
    }
}

var r;
function shuffleTiles(){
    var ind;
    for(i = 0; i <= 2000; i++){
        ind = Math.floor(Math.random() * 15);
        tiles[ind].click();
        r = i;
    }
}

shuffleTiles();

function checkVictory() {
    var y = 0;
    var n;
    for(var t = 0; t < tiles.length; t++){
        n = tiles[t].innerHTML;
        if(n == tiles[t].y * 4 + tiles[t].x + 1){
            y++;  
        } 
    }
    if(y == 15){
            document.getElementById("modal").classList.add("modal--visible");
        }
}