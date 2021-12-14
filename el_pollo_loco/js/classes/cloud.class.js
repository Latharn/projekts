class Cloud extends MovableObjects {
    x = 20;
    y = 5;
    width = 700;
    height = 600;

    constructor(path) {
        super().loadImage(path);
        this.x = 20 + Math.random() * 1500;
        this.animateClouds();
    }

    animateClouds() {
        setInterval(()=>{
            this.moveLeft(0.15);
        },1000/60);      
    }
}