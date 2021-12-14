class Chicken extends MovableObjects {
    x;
    y= 520;
    width= 90;
    height=90;
    speed = 2 + Math.random()*10;
    chickenDead = false;

    walkingImages = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ]
  
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.x = 500 + Math.random() * 5000;
        this.loadImages(this.walkingImages, this.imageCache);
        this.animateChicken();
        
    } 
    
    animateChicken() {
        let interval = setInterval(()=>{
            if(this.chickenDead) {
                clearInterval(interval);                
            }
            let i = this.currentImage % this.walkingImages.length;
            this.img = this.imageCache[i];
            this.currentImage++;
            this.moveLeft(this.speed);
        }, 150);
    }

      

    
}