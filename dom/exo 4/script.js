    const elements = [];
    const button = document.getElementById("addItemBtn");
    button.addEventListener("click" , function (){
        const compteur = elements.length+1;
        const item = "Elements " + compteur;
        elements.push(item)
        console.log(elements)
        const list = document.getElementById("liste")
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li)
        console.log(li)
    })