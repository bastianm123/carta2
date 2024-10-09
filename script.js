// Leer mensaje personalizado de los parámetros de la URL
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
    const mainMessageElement = document.querySelector('#mainMessage');
    if (mainMessageElement) {
        mainMessageElement.textContent = decodeURI(messageCustom);
    }
}

// Pantalla inicial
const initialScreen = document.querySelector('.initial-screen');
const startButton = document.querySelector('#startButton');
const imageSequence = document.querySelector('#imageSequence');
const displayText = document.querySelector('#imageText');
const nextButton = document.querySelector('#nextButton');
const mainContent = document.querySelector('main');
const paperElement = document.querySelector('.paper');

// Arreglos de imágenes y textos
const images = ['1.jfif', '2.jfif', '3.jfif', '4.jfif', '5.jfif', '6.jfif', '7.jfif', '8.jfif', '9.jfif', '10.jfif', '11.jfif', '12.jfif'];
const texts = [
    "Eres la mejor MATRONCITA!",
    "De verdad la mejooooor!",
    "Me siento afortunado de estar contigo",
    "Eres demasiado HERMOSA!",
    "Y dormilona tambien bb",
    "Muuy ",
    "Muuuy muyyy dormilona",
    "Pero aun asi Me encantas",
    "Amo tu sonrisa",
    "Que seas la mejor mamá del mundo",
    "Te amo demasiado mi vida, Me haces muy feliz",
    "A llegado carta!"
];

let currentIndex = 0;

// Evento para el botón "Comenzar"
startButton.addEventListener('click', () => {
    initialScreen.classList.add('hidden'); // Ocultar la pantalla inicial
    document.querySelector('.presentation').classList.remove('hidden');
    updateImage();
});

// Función para actualizar la imagen y el texto
function updateImage() {
    imageSequence.style.backgroundImage = `url(${images[currentIndex]})`;
    displayText.textContent = texts[currentIndex];

    if (currentIndex === images.length - 1) {
        nextButton.textContent = "Finalizar";
    } else {
        nextButton.textContent = "Siguiente";
    }
}

// Evento para el botón "Siguiente"
nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    } else {
        // Ir a la vista de la carta
        document.querySelector('.presentation').classList.add('hidden');
        mainContent.classList.remove('hidden');
    }
});

// Evento para el botón "Abrir Carta"
const btnOpenElement = document.querySelector('#open');

btnOpenElement.addEventListener('click', () => {
    paperElement.classList.remove('hidden'); // Mostrar el papel
    paperElement.style.display = 'block'; // Asegurarse de que el papel esté visible
});
