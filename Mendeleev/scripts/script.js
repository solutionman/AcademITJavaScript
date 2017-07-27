

console.log('script works');

var tableToCount = document.getElementById('tableToCount');
console.log(tableToCount);

var rowCount = document.getElementById('tableToCount').getElementsByTagName('tr').length;
console.log('amount of rows: ' + rowCount);    // correct

var arrayForRows = document.getElementById('tableToCount').getElementsByTagName('tr');
console.log(arrayForRows[0]);
console.log(arrayForRows[1]);
console.log(arrayForRows[2]);




