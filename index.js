document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('homeLink').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('aboutLink').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('abo').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('servicesLink').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('ser').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('contactLink').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('con').scrollIntoView({ behavior: 'smooth' });
    });
});
