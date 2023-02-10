//Seleziono l'elemnto button con il suo ID
var mybutton = document.getElementById("btn-back-to-top");

//var numero = 12;
//var nome = "Simona";


window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 800 ||
        document.documentElement.scrollTop > 800
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}