class Level {
    backgroundX = 0;
    enemies;
    clouds;
    background;
    statusbar;
    bottlebar;
    bottle;
    flyingBottle;
    coinsbar;
    gameOver;

    constructor(enemies, clouds, background, statusbar, bottle, bottlebar, flyingBottle, coins, coinsbar, gameOver) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.background = background;
        this.statusbar = statusbar;
        this.bottle = bottle;
        this.bottlebar = bottlebar;
        this.flyingBottle = flyingBottle;
        this.coins = coins;
        this.coinsbar = coinsbar;
        this.gameOver = gameOver;
    }
}