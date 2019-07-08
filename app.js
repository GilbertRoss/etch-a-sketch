const container = document.querySelector(".container");




function createGrid(x) {

    for (let i = 0; i < x*x; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.textContent = i;
        div.style.height = 960/x +"px";
        div.style.width = 960/x + "px";
        container.appendChild(div);
    }

}

createGrid(16);

function clearGrid(){
    $(".grid").remove();
}; 



var btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    clearGrid();
    createGrid(16);
});


$(".grid").mouseover(function() {
    $(this).css("background-color", "black");
    });