let images = ['img/car.jpg', 'img/footer.jpg', 'img/firma.jpg', 'img/logo.png', 'img/daisy.png', 'img/daisy.jpg',
    'img/jack.jpg', 'img/harz.jpg', 'img/eifelturm.jpg', 'img/strand1.jpg', 'img/strand2.jpg', 'img/pinguin.jpg'];
    function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += ''
    for (let i = 0; i < images.length; i++) {
        document.getElementById('content').innerHTML += `
        <div class="img-box"><img src="${images[i]}" onclick="openImage(${i})"> </div>`;

    }
}
function openImage(i) {
document.getElementById('full-view').classList.remove('d-none')
document.getElementById('full-view').classList.add('bg')
document.getElementById('full-view').innerHTML+=` 
<div class="fullscreen"><img src="${images[i]}""></div>
<div class="close" onclick="closeImage()"><img src="img/close.svg">
</div>`;
}

function closeImage(){
    document.getElementById('full-view').classList.remove('bg');
    document.getElementById('full-view').classList.add('d-none');
document.getElementById('full-view').innerHTML='';
    
}
