
// alert('Hello, script file is connected');

// someDiv = document.getElementById('list-to-move');

//var recipetList = new Array['Крупа гречневая', 'вода', 'молоко', 'банан', 'грецкие орехи'];



function moveRecipe() {    
    var someDiv = document.getElementById('list-to-move');
    someDiv.setAttribute('id', 'list-moved');
    //alert('You press me )');
    console.log('it works');
}

function addList(){
    var ListFromJS = document.getElementById('list-to-move');
    var newLi = document.createElement('li');
    console.log(newLi); 
    var textForInput = document.createTextNode = ('Just for testing');

    //ListFromJS
    //ListFromJS.appendChild(textForInput);
    //newLi.innerHTML('Some text');


    var forhtest = document.getElementById('1234');
    forhtest.appendChild(textForInput);
}
