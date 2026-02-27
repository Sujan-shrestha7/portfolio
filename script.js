const app = document.getElementById('app');
const navMenu = document.getElementById('navMenu');

app.addEventListener('click', function() {
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});
