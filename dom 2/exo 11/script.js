let ages = [5, 18, 25, 15, 30];
const list = document.getElementById("list")
    for(const age of ages){
        const li = document.createElement("li")
        if( age >= 18 ){
            li.textContent = " vous etes majeur "
        }
        else{
            li.textContent = "vous etes mineur"
        }
        list.appendChild(li)
    }