//menu icon
function menuFunction(x){
    x.classList.toggle("change")
}
//frist menu show
var menuClicks = document.getElementById("menuClick");
var menuBar = document.querySelector(".menu");
menuClicks.addEventListener("click", function(){
    menuBar.classList.toggle("openmenu")
})