
const projects = document.getElementById('projects');
const home = document.getElementById('home');
const contact = document.getElementById('contact');
var state = 'home';



var sum = 0;
window.onload = () => {
    setTimeout(() => {
        home.classList.remove('hidden');
        home.classList.add('show');
        home.classList.add('trigger-down');
    }, 500);
}


