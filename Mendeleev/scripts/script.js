
console.log('script works');

var tableToCount = document.getElementById('tableToCount');
console.log(tableToCount);

var rowCount = document.getElementById('tableToCount').getElementsByTagName('tr').length;
console.log('amount of rows: ' + rowCount);    // correct

var arrayForRows = document.getElementById('tableToCount').getElementsByTagName('tr');
//console.log(arrayForRows[0]);
//console.log(arrayForRows[1]);
//console.log(arrayForRows[2]);
    
for (var i = 0; i < arrayForRows.length; ++i){
    if(i % 2 == 0){
        console.log(i);
        //console.log(arrayForRows[i]);
        var arrayForColumns = arrayForRows[i].getElementsByTagName('th');
        //console.log(arrayForColumns[2]);
        for(var j = 0; j < arrayForColumns.length; ++j){
            if(j % 2 == 0){
                 console.log(arrayForColumns[j]);
            }
        }
    }
}



