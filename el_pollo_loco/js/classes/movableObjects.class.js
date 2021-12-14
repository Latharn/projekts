class MovableObjects {
    x = 0;
    y = 0;
    width = 1200;
    height = 700;
    imageCache = [];
    imageCacheJump = [];
    imageCacheHurt = [];
    imageCacheDead = [];
    coinsbarImagesCache = [];
    img;
    otherDirection;
    currentImage = 0;
    acceleration = 1;
    health = 5;
    amountOfBottles = 0;

    fallDown() {
        let id = setInterval(() => {
            this.y += this.acceleration;
            this.acceleration++;
            if (this.characterOnGround()) {
                clearInterval(id);
                this.acceleration = 0;
            }
        }, 50);
    }
    jump() {
        let id = setInterval(() => {
            this.y -= this.acceleration * 3;
            this.acceleration++;

            if (this.y <= 0) {
                clearInterval(id);
                this.acceleration = 0;
                this.fallDown();
            }
        }, 50);
    }

    characterinAir() {
        return this.y < 250;
    }

    characterOnGround() {
        return this.y > 249;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(imagesArray, imageCache) {           // function only converts pathes into <img src="path"> and push the img to the array imageCache.
        imagesArray.forEach((path) => {
            let img = new Image();
            img.src = path;
            imageCache.push(img);
        });
    }

    moveLeft(speed) {
        this.x -= speed;
    }

    changeHealthBar() {
        let interval = setInterval(() => {
            if (this.health == 4) {
                this.loadImage(this.healthImages[0]);
            } else if (this.health == 3) {
                this.loadImage(this.healthImages[1]);
            } else if (this.health == 2) {
                this.loadImage(this.healthImages[2]);
            }
            else if (this.health == 1) {
                this.loadImage(this.healthImages[3]);
            }
            else if (this.health == 0) {
                this.loadImage(this.healthImages[4]);
                clearInterval(interval);

            }
        }, 200);
    }
}