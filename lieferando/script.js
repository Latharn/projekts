let meals = ['Gebratene Nudeln mit Hühnerfleisch', 'Gebackenes Hühnerfleisch', 'Mini Frühlingsrollen (Vegetarisch, 8Stück)',
    'Knusprige Ente', 'Ente Szechuan Art (scharf)', 'Gebratene Nudeln mit Entenfleisch', 'Gebratener Reis mit Entenfleisch']
let prices = ['9.90', '11.90', '5.90', '12.90', '13.90', '10.90', '10.90']
let addon = ['Mit Pikanter Sauce oder Süß-Sauer-Sauce', 'Wahl aus: ohne Sauce, Erdnusssauce, pikante Sauce oder mit Süß-Sauer-Sauce ',
    '', 'mit Süß-Sauer-Sauce', '', 'Wahl aus pikanter Sauce oder Süß-Sauer-Sauce', '']
let chosenFood=[];
let chosenPrice= [];
let basketAmount = [];

let delivercost = 1.00;


function render() {
    
    renderOrder();
    renderBasket();
    updateBasketPrice();
}


function renderOrder() {
    document.getElementById('order').innerHTML = ` 
<div class="favourites bgc box"><b> Beliebte Gerichte</b></div>`
    for (let i = 0; i < meals.length; i++) {
        document.getElementById('order').innerHTML += `<div id="${i}"class="box1">
    <div><b>${meals[i]}</b></div><br>
    <div class="addon">${addon[i]}</div>
<p class="price">${prices[i]} €</p>
<div class="add"><img src="img/add.png" onclick="addMeal(${i})"></div>
    </div>`

    }
}





function renderBasket() {
    document.getElementById('basketCover').innerHTML = '';
    document.getElementById('basketCover').innerHTML = `<div>
    <div class="basketTitle"> <h2>Warenkorb</h2></div>
    <div id="basket" class="basket-jr"></div>
    <div id="costs" class="costs">
     <div class="sum">
      <span> Zwischensumme</span>
      <span id="sum"> 0,00 €</span>
     </div>
     <div class="delivercost">
      <span> Lieferkosten</span>
      <span> 1,00 €</span>
     </div>
     <div class="final">
      <span> Gesamt</span>
      <div id="final">0,00 €</div>
     </div>
     </div>
    <div class="button"><button>Bestellen</button></div>
    
    
    </div>`
    if (chosenFood == 0) {
        document.getElementById('basket').innerHTML += 'Der Warenkorb ist leer !'
    } else {
        for (i = 0; i < chosenFood.length; i++) {
            document.getElementById('basket').innerHTML += `
                <div class="test">
                    <img class="bin" src="img/trash.svg" onclick="deleteFromBasket(${i})">
                     <div>${chosenFood[i]}</div>
                     <div>${chosenPrice[i]}</div>
                    
                </div>`}
}
}
    

function addMeal(i) {
    let name= meals[i];
    let price= prices[i];
  if (chosenFood.includes(name)== false){
      chosenFood.push(name);
      chosenPrice.push(price);
      basketAmount.push(1);
  }
  else{
      for (let i = 0; i < chosenFood.length; i++) {
          if(chosenFood[i]==name){
          increaseAmount(i);}
          
      }
    }
    render();
    
}


function increaseAmount(i) {
    basketAmount[i]++;
    render();

}
    
function deleteFromBasket(i) {
            
        chosenFood.splice(i,1);
        chosenPrice.splice(i,1);
        basketAmount.splice(i,1);
        
    render();
}
function updateBasketPrice(){ 
     let sum=  0;
    for (let i = 0; i < chosenPrice.length; i++) {
        sum += chosenPrice[i]*1;
        
    }
 let finalPrice= sum +1  
     document.getElementById('sum').innerHTML=sum.toFixed(2)+' €';
     document.getElementById('final').innerHTML=finalPrice.toFixed(2)+' €';
}
