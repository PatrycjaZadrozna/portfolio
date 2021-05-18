const hamburgerBtn = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const nav = document.querySelector('nav');

function toggleBnt(){
    navList.classList.toggle('show');
}
hamburgerBtn.addEventListener('click', toggleBnt);










