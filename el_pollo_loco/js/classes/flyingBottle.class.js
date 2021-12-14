class FlyingBottle extends MovableObjects {

    currentThrowImg = 0;
    currentSplashImg = 0;
    speed = 4;
    imageCacheBottles = [];
    imageCacheSplash = [];
    width = 100;
    height = 100;
    splashdetection = false;


    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png');
        this.loadImages(this.throwBottleImages, this.imageCacheBottles);
        this.loadImages(this.splashImages, this.imageCacheSplash);
    }


    throwBottleImages = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    splashImages = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ]


    fly(characterX, charachterY) {
        let interval = setInterval(() => {
            if (this.splashdetection) {
                clearInterval(interval);
            }
            this.x = characterX + 30 * this.speed;
            this.y = charachterY + 200;
            let i = this.currentThrowImg % this.throwBottleImages.length;
            this.img = this.imageCacheBottles[i];
            this.currentThrowImg++;
            this.speed++;
        }, 50);

    }

    splash() {
        this.splashdetection = true;
        let interval = setInterval(() => {
            let i = this.currentSplashImg % this.splashImages.length;
            this.img = this.imageCacheSplash[i];
            this.currentSplashImg++;
            if (this.currentSplashImg >= 5) {
                this.y = 5000;
                clearInterval(interval);
            }
        }, 200);

    }

}