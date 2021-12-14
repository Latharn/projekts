let world;
let canvas;
let startImg = document.getElementById('startImg');
keyboard = new Keyboard();

function init() {
   canvas = document.getElementById('canvas');
   setTimeout(() => {
      document.getElementById('startImg').classList.add('dbNone');
      document.getElementById('canvas').classList.remove('dbNone');
      world = new World(canvas, keyboard);
   }, 2000);
   
}

document.addEventListener('keydown', (e) => {
   if (e.code == 'ArrowUp') {
      keyboard.jump = true;
   }
   if (e.code == 'ArrowLeft') {
      keyboard.left = true;
   }
   if (e.code == 'ArrowRight') {
      keyboard.right = true;
   }
   if (e.code == 'Space' && e.repeat == false) {
      world.characterThrowBottle();
   }

})

document.addEventListener('keyup', (e) => {

   if (e.code == 'ArrowUp') {
      keyboard.jump = false;
   }
   if (e.code == 'ArrowLeft') {
      keyboard.left = false;
   }
   if (e.code == 'ArrowRight') {
      keyboard.right = false;
   }   

})

function restart() {
   window.location.reload();
}

function canvasFullScreen() {
   canvas.requestFullscreen();
}




