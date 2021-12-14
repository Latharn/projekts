class GameOver extends MovableObjects {

    y = 1000;
 
    
    constructor(){
        super().loadImage('img/9.Intro _ Outro Image/_Game over_ screen/1.you lost.png');
    }

    gameOverLost(characterX) {
        this.x = characterX;
        this.y =0;
        document.getElementById('newGame').classList.remove('dbNone');
    }


    gameOverWin(characterX) {
        this.loadImage('img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png');
        this.x = characterX;
        this.y =0;
        document.getElementById('newGame').classList.remove('dbNone');
    }



}