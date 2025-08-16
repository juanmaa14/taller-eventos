document.addEventListener('DOMContentLoaded', function() {
    const div = document.querySelector('div');
    const button = div.querySelector('button');

    div.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });

    button.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
