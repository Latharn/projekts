let names= ['Erica Mustermann', 'John Doe'];
let numbers=['015712345678', '015798765432'];
load();
function render(){
    let content= document.getElementById('content');
    content.innerHTML= '';
    content.innerHTML+= `<h1> My Contacts</h1>`;
    content.innerHTML+= `<div><input id="name" type="text" placeholder="Name">
    <input id="phone" type="number" placeholder="Telefon"><button onclick="addContact()">Hinzufügen</button>
    </div>`;
    for (let i = 0; i < names.length; i++) {
        const name=names[i];
        const number=numbers[i];
        content.innerHTML+=`
        <div class="card">
            <b>Name :</b>${name}<br>
            <b>Telefon : </b>${number} <br>
            <button onclick="deleteContact(${i})">Löschen</button>
        </div>`;
        
    }
}

function addContact() {
   let name=document.getElementById('name');
   let phone=document.getElementById('phone');

   names.push(name.value);
   numbers.push(phone.value);

   render();
   save();
   
}

function deleteContact(i){
    names.splice(i,1);
    numbers.splice(i,1);
    render();
    save();
    
   
}

function save(){
    let namesAsText= JSON.stringify(names);
    let numbersAsText=JSON.stringify(numbers);

    localStorage.setItem('names', namesAsText);
    localStorage.setItem('numbers', numbersAsText);

}
function load(){
let namesAsText=localStorage.getItem('names');
let numbersAsText=localStorage.getItem('numbers');
if(namesAsText&&numbersAsText){
    names= JSON.parse(namesAsText);
    numbers= JSON.parse(numbersAsText);
}
}
