function generate() {
    let names= ["Isaias", "Karol", "Andrés", "Seif"];
    let number= Math.floor(Math.random() * names.length);
    document.getElementById('pantalla').innerHTML = "<h1>Nombre:</h1><div class='alert alert-success'><h2>" + names[number] + "</h2></div>";
}