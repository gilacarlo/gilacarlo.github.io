const inputEixoX = document.getElementById('input1');
const inputEixoY = document.getElementById('input2');
const inputquantParaGanhar = document.getElementById('input3');
const inputgameMode = document.getElementById('dropdown');

inputEixoX.addEventListener('input', reset);
inputEixoY.addEventListener('input', reset);
inputquantParaGanhar.addEventListener('input', reset);
inputgameMode.addEventListener('input', reset);


let gridContainer = ``;
function reset(){
    grid = [];
    all_TotalPlaces = 0;
    X_totalPlaces = inputEixoX.value;
    Y_totalPlaces = inputEixoY.value;
    inARowToWin = inputquantParaGanhar.value;
    gameMode = inputgameMode.value;
    currentTurn = _X_svg;
    roundsPlayed = 0;
    gameEndedTF = false;
    ExtraroundsPlayed = 0;
    
    
    console.table([
        { Configuration: 'Width:', Value: X_totalPlaces},
        { Configuration: 'Height:', Value: X_totalPlaces},
        { Configuration: 'In a row to win:', Value: inARowToWin},
        { Configuration: 'Game mode:', Value: gameMode}

    ])

    const mesenge = document.getElementById('displayMesenge');
    mesenge.style.display = "none";

    document.getElementById('displayMesenge').innerHTML = ``

    console.groupEnd();

    document.documentElement.style.setProperty('--X', X_totalPlaces);
    document.documentElement.style.setProperty('--Y', Y_totalPlaces);
    document.documentElement.style.setProperty('--grid-item-color', `rgb(32, 62, 255)`);
    

    X = 1, Y = 1;
    gridContainer = ``;
    for(let i = 0; i < X_totalPlaces * Y_totalPlaces; i++){
        gridContainer += `<div class="grid-item" id="grid-item[${X - 1},${Y - 1}]" onclick="if(gameEndedTF==false){XOdetected([${X - 1},${Y - 1}])};"></div>`;
        if(X == X_totalPlaces){
            X = 1;
            Y++
        }else{
            X++
        }
    }
    document.getElementById('grid-container').innerHTML = gridContainer;


    for(let i = 0; i < X_totalPlaces * Y_totalPlaces; i++){
        grid.push([0,[[]]]);
        all_TotalPlaces += 1;
    }
    // grid[0][OBJ] = _Wall_svg;
    // document.getElementById(`grid-item[${[0,0]}]`).innerHTML = _Wall_svg;

}

reset();