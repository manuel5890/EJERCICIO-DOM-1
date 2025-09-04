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
        figura.style.animation = "girar 2s linear infinite";
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

function cambiarColor(){
    const color = prompt('ingrese el color con #');
    figura.style.backgroundColor= color
}

function elegirFigura(){
    let figure = prompt('elija si quiere: circulo, estrella o cuadrado');
    switch (figure) {
        case "circulo":
            figura.style.borderRadius = "50%";
            break;

        case "estrella":
            figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
            break;
            
        case "cuadrado":
            figura
            break;            
    }
}

function imagenes1(){
    const mainImagen = document.getElementById('mainImage');
    let imagenes = ['img/imagen.jpg','img/imagen2.jpg','img/imagen3.jpg'];
    let actual = mainImagen.getAttribute("src");
    let siguite = imagenes[0];

    imagenes.forEach((imagen,index) => {
        if (actual===imagen) {
            if (index<imagenes.length - 1) {
                siguite=imagenes[index + 1];
            } else{
                siguite = imagenes[0];
            }
        }
    });
    mainImagen.setAttribute("src",siguite);
}

function imagenesAtras() {
    const mainImagen = document.getElementById('mainImage');
    let imagenes = ['img/imagen.jpg','img/imagen2.jpg','img/imagen3.jpg'];
    let actual = mainImagen.getAttribute("src");
    let anterior = imagenes[imagenes.length - 1]; // Por defecto, la última imagen

    imagenes.forEach((imagen, index) => {
        if (actual === imagen) {
            if (index > 0) {
                anterior = imagenes[index - 1];
            } else {
                anterior = imagenes[imagenes.length - 1];
            }
        }
    });

    mainImagen.setAttribute("src", anterior);
}

function ocultar(){
    const img = document.getElementById('mainImage');
    img.classList.toggle('none');
}

function cambiarAlt(){
    newImg = prompt('ingrese el nuevo texto');
    const img = document.getElementById('mainImage');
    img.setAttribute("alt",newImg);
}

function cambiarEnlace(){
    newUrl = prompt('ingrese la nueva URL');
    const url = document.getElementById('mainLink');
    url.setAttribute("href",newUrl);
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
    document.getElementById('btnChangeImageNext').addEventListener('click' , imagenes1);
    document.getElementById('btnChangeImagePrev').addEventListener('click' , imagenesAtras);
    document.getElementById('btnToggleImage').addEventListener('click' , ocultar);
    document.getElementById('btnChangeAlt').addEventListener('click' , cambiarAlt);  
    document.getElementById('btnChangeLink').addEventListener('click' , cambiarEnlace); 
    document.getElementById('btnOpenLink').addEventListener('click' , abrirEnlace);
    document.getElementById('btnDisableLink').addEventListener('click' , imagenesAtras);
  
})