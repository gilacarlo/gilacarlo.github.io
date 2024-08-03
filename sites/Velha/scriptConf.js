const inputEixoX = document.getElementById('input1');
const inputEixoY = document.getElementById('input2');
const inputquantParaGanhar = document.getElementById('input3');
const inputgameMode = document.getElementById('dropdown');



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

    document.getElementById('grid-container').innerHTML = ``;
    X = 1, Y = 1;
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

}

inputEixoX.addEventListener('input', reset);
inputEixoY.addEventListener('input', reset);
inputquantParaGanhar.addEventListener('input', reset);
inputgameMode.addEventListener('input', reset);

function gameEnded(state){
    if(state == _X_svg){
        displayGameEnded(`W O N`,_X_svg);
    }
    if(state == _O_svg){
        displayGameEnded(`W O N`,_O_svg);
    }
    if(state == "tied"){
        displayGameEnded("T I E D");
    }
}

function displayGameEnded(str,svg = ``){


    const mesenge = document.getElementById('displayMesenge');
    mesenge.style.display = "flex";

    let newstr = ``;
    for (const onestr of str) {
        newstr += `<div>${onestr}</div>`
    }
    document.getElementById('displayMesenge').innerHTML += `
    <div class="displayMesenge_content" id="displayMesenge_content">
        ${svg}
    </div>
    ${newstr}

    `;
}
const Configuration = document.getElementById('configuracao');

Configuration.style.display = "none";

let letcloseOpenConfiguration = 0;
function closeOpenConfiguration(){
    const Configuration = document.getElementById('configuracao');
    const openConfiguration = document.getElementById('close_configuracao');

    if(letcloseOpenConfiguration == 0){
        letcloseOpenConfiguration = 1;
        Configuration.style.display = "flex";
        openConfiguration.style.display = "none";

    }else{
        letcloseOpenConfiguration = 0;
        Configuration.style.display = "none";
        openConfiguration.style.display = "flex";
    }
}