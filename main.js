let the_input = document.querySelector(".inpt")
let the_button = document.getElementById("btn")

the_button.addEventListener("click",function(){
    if(the_button.getAttribute("custom-attr") == "show" ){
        the_input.setAttribute("type","text")
        the_button.setAttribute("custom-attr","hide")
        the_button.innerHTML = "Hide"
    }
    else{
        the_input.setAttribute("type","password")
        the_button.setAttribute("custom-attr","show")
        the_button.innerHTML = "show"
    }
})