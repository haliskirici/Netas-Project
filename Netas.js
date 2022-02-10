const dataStore = require('nedb');

const database = new Datastore('Netasss.db');


var count = 1;
function myCreateFunction() {
    var table = document.getElementById("Table");
    
    for (var i = 0;i<count; i++){
     var row = table.insertRow(i);
     var cell1 = row.insertCell(i);
     var a = document.getElementById("Task").value;
     cell1.innerHTML = a;
     database.insert(a);
     
    }
    
    
    let btn = document.createElement("button");
     btn.innerHTML = "Delete";
     btn.onclick = function (){
        document.getElementById("Table").deleteRow(0);
     };
     document.body.appendChild(btn);
    
  }