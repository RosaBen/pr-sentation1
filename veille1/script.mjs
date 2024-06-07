/* Création d'une fonction pour extraire les liens href d'un container */

const linksArray = [];

function extractLinks() {
    // Récupérer tous les éléments "a" dans son container
    const links=document.querySelectorAll("#links-container a");

    // Créer une boucle pour récupérer chaque liens trouvés dans ce container
    links.forEach(link => {
        linksArray.push(link.href);
    });

    // console.log(linksArray);
}

extractLinks();

/*********************************************************************************************************** */

/*Création d'une fonction pour changer le src du index.html */

const slidesArray =["./files/slide1.html",];
const slidesShown = [];


// remplacer le lien sur index.html par le lien de la première slide
function replacePath() {
    // récupérer la première slide sur le tableau slidesArray et l'ajouter au nouveau tableau slidesShown
    slidesShown.push(slidesArray[0]);
    console.log(slidesShown);

    // retrouver l'element qui doit contenir la nouvelle src
    
    const frame1 = document.querySelector("iframe");
    
    // remplacer le src par le slidesShown[0];
    frame1.src = slidesShown[0];

console.log(frame1);
}
replacePath();

/*********************************************************************************************************** */

/* Ouvrir chaque lien sur le slide directement */

// écouter chaque bouton afin d'ouvrir sur le slide

const buttons = document.querySelectorAll("#links-container button");

console.log(buttons);


// buttons.forEach(button => {
//     button.addEventListener('click', (event) => {
//         const url = event.target.querySelector("a").href;
//         // console.log(url);
//         openLinkInFrame(url);
//     });
// });

// création d'une fonction pour ouvrir url sur le slide

// function openLinkInFrame(url) { 
// // récupération de l'élément iframe sur l'index.html
// const iframe = document.querySelector("#slide-frame");

// // ajout d'une classe
// iframe.classList.add('fullscreen');

// // récupération du lien
// iframe.src = url; 
// }









const slides = ['slide1.html', 'slide2.html', 'slide3.html'];
let currentSlideIndex = 0;

// function loadLinkInIframe(index) {
//     const iframe = document.getElementById('slide-frame');
//     if (index >= 0 && index < linksArray.length) {
//         iframe.src = linksArray[index];
//     } else {
//         console.error('Index out of bounds');
//     }
// }

// document.getElementById('next-slide').addEventListener('click', () => {
//     if (currentSlideIndex < slides.length -1) {
//         currentSlideIndex++;
//         updateSlide();
//     }
// });

// document.getElementById('prev-slide').addEventListener('click', () => {
//     if (currentSlideIndex > 0) {
//         currentSlideIndex--;
//         updateSlide();
//     }
// });

// document.getElementById('add-content').addEventListener('click', () => {
//     const iframe = document.getElementById('slide-frame');
//     iframe.contentWindow.addContent();
// });

// document.getElementById('remove-content').addEventListener('click', () => {
//     const iframe = document.getElementById('slide-frame');
//     iframe.contentWindow.removeContent();
// });

// function updateSlide() {
//     const iframe = document.getElementById('slide-frame');
//     iframe.src = slides[currentSlideIndex];
// }

