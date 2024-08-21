function createGridInHtml(maxX, maxY, pieces){

    document.documentElement.style.setProperty('--X', maxX);
    document.documentElement.style.setProperty('--Y', maxY);
    document.documentElement.style.setProperty('--grid-item-color', `rgb(32, 62, 255)`);

    let X_totalPlaces = maxX;
    let Y_totalPlaces = maxY;
    let X = 1;
    let Y = 1;
    let gridContainer = ``;
    let whiteOrBlack = 1;
    let startWithWhiteOrBlack = 1;
    for(let i = 0; i < X_totalPlaces * Y_totalPlaces; i++){
        if(Y%2 == 0){
            startWithWhiteOrBlack = 1;
        }else{
            startWithWhiteOrBlack = -1;
        }
        if(X%2 == 0){
            whiteOrBlack = 1 * startWithWhiteOrBlack;
        }else{
            whiteOrBlack = -1 * startWithWhiteOrBlack;
        }

        gridContainer += `<div class="grid-item grid-item-${whiteOrBlack}" id="grid-item[${X - 1},${Y - 1}]" onclick="playplayed([${X - 1},${Y - 1}]);"></div>`;

        if(X == X_totalPlaces){
            X = 1;
            Y++
        }else{
            X++
        }
    }
    document.getElementById('grid-container').innerHTML = gridContainer;

    for (const info of pieces) {
        let coordenates = info[0];
        let pieceName = info[1];
        let pieceColor = info[2];

        document.getElementById(`grid-item[${coordenates}]`).innerHTML = chessPiece(pieceName, pieceColor)
    }

}

function coodernateToIndexinGrid(x, y, maxX){
    return x + (y * maxX);
}
function crateGridInList(maxX, maxY, pieces){
    let grid = [];
    for(let i = 1; i <= maxX * maxY; i++){
        grid.push(false);
    }   

    //put pieces in the chess board (inside the list "this.grid")
    for (const info of pieces) {
        let x = info[0][0]; //coordenates 
        let y = info[0][1]; //coordenates
        let piece = info[1];

        grid[coodernateToIndexinGrid(x, y, maxX)] = piece;
    }

    return grid;
}
let thesame = 0;
function clickEffects(coordenates, previusCoordenates){

    if(coordenates[0] == previusCoordenates[0] && coordenates[1] == previusCoordenates[1]){
        if(thesame == 1){
            thesame = 0;
            const square = document.getElementById(`grid-item[${coordenates}]`);
            square.style.filter = "brightness(150%)";
        }else{
            thesame = 1;
            const previussquare = document.getElementById(`grid-item[${previusCoordenates}]`);
            previussquare.style.filter = "brightness(100%)";
        }
    }else{
        const square = document.getElementById(`grid-item[${coordenates}]`);
        square.style.filter = "brightness(150%)";
    
        if(previusCoordenates[0] != -1){
            const previussquare = document.getElementById(`grid-item[${previusCoordenates}]`);
            previussquare.style.filter = "brightness(100%)";
            thesame = 0;
        }

    }



    

}