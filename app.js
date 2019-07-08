const container = document.querySelector(".container");




function createGrid(x) {

    for (let i = 0; i < x*x; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.textContent = i;
        div.style.height = 960/x;
        div.style.width = 960/x;
        container.appendChild(div);
    }

}

function clearGrid(){
    $(".grid").remove();
}; 


createGrid(16);

var btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    clearGrid();
});


$(".grid").mouseover(function() {
    $(this).css("background-color", "black");
    });