function selection(id, isMarked)
{
    alert("Clicked " + id);
}

class Game {
    user = null;
    user2 = null;

    constructor(){
        this.user = 'user1';
        this.user2 = 'user2';
    }

    printUser(){
        alert(this.user);
        alert(this.user2);
    }
}

const game = new Game();
game.printUser();