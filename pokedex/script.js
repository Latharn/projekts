window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        renderPokemon();
        preloadnextPokemon();
    };
}

let pokemons = [];
let pokemonsInformation = [];
let start = 0;

async function init() {
    await preloadnextPokemon();
    renderPokemon();
    preloadnextPokemon();
}

async function preloadnextPokemon() {
    await loadnextPokemon();
    await loadPokemonInformation();
}

async function loadnextPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${start}&limit=75`;
    let response = await fetch(url);
    pokemons = await response.json();
    start += 75;
}

async function loadPokemonInformation() {

    for (let i = 0; i < pokemons['results'].length; i++) {
        const pokemon = pokemons['results'][i];
        let inforesponse = await fetch(pokemon['url']);
        pokemonsInformation.push(await inforesponse.json());
    };
}

function renderPokemon() {
    document.getElementById('container').innerHTML = "";

    for (let i = 0; i < pokemonsInformation.length; i++) {
        const pokemon = pokemonsInformation[i];
        document.getElementById('container').innerHTML += `
        <!-- Card Small -->
        <div class="card-small" id="cardSmall-${i}" onclick="openBig(${i})">
            <div class="card-small-top">
                <div class="headline" id="pokemon-name">${pokemon['name']}</div>
                <div class="number" id="number">#${pokemon['id']}</div>
            </div>
            <div class="position-img">
                <img class="img-small" id="pokemonImage" src="${pokemon['sprites']['other']['official-artwork']['front_default']}">
            </div>
            <div class="card-small-bottom" id="types-${i}">
            </div>
        </div>
        `;
        types(i);
    };
}

function types(i) {
    let types = pokemonsInformation[i]['types'];
    for (let j = 0; j < types.length; j++) {
        let type = types[j]['type']['name'];
        document.getElementById('types-' + i).innerHTML += `
        <div class="type">
        ${type}
        </div>
        `;

        if (type = type) {
            document.getElementById('cardSmall-' + i).classList.add(types[0]['type']['name']);
        }
    };
}

function typesbig(i) {
    let types = pokemonsInformation[i]['types'];
    for (let j = 0; j < types.length; j++) {
        let type = types[j]['type']['name'];
        document.getElementById('typesbig-' + i).innerHTML += `
        <div class="type">
        ${type}
        </div>
        `;

        if (type = type) {
            document.getElementById('cardBig-' + i).classList.add(types[0]['type']['name']);
        }
    };
}

function openBig(i) {
    document.getElementById('container-fs').classList.remove('d-none');
    renderBig(i);
}

function closeBig() {
    document.getElementById('container-fs').classList.add('d-none');
}

function renderBig(i) {
    renderBigInfo(i);
    typesbig(i);
    renderStats(i);
    renderAbility(i);
    renderHeight(i);
    renderWeight(i);
}

function renderBigInfo(i) {
    document.getElementById('container-fs').innerHTML = '';
    let pokemon = pokemonsInformation[i];
    document.getElementById('container-fs').innerHTML = `
    <div class="card-big" id="cardBig-${i}" onclick="event.stopPropagation()">
        <div class="card-big-top">
            <div class="headline" id="pokemon-name">${pokemon['name']}</div>
            <div class="number" id="number">#${pokemon['id']}</div>
        </div>
        <div class="position-img-big">
            <img class="img-big" id="pokemonImage" src="${pokemon['sprites']['other']['official-artwork']['front_default']}">
        </div>
        <div class="card-big-bottom" id="typesbig-${i}">
        </div>
    </div>
    <div class="card-bottom" onclick="event.stopPropagation()">
        <span class="center"><b>Stats</b></span>
        <table id="stats-${i}">    
        </table>
        <span class="center"><b>Ability</b></span>
        <table id="ability-${i}">    
        </table>
        <div class="center" id="height-${i}">
        </div>
        <div class="center" id="weight-${i}">
        </div>
    </div>
    `;
}

function renderStats(i) {
    document.getElementById('stats-' + i).innerHTML = "";

    let stats = pokemonsInformation[i]['stats'];

    for (let j = 0; j < stats.length; j++) {
        let stat = stats[j];
        document.getElementById('stats-' + i).innerHTML += `
        <tr>
            <td>
                ${stat['stat']['name']}
            </td>
            <td>
                ${stat['base_stat']}
            </td>
        </tr>
        `;
    };
}

function renderAbility(i) {
    document.getElementById('ability-' + i).innerHTML = "";

    let abilities = pokemonsInformation[i]['abilities'];

    for (let j = 0; j < abilities.length; j++) {
        let ability = abilities[j];
        document.getElementById('ability-' + i).innerHTML += `
        <tr>
            <td>
                ${ability['ability']['name']}
            </td>
        </tr>
        `;
    };
}

function renderHeight(i) {
    document.getElementById('height-' + i).innerHTML = "";

    let height = pokemonsInformation[i]['height'];

    document.getElementById('height-' + i).innerHTML = `
        <span><b>Height:</b> ${height} dm</span>
    `;
}

function renderWeight(i) {
    document.getElementById('weight-' + i).innerHTML = "";

    let weight = pokemonsInformation[i]['weight'];

    document.getElementById('weight-' + i).innerHTML = `
        <span><b>Weight:</b> ${weight} dg</span>
    `;
}