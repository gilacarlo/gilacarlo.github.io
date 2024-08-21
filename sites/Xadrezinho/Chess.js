


class Chess {
    constructor(X_totalPlaces, Y_totalPlaces, pieces){
        this.grid = crateGridInList(X_totalPlaces, Y_totalPlaces, pieces);
        this.X_totalPlaces = X_totalPlaces;
        createGridInHtml(X_totalPlaces, Y_totalPlaces, pieces);
        this.previusCoordenates = [-1,-1];

    }
    main(coordenates){
        clickEffects(coordenates, this.previusCoordenates);
        game.updateStates(coordenates);
        this.previusCoordenates = coordenates;
    }
    updateStates(coordenates){     
        let previusx = this.previusCoordenates[0];
        if(previusx == -1){
            return;
        }

        let x = coordenates[0];
        let y = coordenates[1];

        let previusy = this.previusCoordenates[1];

        this.grid[coodernateToIndexinGrid(x, y, this.X_totalPlaces)] = this.grid[coodernateToIndexinGrid(previusx, previusy, this.X_totalPlaces)];

        this.grid[coodernateToIndexinGrid(previusx, previusy, this.X_totalPlaces)] = false;
        console.log(this.grid)
    }
}

const game = new Chess (
    8,
    8, 
    [
        [[0,0], "rook", "black"],
        [[1,0], "knigth2", "black"],
        [[2,0], "bishop", "black"],
        [[3,0], "queen", "black"],
        [[4,0], "king", "black"],
        [[5,0], "bishop", "black"],
        [[6,0], "knigth1", "black"],
        [[7,0], "rook", "black"],
        [[0,1], "pawn", "black"],
        [[1,1], "pawn", "black"],
        [[2,1], "pawn", "black"],
        [[3,1], "pawn", "black"],
        [[4,1], "pawn", "black"],
        [[5,1], "pawn", "black"],
        [[6,1], "pawn", "black"],
        [[7,1], "pawn", "black"],

        [[0,7], "rook", "white"],
        [[1,7], "knigth2", "white"],
        [[2,7], "bishop", "white"],
        [[3,7], "queen", "white"],
        [[4,7], "king", "white"],
        [[5,7], "bishop", "white"],
        [[6,7], "knigth1", "white"],
        [[7,7], "rook", "white"],
        [[0,6], "pawn", "white"],
        [[1,6], "pawn", "white"],
        [[2,6], "pawn", "white"],
        [[3,6], "pawn", "white"],
        [[4,6], "pawn", "white"],
        [[5,6], "pawn", "white"],
        [[6,6], "pawn", "white"],
        [[7,6], "pawn", "white"]

    ]
);

function playplayed(playedCoordenates){
    game.main(playedCoordenates);
}