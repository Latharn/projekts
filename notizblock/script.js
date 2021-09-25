let titles = [];
let notes = [];
load();


function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `
    <div id="note-bg"  class="note-bg d-none" >
    
    <div class="note" >
        <input id="title" class="inputTitle" type="text" placeholder="Title..."><br>
        <input id="note" class="inputNote" type="text" placeholder="Take a Note...">
        <img src="img/close.svg" onclick="closeNote()">
        <button class="btn" onclick="addNote()">Speichern</button>
    </div>
        </div>
        
        
        <div class="inputs" onclick="openNote()"> Notiz Hinzufügen</div>
      
    `;

    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const note = notes[i];

        content.innerHTML += `
        
        <div class="card">
           <h1> <b> ${titles[i]}</b></h1> <br>
           <p> ${notes[i]} </p><br>
            <img src="img/trash.svg" onclick="deleteNotes()">  
        </div>
        
        `;


    }


} function addNote() {
    let title = document.getElementById('title');
    let newNote = document.getElementById('note');

    titles.push(title.value);
    notes.push(note.value);
    render();
    save();

}

function deleteNotes(i) {
    titles.splice(i, 1);
    notes.splice(i, 1);
    render();
    save();
}

function save() {
    let titlesAsText = JSON.stringify(titles);
    let notesAsText = JSON.stringify(notes);
    localStorage.setItem('titles', titlesAsText);
    localStorage.setItem('notes', notesAsText);

}

function load() {
    let titlesAsText = localStorage.getItem('titles');
    let notesAsText = localStorage.getItem('notes');

    if (titlesAsText && notesAsText) {
        titles = JSON.parse(titlesAsText);
        notes = JSON.parse(notesAsText);
    }


}
function openNote(text) {
    document.getElementById('note-bg').classList.remove('d-none');

}

function closeNote() {
    document.getElementById('note-bg').classList.add('d-none');
}
