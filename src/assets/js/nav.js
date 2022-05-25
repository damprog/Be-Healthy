

const showHideNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    nav.classList.toggle('nav-active');
    //Animate Links
    navLinks.forEach((link, index) => {
    if(link.style.animation){
        link.style.animation = '';
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
}

// Listener dla nav-links li, gdy menu w wersji mobilnej
const listener = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    showHideNav();

    // console.log("menu nieaktywne");
    navLinks.forEach((link) => {
        link.removeEventListener('click', listener);
        });
}


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => { 
        
        showHideNav();

        // Jeżeli nav aktywne to dodaj event listener na linki
        if(nav.classList.contains("nav-active")){
            // console.log("menu aktywne");
            navLinks.forEach((link) => {
                link.addEventListener('click', listener);
            });

             
        }else {
            // console.log("menu nieaktywne");
            navLinks.forEach((link) => {
                link.removeEventListener('click', listener);
            });
    

        }

        
        // if(nav == 'nav-active') console.log("nav ma aktywne przyciski");
        //Jeżeli nav nieaktywne to zdejmij event listener z linków
        // else alert("nav juz nieaktywne");
    });
    


}
  
navSlide();