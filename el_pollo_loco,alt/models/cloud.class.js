class cloud extends movableObject{
y=10;
height=250;
width=500;
speed=0.25;
    constructor(){
        super().loadImage('./img/5.Fondo/Capas/4.nubes/1.png');
    this.x= Math.random()*500 ;
    this.animate();
    }

    animate(){
       this.moveLeft();
    }


}