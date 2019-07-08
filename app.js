const container = document.querySelector(".container");




function createGrid(){

    for(let i = 0; i<16; i++){
        const div = document.createElement("div");
        div.classList.add("grid");
        div.textContent = i;
        container.appendChild(div);
    }

}

createGrid();