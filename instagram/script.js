let posts = [{
    'author': 'Kälte-Klima24',
    'image': 'img/car.jpg',
    'description': ' Unsere Firmenfahrzeuge',
    'location': 'Rellingen'
},
{
    'author': 'Kälte-Klima24',
    'image': 'img/firma.jpg',
    'description': ' Unsere Firmenzentrale',
    'location': 'Rellingen'
},
{
    'author': 'Latharn',
    'image': 'img/harz.jpg',
    'description': ' Aussicht aus dem Motrorrad-Hotel im Harz',
    'location': 'Harz'
},
{
    'author': 'Latharn',
    'image': 'img/pinguin.jpg',
    'description': ' Ist der nicht niedlich?',
    'location': ''
},
{
    'author': 'Latharn',
    'image': 'img/eifelturm.jpg',
    'description': ' Lichtershow zur vollen Stunde, Abends. Einfach genial ',
    'location': 'Paris, Frankreich'
},
{
    'author': 'Kälte-Klima24',
    'image': 'img/footer.jpg',
    'description': ' Schaut bei uns vorbei!',
    'location': 'Rellingen'
},
];

function show() {
    document.getElementById('postcontainer').innerHTML += '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('postcontainer').innerHTML += `
        <div class="postBox">
            <div>${post['author']}</div>
            <div>${post['location']}</div>
            <img src="${post['image']}">
            <div>${post['description']}</div>
        </div><br>
         `;




    }
}