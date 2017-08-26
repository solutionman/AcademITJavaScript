console.log('script works');
function checkcollect() {
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
    var submitButton = document.getElementById('submitButton');
    var message = document.getElementById('messageForUser');
    var nameElement = document.getElementById('name');
    if (name == '') {
        //alert('Поле "Имя" не заполнено');        
        nameElement.setAttribute('class', 'wrong');
        //console.log(nameElement);        
        console.log(message);
        message.innerText = 'Не все поля заполнены';
        submitButton.disabled = true;
    }
    else if (name != '') {
        nameElement.setAttribute('class', 'right');
    }
    var surnameElement = document.getElementById('surname');
    if (surname == '') {
        surnameElement.setAttribute('class', 'wrong');
        //alert('Поле "Фамилия" не заполнено');
        message.innerText = 'Не все поля заполнены';
        submitButton.disabled = true;
    }
    else if (surname != '') {
        surnameElement.setAttribute('class', 'right');
    }
    if (name != '' && surname != '') {
        message.innerText = 'Все обязательные поля заполнены, можете отправлять запрос';
        submitButton.disabled = false;
    }
}
function sendData() {
    console.log('Send data works');
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var country = document.getElementById('country').value;
    var subscribe = document.getElementById('subscribe').checked;
    var educationbeginner = document.getElementById('educationbeginner').checked;
    var school9 = document.getElementById('school9').checked;
    var school11 = document.getElementById('school11').checked;
    var schoolmiddle = document.getElementById('schoolmiddle').checked;
    var schoolhigh = document.getElementById('schoolhigh').checked;
    var about = document.getElementById('about').value;
    var submitButton = document.getElementById('submitButton');
    var data = {
        dataName: name,
        dataSurname: surname,
        dataCountry: country,
        dataSubscribe: subscribe,
        dataEducationbeginner: educationbeginner,
        dataSchool9: school9,
        dataSchool11: school11,
        dataSchoolmiddle: schoolmiddle,
        dataSchoolhigh: schoolhigh,
        dataAbout: about
    };
    console.log(JSON.stringify(data)); // works ))
    //console.log(data.length);
    //console.log(name);
    //console.log('Send data works');
    /*
    for(var i = 0; data.length; ++i){
        
        if(data[i]){
            console.log(data[i].toString());
        }
        
    }
    
    */
    // and now some code here
}
