let fruits = ["pomme", "banane", "orange"];
const ul = document.getElementById("liste-fruits")
for(let fruit of fruits){
    let li = document.createElement("li");
    li.textContent = fruit;
    console.log(fruit)
    ul.appendChild(li)
}

