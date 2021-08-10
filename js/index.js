const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link =>{
    link.addEventListener('click', () =>{
        console.log('hello world');
        document.body.classList.remove('nav-open');
    })
})