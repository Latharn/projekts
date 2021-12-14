class Character extends MovableObjects {
    x = 0;
    y = 250;
    width = 200;
    height = 400;
    currentImage = 0;
    hurtImage = 0;
    deadImage = 0;
    keyboard;
    soundWalking = new Audio('https://freesound.org/data/previews/345/345560_5121236-lq.mp3');
    soundJump = new Audio('https://freesound.org/data/previews/456/456374_9498993-lq.mp3');
    soundDead = new Audio('https://freesound.org/data/previews/414/414071_5121236-lq.mp3');



    walkingImages = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ];

    jumpImages = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
    ];

    hurtImages = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ];

    deadImages = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
    ];




    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.walkingImages, this.imageCache);
        this.loadImages(this.jumpImages, this.imageCacheJump);
        this.loadImages(this.hurtImages, this.imageCacheHurt);
        this.loadImages(this.deadImages, this.imageCacheDead);
        this.animateCharacter();
        this.fallDown();
    }

    animateCharacter() {

        let interval = setInterval(() => {
            if (keyboard.right == true) {
                this.x += 30;
                this.otherDirection = false;
                if (this.y >= 249) {
                    this.changeCharacterImages(this.walkingImages);
                }
                this.playWalkingSound();
            }
            else this.soundWalking.pause();

            if (this.keyboard.left == true && this.x > 0) {
                this.x -= 30;
                this.otherDirection = true;
                if (this.y >= 249) {
                    this.changeCharacterImages(this.walkingImages);
                }
                this.playWalkingSound();
            }
            if (this.keyboard.jump == true && this.y >= 250) {
                this.jump();
                this.jumpAnimation();
                this.soundJump.play();
            }

            if (this.health == 0) {
                clearInterval(interval);
            }
        }, 60);

    }

    jumpAnimation() {
        this.currentImage = 0;
        let id = setInterval(() => {
            let i = this.currentImage % this.jumpImages.length;
            this.img = this.imageCacheJump[i];
            if (this.currentImage >= 8) {
                clearInterval(id);
            }
            this.currentImage++;
        }, 200);
    }

    playWalkingSound() {
        if (this.y >= 249) {
            this.soundWalking.play();
        } else this.soundWalking.pause();
    }


    changeCharacterImages(movement) {
        let i = this.currentImage % movement.length;
        this.img = this.imageCache[i]; // change the img Variable to current image from imageCacheArray.
        this.currentImage++;
    }

    hurtAnimatition() {
        let i = this.hurtImage % this.hurtImages.length;
        this.img = this.imageCacheHurt[i];
        this.hurtImage++;
    }


    deadAnimation() {
        setInterval(() => {
            if (this.deadImage <= 6) {
                this.soundWalking.pause();
                this.soundDead.play();
                let i = this.deadImage % this.deadImages.length;
                this.img = this.imageCacheDead[i];
                this.deadImage++;
            }
        }, 100);
    }










}