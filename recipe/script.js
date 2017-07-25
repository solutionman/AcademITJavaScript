
// alert('Hello, script file is connected');

// someDiv = document.getElementById('list-to-move');


var recipeList = ['Крупа гречневая', 'вода', 'молоко', 'банан', 'грецкие орехи'];

var newBr = document.createElement('br');
var newLi = document.createElement('li');
var forVater = document.createElement('li');
var forMilk = document.createElement('li');
var forBananas = document.createElement('li');
var forWalnuts = document.createElement('li');

console.log(newLi); 
var textForInput = document.createTextNode = ('Just for testing');
console.log(textForInput);
var listFromJS = document.getElementById('different-list');  
console.log(listFromJS);
listFromJS.appendChild(newLi).appendChild(newBr);
newLi.innerHTML = (recipeList[0]);
listFromJS.appendChild(forVater).appendChild(newBr);
forVater.innerHTML = (recipeList[1]);
listFromJS.appendChild(forMilk).appendChild(newBr);
forMilk.innerHTML = (recipeList[2]);
listFromJS.appendChild(forBananas).appendChild(newBr);
forBananas.innerHTML = (recipeList[3]);
listFromJS.appendChild(forWalnuts).appendChild(newBr);
forWalnuts.innerHTML = (recipeList[4]);


function moveRecipe() {    
    var someDiv = document.getElementById('list-to-move');
    someDiv.setAttribute('id', 'list-moved');
    //alert('You press me )');
    console.log('it works');
}



