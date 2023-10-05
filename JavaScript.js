let names= ["Isaias", "Karol", "Andrés", "Seif"];

// set name list

document.getElementById("startbutton").onclick= function (){
    let number= Math.floor(Math.random() * names.length);
    console.log("Ha salido el numero" + number);
    let name = names[number];
    console.log("El número" + number + "corresponde a " + name);

    document.getElementBy
}