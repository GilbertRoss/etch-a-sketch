const container = document.getElementsByClassName(".container");




function createGrid(){

    for(let i = 0; i<16; i++){
        const div = document.createElement("div");
        div.classList("grid");
        container.appendChild(div);

    }

}

createGrid();