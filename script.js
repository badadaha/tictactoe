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
        this.checks();
    }

    checks(){
        this.checkColumns();
        this.checkRows();
        this.checkDiagonals();
    }

    checkColumns(){
        if((this.grid[1]['isMarked'] == 1)
        && (this.grid[4]['isMarked'] == 1)
        && (this.grid[7]['isMarked'] == 1)){
            this.win();
        } else if (
            (this.grid[2]['isMarked'] == 1)
            && (this.grid[5]['isMarked'] == 1)
            && (this.grid[8]['isMarked'] == 1)
        ){
            this.win();
        } else if (
            (this.grid[3]['isMarked'] == 1)
            && (this.grid[6]['isMarked'] == 1)
            && (this.grid[9]['isMarked'] == 1)
        ){
            this.win();
        }
    }

    checkRows(){
        if((this.grid[1]['isMarked'] == 1)
        && (this.grid[2]['isMarked'] == 1)
        && (this.grid[3]['isMarked'] == 1)){
            this.win();
        } else if (
            (this.grid[4]['isMarked'] == 1)
            && (this.grid[5]['isMarked'] == 1)
            && (this.grid[6]['isMarked'] == 1)
        ){
            this.win();
        } else if (
            (this.grid[7]['isMarked'] == 1)
            && (this.grid[8]['isMarked'] == 1)
            && (this.grid[9]['isMarked'] == 1)
        ){
            this.win();
        }
    }

    checkDiagonals(){
        if((this.grid[1]['isMarked'] == 1)
        && (this.grid[5]['isMarked'] == 1)
        && (this.grid[9]['isMarked'] == 1)){
            this.win();
        } else if (
            (this.grid[3]['isMarked'] == 1)
            && (this.grid[5]['isMarked'] == 1)
            && (this.grid[7]['isMarked'] == 1)
        ){
            this.win();
        }
    }

    reset(){
        let reset = confirm('RESET?');
        if(reset == true){
            for (let i=1; i<=9; i++){
                this.grid[i]["isMarked"] = 0;
                this.grid[i]["owner"] = null;
            }
            window.location.reload();
        }
    }

    win(){
        alert('YOU WIN!');
        this.reset();
    }

    loss(){
        alert('YOU LOSE! SORRY BOUT IT');
        this.reset();
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