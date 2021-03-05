var hamburger = document.querySelector(".hamburger");
var listItems = document.querySelector(".list-items");

// toggle navigation
hamburger.addEventListener("click", function(){
    listItems.classList.toggle("list-items-show");
})