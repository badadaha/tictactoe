class Player {
    symbol = null;

    constructor(){
        this.symbol = 'X';
    }

    clicked(id){
        parent = document.getElementById(id);
        parent.children[0].style.opacity = 1;
    }
}

class Game {
    player1 = null;
    grid = [];

    constructor(){
        this.player1 = new Player();
        for (let i=1; i<=9; i++){
            this.grid[i] = [];
            this.grid[i]["isMarked"] = 0;
            this.grid[i]["owner"] = null;
        }
    }

    clicked(stringId){
        let id = parseInt(stringId);
        this.grid[id]['isMarked'] = 1;
        this.grid[id]['owner'] = this.player1;
    }

}

const game = new Game();

function selection(id) {
    game.clicked(id);
    game.player1.clicked(id);
}

function testGrid(){
    let test = '';
    for(let i=1; i<=9; i++){
        test += '(' + i + ', ';
        test += game.grid[i]['isMarked'].toString();
        test += '), ';
    }
    alert(test);
}