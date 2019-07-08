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


var abbrs = document.getElementsByClassName("grid");

    var index,l=abbrs.length;
    for (index = 0; index < l; ++index) {
        console.log(abbrs[index]);
        abbrs[index].onmouseover = function() {
            console.log(this);
        }
    }
