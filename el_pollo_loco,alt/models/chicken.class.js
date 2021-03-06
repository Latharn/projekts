class Chicken extends movableObject {
    y = 360;
    height = 60;
    width = 90;

    IMAGES_WALKING = [
        './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    ]
    constructor() {
        super().loadImage('./img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
       this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 500;
        this.speed= 0.15 + Math.random() * 1.15;
       this.animate();
    }

    animate() {

        this.moveLeft();
       setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }
    
    }