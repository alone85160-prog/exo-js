    const button = document.querySelector("#deleteBtn");
    button.addEventListener("click", function (){
        const articles = document.getElementById("articles");
        const del = articles.lastElementChild;

        articles.removeChild(del)
    });