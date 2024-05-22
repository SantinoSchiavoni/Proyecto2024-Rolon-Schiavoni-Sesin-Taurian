document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona el botón para agregar tarjeta
    var addButton = document.getElementById('add-card');

    // Selecciona el botón de bloqueo
    var lockButton = document.querySelector('.fa-lock');

    // Selecciona la div de la tarjeta
    var cardDiv = document.querySelector('.card');

    // Agrega un evento de clic al botón para agregar tarjeta
    addButton.addEventListener('click', function () {
        // Cambia el estilo de la div de la tarjeta para que sea visible
        cardDiv.style.display = 'flex';

        // Hace que el botón para agregar tarjeta desaparezca
        addButton.style.display = 'none';
    });
});

document.querySelector('.btn-add').addEventListener('click', function (e) {
    // Previene el comportamiento predeterminado del formulario
    e.preventDefault();

    // Almacena los datos de la tarjeta en sessionStorage
    var num_tarj = document.getElementById('num-tarj-1');
    var num_tarj_1 = document.getElementById('num-tarj-2');
    var num_tarj_2 = document.getElementById('num-tarj-3');
    var num_tarj_3 = document.getElementById('num-tarj-4');

    console.log(num_tarj, num_tarj_1, num_tarj_2, num_tarj_3, titular_tarj, card_expiration_month, card_expiration_year, card_cvv); // Para depurar

    sessionStorage.setItem('num-tarj-1', document.getElementById('num-tarj-1').value);
    sessionStorage.setItem('num-tarj-2', document.getElementById('num-tarj-2').value);
    sessionStorage.setItem('num-tarj-3', document.getElementById('num-tarj-3').value);
    sessionStorage.setItem('num-tarj-4', document.getElementById('num-tarj-4').value);
});