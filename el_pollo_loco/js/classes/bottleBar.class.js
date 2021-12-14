class Bottlebar extends MovableObjects {

    width = 300;
    height = 100;
    currentThrowImg = 0;


    constructor(path) {
        super().loadImage(path);
        this.fillUpBottleBar();

    }

    bottlebarImages = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
    ];


    fillUpBottleBar() {
        setInterval(() => {
            this.loadImage(this.bottlebarImages[this.amountOfBottles]);
        }, 500);
    }

}
