class cloud extends movableObject{
y=10;
height=250;
width=500;
    constructor(){
        super().loadImage('./img/5.Fondo/Capas/4.nubes/1.png');
    this.x= Math.random()*500 ;
    this.animate()
    }

    animate(){
        setInterval( ()=>{
            this.x -=0.25;
        },1000 / 60);
    }
}