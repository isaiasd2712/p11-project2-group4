let names= ["Isaias", "Karol", "Andrés", "Seif"];

// set name list

// cuando hagamos click en #pulsador
document.getElementById("startbutton").onclick= function (){
    
    let name;
    //miramos si la lista está vacía
    if(names.length ===0) {
       name= "Game Over"
    } else {
    // Sacamos un número al azar
    let number= Math.floor(Math.random() * names.length);
    console.log("Ha salido el numero" + number);
    // sacamos un nombre y lo quitamos de la lista
    name = names.splice(number,1)[0];
    console.log("El número" + number + "corresponde a " + name);
    }
    
    //Pintamos la variable donde antes ponía ´´Cargando´
    document.getElementById("pantalla"),innerHtml = name;
}