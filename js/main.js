const figura = document.getElementById('figure');


function circulo(){
        figura.style.borderRadius = "50%";
        figura.style.background="red"
}

function estrella(){
        figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
}








document.addEventListener('DOMContentLoaded',function(){

    document.getElementById('btnCircle').addEventListener('click' , circulo);
    document.getElementById('btnStar').addEventListener('click' , estrella);
    document.getElementById('btnCircle').addEventListener('click' , circulo);
    document.getElementById('btnCircle').addEventListener('click' , circulo);
    document.getElementById('btnCircle').addEventListener('click' , circulo);
    document.getElementById('btnCircle').addEventListener('click' , circulo);
    document.getElementById('btnCircle').addEventListener('click' , circulo);
    document.getElementById('btnCircle').addEventListener('click' , circulo);
    document.getElementById('btnCircle').addEventListener('click' , circulo);
    document.getElementById('btnCircle').addEventListener('click' , circulo);
    document.getElementById('btnCircle').addEventListener('click' , circulo);
    document.getElementById('btnCircle').addEventListener('click' , circulo);
    document.getElementById('btnCircle').addEventListener('click' , circulo);
    document.getElementById('btnCircle').addEventListener('click' , circulo);
    document.getElementById('btnCircle').addEventListener('click' , circulo);

})