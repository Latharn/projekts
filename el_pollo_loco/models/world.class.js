class World{
character = new Character();
enemies= [
    new Chicken(),
    new Chicken(),
    new Chicken(),
];
clouds=[
    new cloud()
];
backgroundObjects=[
    new backgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png',0),
    new backgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png',0),
    new backgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png',0),
    new backgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png',0),
    
    
]
    ctx;
canvas;
constructor(canvas){
    this.canvas= canvas
this.ctx= canvas.getContext('2d');
this.draw();
}

    draw(){
        this.ctx.clearRect(0,0, canvas.width, canvas.height);
this.addObjectsToMap(this.backgroundObjects)
this.addToMap(this.character);
this.addObjectsToMap(this.clouds)
this.addObjectsToMap(this.enemies)


let self=this;
requestAnimationFrame(function(){
    self.draw();
});
    }

addToMap(mo){
this.ctx.drawImage(mo.img,mo.x,mo.y,mo.width,mo.height)
};

addObjectsToMap(objects){
objects.forEach(o =>{
    this.addToMap(o);
});
}

}
