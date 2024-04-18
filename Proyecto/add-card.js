document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona el botón para agregar tarjeta
    var addButton = document.getElementById('add-card');

    // Selecciona el botón de bloqueo
    var lockButton = document.querySelector('.fa-lock');

    // Selecciona la div de la tarjeta
    var cardDiv = document.querySelector('.card');

    // Carga los datos de la tarjeta del almacenamiento local si existen
<<<<<<< HEAD
    var cardData = localStorage.getItem('cardData');
=======
    var cardData = sessionStorage.getItem('cardData');
>>>>>>> dev-santino
    if (cardData) {
        cardDiv.innerHTML = cardData;
    }

    // Agrega un evento de clic al botón para agregar tarjeta
    addButton.addEventListener('click', function() {
        // Cambia el estilo de la div de la tarjeta para que sea visible
        cardDiv.style.display = 'flex';

        // Hace que el botón para agregar tarjeta desaparezca
        addButton.style.display = 'none';
    });

    // Agrega un evento de clic al botón de bloqueo
    lockButton.addEventListener('click', function() {
        // Guarda los datos de la tarjeta en el almacenamiento local
        localStorage.setItem('cardData', cardDiv.innerHTML);

        // Cambia el estilo de la div de la tarjeta para que desaparezca
        cardDiv.style.display = 'none';

        // Hace que el botón para agregar tarjeta aparezca
        addButton.style.display = '';
    });
});