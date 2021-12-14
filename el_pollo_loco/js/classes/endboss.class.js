class Endboss extends MovableObjects {
    x = 4000;
    width = 500;
    hits = 0;
    chickenDead = false;
    deadImage = 0;

    walkingImages = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
    ];

    deadImages = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',
    ];

    constructor() {
        super().loadImage('img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png');
        this.loadImages(this.walkingImages, this.imageCache);
        this.loadImages(this.deadImages, this.imageCacheDead);
        this.animateEndboss();
    }

    animateEndboss() {
        let interval = setInterval(() => {
            let i = this.currentImage % this.walkingImages.length;
            this.img = this.imageCache[i];
            this.currentImage++;
            if (this.hits == 3) {
                clearInterval(interval);
                this.deadAnimation();
            }
        }, 150);
    }

    deadAnimation() {
        let intervalDead = setInterval(() => {
            if (this.deadImage >= 2) {
                clearInterval(intervalDead);
                setTimeout(()=>{this.y= 2000},700);
            }
            let i = this.deadImage % this.deadImages.length;
            this.img = this.imageCacheDead[i];
            this.deadImage++;

        }, 200);


    }


}