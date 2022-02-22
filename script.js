class Game {
    grid = [];

    constructor(){
        this.ai = new AI();
        for (let i=1; i<=9; i++){
            this.grid[i] = [];
            this.grid[i] = 0;
        }
    }

    clicked(stringId, owner){
        let id = parseInt(stringId);
        this.grid[id] = owner;
        this.checks();
    }

    checks(){
        this.checkColumns();
        this.checkRows();
        this.checkDiagonals();
    }

    checkColumns(){
        if((this.grid[1] == 1)
        && (this.grid[4] == 1)
        && (this.grid[7] == 1)){
            this.win();
        } else if (
            (this.grid[2] == 1)
            && (this.grid[5] == 1)
            && (this.grid[8] == 1)
        ){
            this.win();
        } else if (
            (this.grid[3] == 1)
            && (this.grid[6] == 1)
            && (this.grid[9] == 1)
        ){
            this.win();
        }

        if((this.grid[1] == 2)
        && (this.grid[4] == 2)
        && (this.grid[7] == 2)){
            this.win();
        } else if (
            (this.grid[2] == 2)
            && (this.grid[5] == 2)
            && (this.grid[8] == 2)
        ){
            this.win();
        } else if (
            (this.grid[3] == 2)
            && (this.grid[6] == 2)
            && (this.grid[9] == 2)
        ){
            this.loss();
        }
    }

    checkRows(){
        if((this.grid[1] == 1)
        && (this.grid[2] == 1)
        && (this.grid[3] == 1)){
            this.win();
        } else if (
            (this.grid[4] == 1)
            && (this.grid[5] == 1)
            && (this.grid[6] == 1)
        ){
            this.win();
        } else if (
            (this.grid[7] == 1)
            && (this.grid[8] == 1)
            && (this.grid[9] == 1)
        ){
            this.win();
        }

        if((this.grid[1] == 2)
        && (this.grid[2] == 2)
        && (this.grid[3] == 2)){
            this.loss();
        } else if (
            (this.grid[4] == 2)
            && (this.grid[5] == 2)
            && (this.grid[6] == 2)
        ){
            this.loss();
        } else if (
            (this.grid[7] == 2)
            && (this.grid[8] == 2)
            && (this.grid[9] == 2)
        ){
            this.loss();
        }
    }

    checkDiagonals(){
        if((this.grid[1] == 1)
        && (this.grid[5] == 1)
        && (this.grid[9] == 1)){
            this.win();
        } else if (
            (this.grid[3] == 1)
            && (this.grid[5] == 1)
            && (this.grid[7] == 1)
        ){
            this.win();
        }

        if((this.grid[1] == 2)
        && (this.grid[5] == 2)
        && (this.grid[9] == 2)){
            this.loss();
        } else if (
            (this.grid[3] == 2)
            && (this.grid[5] == 2)
            && (this.grid[7] == 2)
        ){
            this.loss();
        }
    }

    reset(){
        let reset = confirm('RESET?');
        if(reset == true){
            for (let i=1; i<=9; i++){
                this.grid[i] = 0;
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

class AI {
    game = null;
    symbol = null;

    constructor(game){
        this.symbol = 'O';
        this.game = game;
    }

    clicked(id){
        let parent = document.getElementById(id);
        parent.children[0].children[0].innerHTML = this.symbol;
        parent.children[0].style.opacity = 1;
        parent.children[0].children[0].style.color = '#00F';
    }

    decide(){
        let options = [];
        for(let i=1; i<=9; i++){
            if(this.game.grid[i] == 0)
                options[i] = i;
        }
        alert(options);
        let decision = options[Math.floor(Math.random()*options.length)];
        alert(decision);
        this.game.clicked(decision, 2);
        this.clicked(decision);
    }
}

class Player {
    game = null;
    symbol = null;

    constructor(game, ai){
        this.symbol = 'X';
        this.game = game;
        this.ai = ai;
    }

    clicked(id){
        let parent = document.getElementById(id);
        parent.children[0].style.opacity = 1;
        this.ai.decide();
    }
}

const game = new Game();
const ai = new AI(game);
const player = new Player(game, ai);

function selection(id) {
    game.clicked(id, 1);
    player.clicked(id);
}

function testGrid(){
    let test = '';
    for(let i=1; i<=9; i++){
        test += '(' + i + ', ';
        test += game.grid[i].toString();
        test += '), ';
    }
    alert(test);
}