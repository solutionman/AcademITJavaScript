
// alert('Hello, script file is connected');

// someDiv = document.getElementById('list-to-move');


//var recipetList = new Array['Крупа гречневая', 'вода', 'молоко', 'банан', 'грецкие орехи'];

var newLi = document.createElement("li");
console.log(newLi); 
newLi.textContent = 'Just for testing';
var ListFromJS = document.getElementById("different-list");
//ListFromJS
ListFromJS.appendChild(newLi);
newLi.innerHTML = "Some text";

function moveRecipe() {    
    var someDiv = document.getElementById('list-to-move');
    someDiv.setAttribute('id', 'list-moved');
    //alert('You press me )');
    console.log('it works');
}



