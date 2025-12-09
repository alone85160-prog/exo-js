let nombres = [3, 8, 12, 5, 2];
let liste = document.getElementById("maListe");
for(let nombre of nombres){
    if(nombre % 2 === 0){
        let li = document.createElement("li");
        li.textContent = nombre;
        console.log(nombre)
        liste.appendChild(li);
        
}

}
    