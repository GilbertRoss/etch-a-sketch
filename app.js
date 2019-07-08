const container = document.querySelector(".container");




function createGrid(){

    for(let i = 0; i<256; i++){
        const div = document.createElement("div");
        div.classList.add("grid");
        div.textContent = i;
        container.appendChild(div);
    }

}


createGrid();

var btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    var gridBehaviour = document.querySelector('.filledGrid');

    gridBehaviour.setAttribute("class", "grid");
});


var gridBehaviour = document.querySelector('.grid');
gridBehaviour.addEventListener('onmouseover', () => {
    gridBehaviour.setAttribute("class", "filledGrid");
});

