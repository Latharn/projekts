class Statusbar extends MovableObjects {

    width = 300;
    height = 100;


    constructor(path) {
        super().loadImage(path);
        this.changeHealthBar();
    }

    healthImages = [
        'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/40_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/20__1.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png'
    ];

}
