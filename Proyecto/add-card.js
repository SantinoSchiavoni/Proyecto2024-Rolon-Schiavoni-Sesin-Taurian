document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona el botón para agregar tarjeta
    var addButton = document.getElementById('add-card');

    // Selecciona el botón de bloqueo
    var lockButton = document.querySelector('.fa-lock');

    // Selecciona la div de la tarjeta
    var cardDiv = document.querySelector('.card');

<<<<<<< HEAD
    // Carga los datos de la tarjeta del almacenamiento local si existen
<<<<<<< HEAD
<<<<<<< HEAD
    var cardData = localStorage.getItem('cardData');
=======
=======
    // Carga los datos de la tarjeta del almacenamiento de la sesion si existen
>>>>>>> dev-santino
=======
>>>>>>> 8404314f4d86146cf13b9b325e41935c7f8a54c8
    var cardData = sessionStorage.getItem('cardData');
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

document.querySelector('.btn-add').addEventListener('click', function(e) {
    // Previene el comportamiento predeterminado del formulario
    e.preventDefault();
    
        // Almacena los datos de la tarjeta en sessionStorage
        var num_tarj = document.getElementById('num_tarj-1');
        var num_tarj_1 = document.getElementById('num_tarj-2');
        var num_tarj_2 = document.getElementById('num_tarj-3');
        var num_tarj_3 = document.getElementById('num_tarj-4');
    
        console.log(num_tarj, num_tarj_1, num_tarj_2, num_tarj_3, titular_tarj, card_expiration_month, card_expiration_year, card_cvv); // Para depurar
    
        sessionStorage.setItem('num_tarj-1', document.getElementById('num_tarj-1').value);
        sessionStorage.setItem('num_tarj-2', document.getElementById('num_tarj-2').value);
        sessionStorage.setItem('num_tarj-3', document.getElementById('num_tarj-3').value);
        sessionStorage.setItem('num_tarj-4', document.getElementById('num_tarj-4').value);
    });