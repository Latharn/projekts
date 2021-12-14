class Coinsbar extends MovableObjects {


    width = 300;
    height = 100;
    amountCoins = 0;


    constructor(path) {
        super().loadImage(path);
        this.fillCoinsbar();
    }




    fillCoinsbar() {
        setInterval(() => {
            if (this.amountCoins == 0) {
                this.loadImage('img/7.Marcadores/Barra/Marcador moneda/Verde/0_.png');
            }
            if (this.amountCoins == 1) {
                this.loadImage('img/7.Marcadores/Barra/Marcador moneda/Verde/20_  copia.png');
            }
            if (this.amountCoins == 2) {
                this.loadImage('img/7.Marcadores/Barra/Marcador moneda/Verde/40_  copia 2.png');
            }
            if (this.amountCoins == 3) {
                this.loadImage('img/7.Marcadores/Barra/Marcador moneda/Verde/60_  copia 2.png');
            }
            if (this.amountCoins == 4) {
                this.loadImage('img/7.Marcadores/Barra/Marcador moneda/Verde/80_  copia 2.png');
            }
            if (this.amountCoins == 5) {
                this.loadImage('img/7.Marcadores/Barra/Marcador moneda/Verde/100_ copia 2.png');
            }
        }, 200);

    }



}