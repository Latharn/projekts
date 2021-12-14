class Background extends MovableObjects { 
    x = 0;   
    
    constructor(path, x){
        super().loadImage(path);
        this.x = x;  

    }
}