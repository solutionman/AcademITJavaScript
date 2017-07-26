

console.log('script works');

var tableToCount = document.getElementById('tableToCount');
console.log(tableToCount);

var rowCount = document.getElementById('tableToCount').getElementsByTagName('tr').length;
console.log('amount of rows: ' + rowCount);    // correct

var arrayForRows = new Array;

for(var i = 0; i < rowCount; ++i){
    var j = 0;
    if(i % 2){
        arrayForRows[j] = document.getElementById('tableToCount').getElementsByTagName('tr')[i];
        ++j;
        console.log(arrayForRows[j]);
    }
}

