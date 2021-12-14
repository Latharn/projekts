class Coins extends MovableObjects {

    width = 100;
    height = 100;

    constructor(path) {
        super().loadImage(path);
        this.randomBottlePositionX();
        this.randomBottlePositionY();
    }


    randomBottlePositionX() {
        this.x = 50 + Math.random() * 5000;

    }

    randomBottlePositionY() {
        this.y = 90 + Math.random() * 455;
    }

}