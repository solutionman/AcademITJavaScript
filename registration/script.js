
//console.log('script works');


function checkcollect(){
    var name = '';
    name = document.getElementById('name').value;
    var surname = '';
    surname = document.getElementById('surname').value;
    var country = document.getElementById('country').value;
    var subscribe = document.getElementById('subscribe').checked;
    var educationbeginner = document.getElementById('educationbeginner').checked;
    var school9 = document.getElementById('school9').checked;
    var school11 = document.getElementById('school11').checked;
    var schoolmiddle = document.getElementById('schoolmiddle').checked;
    var schoolhigh = document.getElementById('schoolhigh').checked;
    var about = document.getElementById('about').value;

    console.log(name);
    console.log(surname);
    console.log(country);
    console.log(subscribe);
    console.log(educationbeginner);
    console.log(school9);
    console.log(school11);
    console.log(schoolmiddle);
    console.log(schoolhigh);
    console.log(about);
    //console.log('button works');

    var message = document.getElementById('messageForUser');
    var nameElement = document.getElementById('name');

    if(name == ''){
        //alert('Поле "Имя" не заполнено');        
        nameElement.setAttribute('class', 'wrong');
        //console.log(nameElement);        
        console.log(message);
        message.innerText = 'Не все поля заполнены';
    } else if(name != ''){
        nameElement.setAttribute('class', 'right');
    }

    var surnameElement = document.getElementById('surname');
    if(surname == ''){        
        surnameElement.setAttribute('class', 'wrong');
        //alert('Поле "Фамилия" не заполнено');
        message.innerText = 'Не все поля заполнены';
    } else if(surname != ''){
        surnameElement.setAttribute('class', 'right');
    }

}


