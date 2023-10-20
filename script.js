//alert("Hola este es mi Javascript");
let nombre1 = "Luis1";
var nombre2 = "Luis2";
const nombre3 = "Luis3";

console.log(nombre1)
console.log(nombre2)
console.log(nombre3)

var data = true;



var sobreMi  = document.getElementById('SobreMi').getElementsByTagName('div')[0].getElementsByTagName('p')[0];
console.log(sobreMi.innerText);
if(data){
    sobreMi.innerHTML = "Hola hola hola";
}
else{
    alert("No funciono");
}
    


/*
document.addEventListener("DOMContentLoaded", LoadPage);
function LoadPage(){
    var sobreMi  = document.getElementById('SobreMi').getElementsByTagName('div')[0].getElementsByTagName('p')[0];
    console.log(sobreMi.innerText);
    if(data){
        sobreMi.innerHTML = "Hola hola hola";
    }
    else{
        alert("No funciono");
    }
    

}


/*
if(data){
    sobreMi.innerHTML = "hoalalala"
}
else{
    alert("No funciono")
}
*/