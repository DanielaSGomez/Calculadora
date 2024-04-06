const displayValorActual = document.getElementById('valorActual');
const displayValorAnterior = document.getElementById('valorAnterior');

const numeros  = document.querySelectorAll('.numerito');
const operadores = document.querySelectorAll('.smoothOperator');

const calculadora = new Calculadora();
const pantalla = new Display(displayValorActual, displayValorAnterior);


numeros.forEach(boton =>{
    boton.addEventListener('click', () => {
        pantalla.agregarNumero(boton.innerHTML);
    })
});

operadores.forEach(boton =>{
    boton.addEventListener('click', () => {
        pantalla.computar(boton.value);
    })
});


function mostrarImagenRandom() {
    var imagenes = document.querySelectorAll('.pics img');
    imagenes.forEach(function(img) {
        img.style.display = 'none';
    });

    var randomIndex = Math.floor(Math.random() * imagenes.length);
    imagenes[randomIndex].style.display = 'block';
}