/*Ovo je responsive menu odradjen preko funkcije*/
/*
const mobileMenu = () => {
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if (btn.innerText === 'MENU') {
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    } else {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
};*/

/* Mobile menu odradjen preko Event Listenera*/
 
let menu = document.querySelector('.header ul');
let btn = document.querySelector('.mobileMenu');

btn.addEventListener('click', (event) => {
if(btn.innerText === 'MENU') {
    menu.style.display = 'block';
    btn.innerText = 'CLOSE';
} else {
    menu.style.display = 'none';
    btn.innerText = 'MENU';
}
});



/*Ovo je galerija*/
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNumber = 0; // Prva slika

/* Klikom na strelicu sve slike budu display none a zatim idu redom slike
 * dok ne dodje do svih i vrati na pocetnu*/

/*Ova funckija ce sakriti sve slike*/
const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    });
};

/*Pomeramo slike desno*/
const moveRight = () => {

    displayNone();
    imgNumber++;
    if (imgNumber === pictures.length) {
        imgNumber = 0;
    }

    pictures[imgNumber].style.display = 'block';
};

/*Pomeramo slike levo*/
const moveLeft = () => {

    displayNone();
    imgNumber--;
    if (imgNumber === -1) {
        imgNumber = pictures.length - 1;
    }
    pictures[imgNumber].style.display = 'block';
};

/* Event Listeneri za levi i desni button*/
rightBtn.addEventListener('click', moveRight);

leftBtn.addEventListener('click', moveLeft);

// Portfolio menu

const portfolioSort = (button) =>{
    let category = button.getAttribute('data-category');
    
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');
    
    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });
    
    if(category === 'sve'){
        portfolioItems.forEach((item) => {
        item.style.display = 'block';
    });
    }
    
    portfolioItems.forEach((item) => {
       if(item.getAttribute('data-category').includes(category)) {
           item.style.display = 'block';
       } 
    });
};


/*MODAL BUTTON* - Preko funkcija /

/*
const openModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    
    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
};

const closeModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
};*/


/*Modal Button odradjen preko EventL Listenera*/

let modal = document.querySelector('#mbtn');
modal.addEventListener('click', (event) => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    
    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
});

    let modalClose = document.querySelector('#closeModal');

    modalClose.addEventListener('click',(event) => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
});