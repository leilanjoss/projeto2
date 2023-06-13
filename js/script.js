const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const logSigMenu = document.querySelector('.login-sign-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    logSigMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    logSigMenu.classList.remove('active');
}))