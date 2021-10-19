window.addEventListener("scroll" , function(){
    if(window.scrolly > 350) {
        document.querySelector("#navbar").style.opacity = 1;
    }
    else {
        document.querySelector("#navbar").style.opacity = 0.9;
    }
}
);

function message(){
    alert("Merci pour votre Question , A Bientot")
}