
let grid = [];
let all_TotalPlaces = 0;
let X_totalPlaces = 3;
let Y_totalPlaces = 3;
let inARowToWin = 3;
let gameMode = "TicTacToe"; 
let roundsPlayed = 0;
let gameEndedTF = false;

document.documentElement.style.setProperty('--X', X_totalPlaces);
document.documentElement.style.setProperty('--Y', Y_totalPlaces);

let X = 1, Y = 1;
for(let i = 0; i < X_totalPlaces * Y_totalPlaces; i++){
    document.getElementById('grid-container').innerHTML += `<div class="grid-item" id="grid-item[${X - 1},${Y - 1}]" onclick="if(gameEndedTF==false){XOdetected([${X - 1},${Y - 1}])};"></div>`;
    if(X == X_totalPlaces){
        X = 1;
        Y++
    }else{
        X++
    }
}

for(let i = 0; i < X_totalPlaces * Y_totalPlaces; i++){
    grid.push([false,null]);
    all_TotalPlaces += 1;
}

function findIndexOfGrid(XYArray){
    return XYArray[0] + (XYArray[1] * X_totalPlaces);
}

let _O_svg = `<svg class="O" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224 96a160 160 0 1 0 0 320 160 160 0 1 0 0-320zM448 256A224 224 0 1 1 0 256a224 224 0 1 1 448 0z"/></svg>`;
let _X_svg = `<svg class="X" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>`;
let currentTurn = _X_svg;

function XOdetected(XYindex){
    position = findIndexOfGrid(XYindex)

    if(grid[position][0] == false){ 

        if(gameMode == "Lig4"     ){
            var pushedPosition = XOPushDown(XYindex);
            grid[findIndexOfGrid(pushedPosition)] = [true,currentTurn];
        }
        if(gameMode == "TicTacToe"){
            var pushedPosition = XYindex;
            grid[findIndexOfGrid(XYindex       )] = [true,currentTurn];
        }

        document.getElementById(`grid-item[${pushedPosition}]`).innerHTML = currentTurn;

        // console.log("won? ------------", checkIfWon(pushedPosition, currentTurn));  
        if(checkIfWon(pushedPosition, currentTurn)){
            gameEndedTF = true;
            gameEnded(currentTurn);
        }else{
            roundsPlayed++;
            if(roundsPlayed == all_TotalPlaces){
                gameEnded("tied");
            }
            currentTurn = currentTurn === _X_svg ? _O_svg : _X_svg;
        }

    }
}

function XOPushDown(notPushedPosition){ 
    for(let i = Y_totalPlaces - 1; i >= 0; i--){

        if(grid[findIndexOfGrid([notPushedPosition[0],i])][0] == false){
            return [notPushedPosition[0],i];
        }
    }
}

let XYDirections = [
    [[0,1 ] ,[0,-1 ] ], 
    [[1,1 ] ,[-1,-1] ],
    [[1,0 ] ,[-1,0 ] ], 
    [[1,-1] ,[-1,1 ] ]
]; 
function checkIfWon(position, simbol, quantParaGanhar = 0){
    for (const element of XYDirections) {
        for (const element2 of element) {
            let i = 1;

            while (i <= inARowToWin &&
                (position[0] + (i * element2[0]) < X_totalPlaces) &&
                (position[1] + (i * element2[1]) < Y_totalPlaces) &&
                (position[0] + (i * element2[0]) >= 0) &&
                (position[1] + (i * element2[1]) >= 0)) {
                
                // console.log(position, checkNextPosition(position, element2, i), simbol, i);

                if (grid[checkNextPosition(position, element2, i)][1] == simbol) {
                    quantParaGanhar++;
                } else {
                    break;
                }
                i++;
            }
        }

        // console.log("quantos em seguida achou?", quantParaGanhar + 1);
        if (quantParaGanhar + 1 >= inARowToWin) {
            return true;
        } else {
            quantParaGanhar = 0;
        }
    }
    return false;
}
function checkNextPosition(originalXY,nextXY,i){
    return findIndexOfGrid([originalXY[0] + (i * nextXY[0]), originalXY[1] + (i * nextXY[1]) ]  );
}
