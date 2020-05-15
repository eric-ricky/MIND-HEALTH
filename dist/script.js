



var nav = document.getElementById('navbar');

function openNav() {
    if(nav.className === 'mynav') {
        nav.className += ' responsive';
    } else {
        nav.className = 'mynav';
    }
}