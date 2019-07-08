const container = document.querySelector(".container");




function createGrid() {

    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.textContent = i;
        container.appendChild(div);
    }

}

function clearGrid(){
    $(".grid").remove();
}; 


createGrid();

var btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    clearGrid();
    createGrid();
});


$(".grid").mouseover(function() {
    $(this).css("background-color", "black");
    });