const figura = document.getElementById('figure');


function circulo(){
        figura.style.borderRadius = "50%";
        figura.style.background="red"
}

function estrella(){
        figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
}

function gift(){
          figura.style.background = "url('https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif')";
}

function animacion(){
        figura.style.transition = "all 1s ease-in-out";
        figura.style.transform = "rotate(360deg) scale(1.5)";
}

function moverArriba(){
        figura.style.transition = "all 0.5s ease-in-out"; 
        figura.style.transform = "translateY(-100px)"; 
}

function moverAbajo(){
        figura.style.transition = "all 0.5s ease-in-out"; 
        figura.style.transform = "translateY(100px)"; 
}

function moverIzquierda(){
        figura.style.transition = "all 0.5s ease-in-out"; 
        figura.style.transform = "translateX(-100px)"; 
}

function moverDerecha(){
        figura.style.transition = "all 0.5s ease-in-out"; 
        figura.style.transform = "translateX(100px)"; 
}

function titulo(){
    const Ntitulo = prompt('ingrese el nuevo titulo');
    const texto = document.getElementById('mainTitle');

    texto.innerText = Ntitulo
}

function parrafo(){
    const nParrafo = prompt('ingrese el nuevo parrafo');
    const texto = document.getElementById('mainParagraph');

    texto.innerText = nParrafo
}

function parrafoNuevo(){
    const nuevoParrafo = prompt('ingrese el nuevo parrafo')
    const parrafo = document.createElement("p");
    parrafo.textContent = nuevoParrafo
    rutaTexto = document.getElementById('extraParagraphs').appendChild(parrafo);
}

function borrarParrafo(){
    const parrafo = document.querySelector('#extraParagraphs');
    parrafo.remove();
}






document.addEventListener('DOMContentLoaded',function(){

    document.getElementById('btnCircle').addEventListener('click' , circulo);
    document.getElementById('btnStar').addEventListener('click' , estrella);
    document.getElementById('btnGif').addEventListener('click' , gift);
    document.getElementById('btnAnim').addEventListener('click' , animacion);
    document.getElementById('btnMoveUp').addEventListener('click' , moverArriba);
    document.getElementById('btnMoveDown').addEventListener('click' , moverAbajo);
    document.getElementById('btnMoveLeft').addEventListener('click' , moverIzquierda);
    document.getElementById('btnMoveRight').addEventListener('click' , moverDerecha);
    document.getElementById('btnChangeTitle').addEventListener('click' , titulo);
    document.getElementById('btnChangeParagraph').addEventListener('click' , parrafo);
    document.getElementById('btnAddParagraph').addEventListener('click' , parrafoNuevo);
    document.getElementById('btnRemoveParagraph').addEventListener('click' , borrarParrafo);
    document.getElementById('btnHexColor').addEventListener('click' , cambiarColor);
    document.getElementById('btnChooseFigure').addEventListener('click' , elegirFigura);
    document.getElementById('btnChangeImageNext').addEventListener('click' , circulo);
    document.getElementById('btnChangeImagePrev').addEventListener('click' , circulo);

})