function navbarScroll() {
    const navbar = document.querySelector('.nav-gap');
    const toTopBtn = document.querySelector('#to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.remove('navbar-sticky'); // Ajoute la classe au scroll
            toTopBtn.classList.remove('show');
        } else {
            navbar.classList.add('navbar-sticky'); // Retire la classe si on remonte
            toTopBtn.classList.add('show');

        }
    });
}


function scrolltoTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

navbarScroll();
document.querySelector('#to-top').addEventListener('click', scrolltoTop);