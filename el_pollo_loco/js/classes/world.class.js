class World {
    character = new Character();
    chickens = level1.enemies;
    clouds = level1.clouds;
    backgrounds = level1.background;
    backgroundsX = 0;
    statusbar = level1.statusbar;
    bottlebar = level1.bottlebar;
    coinsbar = level1.coinsbar;
    gameOver = level1.gameOver;
    bottle = level1.bottle;
    coins = level1.coins;
    flyingBottle = level1.flyingBottle;
    health = 100;
    checkGameOver = false;
    dead = false;
    ctx;
    i;
    keyboard;
    cameraX;
    amountOfBottles = 0;
    bottleArrayIndex = 0;
    soundThrow = new Audio('https://freesound.org/data/previews/454/454595_9159316-lq.mp3');
    soundBottleBroke = new Audio('https://freesound.org/data/previews/485/485518_10421051-lq.mp3');
    soundCollectBottleCoin = new Audio('https://freesound.org/data/previews/564/564908_11947866-lq.mp3');
    imgGameOverLost = new Image();



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;

        this.draw();
        this.sendVariablesToMovableObjects();
        this.gameOverFunction();

    }

    sendVariablesToMovableObjects() {
        this.character.keyboard = this.keyboard;
    }

    draw() {
        this.cameraX = -this.character.x;
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.drawElements(this.backgrounds);
        this.drawOneElement(this.character);
        this.drawElements(this.chickens);
        this.drawElements(this.clouds);
        this.drawElements(this.statusbar);
        this.drawElements(this.coins);
        this.drawElements(this.coinsbar);
        this.drawElements(this.bottlebar);
        this.drawElements(this.gameOver);
        this.drawElements(this.bottle);
        this.drawElements(this.flyingBottle);
        this.drawElements(this.gameOver);
        this.ctx.translate(-this.cameraX, 0);

        if (this.cameraX * -1 >= this.backgroundsX) {
            let currentX = this.backgroundsX;
            this.backgroundsX = currentX + 2398;
            this.pushNewBackgrounds();
        }

        self = this;
        requestAnimationFrame(() => {   // wiederholt funktion draw ständig.        
            self.draw();
        });

    }

    pushNewBackgrounds() {
        this.backgrounds.push(new Background('img/5.Fondo/Capas/5.cielo_1920-1080px.png', this.backgroundsX));
        this.backgrounds.push(new Background('img/5.Fondo/Capas/3.Fondo3/1.png', this.backgroundsX),);
        this.backgrounds.push(new Background('img/5.Fondo/Capas/2.Fondo2/1.png', this.backgroundsX),);
        this.backgrounds.push(new Background('img/5.Fondo/Capas/1.suelo-fondo1/1.png', this.backgroundsX),);
        this.backgrounds.push(new Background('img/5.Fondo/Capas/5.cielo_1920-1080px.png', this.backgroundsX + 1199),);
        this.backgrounds.push(new Background('img/5.Fondo/Capas/3.Fondo3/2.png', this.backgroundsX + 1199),);
        this.backgrounds.push(new Background('img/5.Fondo/Capas/2.Fondo2/2.png', this.backgroundsX + 1199),);
        this.backgrounds.push(new Background('img/5.Fondo/Capas/1.suelo-fondo1/2.png', this.backgroundsX + 1199));
    }

    drawOneElement(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);

        if (object.otherDirection) {
            this.flipImageBack(object);
        }
        this.damage(object);
        this.moveStatusBarRight();
    }

    drawElements(objectsArray) {
        objectsArray.forEach(object => {
            this.drawOneElement(object);
        });
    }

    damage(object) {
        if (object instanceof Character || object instanceof Chicken || object instanceof Bottle || object instanceof Endboss || object instanceof Coins) {            
            
            if (object instanceof Chicken) {
                this.showDamage(object);
            }

            if (object instanceof Endboss) {
                this.showDamage(object);
            }

            if (object instanceof Bottle) {
               this.collectBottle(object);
            }

            if (object instanceof Coins) {
               this.collectCoins(object);
            }
           
        }
    }

    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    flipImageBack(object) {
        object.x = object.x * -1;
        this.ctx.restore();
    }

    showDamage(cousingObject) {
        if (this.detectCollision(cousingObject) && cousingObject.chickenDead == false) {
            this.health -= 0.4;

            if (cousingObject instanceof Endboss) {
                this.health -= 100;
            }

            if (this.health < 100 && this.health > 75) {
                this.statusbar[0].health = 4;
                this.character.health = 4;
                this.character.hurtAnimatition();
            }
            if (this.health <= 75 && this.health > 50) {
                this.statusbar[0].health = 3;
                this.character.health = 3;
                this.character.hurtAnimatition();
            }
            if (this.health <= 50 && this.health > 25) {
                this.statusbar[0].health = 2;
                this.character.health = 2;
                this.character.hurtAnimatition();
            }
            if (this.health <= 25 && this.health > 1) {
                this.statusbar[0].health = 1;
                this.character.health = 1;
                this.character.hurtAnimatition();
            }
            if (this.health <= 0.9 && this.dead == false) {
                this.statusbar[0].health = 0;
                this.character.health = 0;
                this.character.deadAnimation();
                this.dead = true;
                this.checkGameOver = true;
            }
        }
    }

    collectBottle(object) {
        if (this.detectCollision(object)) {
            if (object.img.src.includes('Botella.png')) {
                object.y = 5000;
                if (this.bottlebar[0].amountOfBottles <= 5) {
                    this.soundCollectBottleCoin.play();
                    this.bottlebar[0].amountOfBottles++;
                    this.character.amountOfBottles++;
                    level1.flyingBottle.push(new FlyingBottle());
                }
            }
        }
    }

    collectCoins(object) {
        if (this.detectCollision(object)) {
            if (this.coinsbar[0].amountCoins <= 5) {
                this.soundCollectBottleCoin.play();
                object.y = 1000;
                this.coinsbar[0].amountCoins++;
            }
        }

    }

    characterThrowBottle() {
        if (this.bottlebar[0].amountOfBottles >= 1) {
            this.soundThrow.play();
            this.flyingBottle[this.bottleArrayIndex].fly(this.character.x, this.character.y);
            this.detectBottleCollision(this.flyingBottle[this.bottleArrayIndex]);
            this.bottlebar[0].amountOfBottles--;
            this.bottleArrayIndex++;
        }
    }

    detectBottleCollision(flyingBottle) {

        this.chickens.forEach((chicken) => {
            let interval = setInterval(() => {
                if (this.collisiondetected(chicken, flyingBottle)) {
                    this.soundThrow.pause();
                    flyingBottle.splash();
                    this.soundBottleBroke.play();
                    this.damageEnemy(chicken);
                    clearInterval(interval);
                }
            }, 200);

        });


    }

    collisiondetected(chicken, flyingBottle) {
        return this.character.x < chicken.x && (chicken.x - 70) < flyingBottle.x &&
            (flyingBottle.y + 70) > chicken.y && chicken.chickenDead == false
    }

    detectCollision(object) {
        return this.character.x + this.character.width > object.x &&
            this.character.y + this.character.height > object.y &&
            this.character.x < object.x &&
            (this.character.y + 150) < object.y + object.height
    }

    moveStatusBarRight() {
        this.statusbar[0].x = this.character.x;
        this.bottlebar[0].x = this.character.x + 300;
        this.coinsbar[0].x = this.character.x + 600;
    }

    gameOverFunction() {
        let interval = setInterval(() => {
            if (this.checkGameOver == true && this.dead == true) {
                setTimeout(() => {
                    this.gameOver[0].gameOverLost(this.character.x);
                    clearInterval(interval);
                }, 1000);
            }
            if (this.checkGameOver == true && this.dead == false && this.coinsbar[0].amountCoins == 5) {
                setTimeout(() => {
                    this.gameOver[0].gameOverWin(this.character.x);
                    clearInterval(interval);
                }, 1000);
            }
        }, 200);
    }

    damageEnemy(chicken) {
        if (chicken instanceof Chicken) {
            chicken.chickenDead = true;
            setTimeout(() => { chicken.img.src = 'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'; }, 200);
        }
        if (chicken instanceof Endboss) {
            chicken.hits++;
            if (chicken.hits == 3) {
                this.checkGameOver = true;
            }
        }

    }

}