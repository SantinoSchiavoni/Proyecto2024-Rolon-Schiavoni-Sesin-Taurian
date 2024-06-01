<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona el botón para agregar tarjeta
    var addButton = document.getElementById('add-card');

    // Selecciona el botón de bloqueo
    var lockButton = document.querySelector('.fa-lock');

    // Selecciona la div de la tarjeta
    var cardDiv = document.querySelector('.card');

    // Agrega un evento de clic al botón para agregar tarjeta
    if (addButton && cardDiv) {
        addButton.addEventListener('click', function () {
            // Cambia el estilo de la div de la tarjeta para que sea visible
            cardDiv.style.display = 'flex';

            // Hace que el botón para agregar tarjeta desaparezca
            addButton.style.display = 'none';
            
        });
    } else {
        console.error('El elemento con id "add-card" o la div con clase "card" no se encontró en el DOM.');
    }

    // Agrega un evento de clic al botón para agregar datos de la tarjeta
    var addCardButton = document.querySelector('.btn-add');
    if (addCardButton) {
        addCardButton.addEventListener('click', function (e) {
            // Previene el comportamiento predeterminado del formulario
            e.preventDefault();

            // Almacena los datos de la tarjeta en sessionStorage
            var num_tarj = document.getElementById('num-tarj-1');
            var num_tarj_1 = document.getElementById('num-tarj-2');
            var num_tarj_2 = document.getElementById('num-tarj-3');
            var num_tarj_3 = document.getElementById('num-tarj-4');
            var titular_tarj = document.getElementById('titular-tarj'); // Supuesto id del titular
            var card_expiration_month = document.getElementById('card-expiration-month'); // Supuesto id del mes de expiración
            var card_expiration_year = document.getElementById('card-expiration-year'); // Supuesto id del año de expiración
            var card_cvv = document.getElementById('card-cvv'); // Supuesto id del CVV

            console.log(num_tarj, num_tarj_1, num_tarj_2, num_tarj_3, titular_tarj, card_expiration_month, card_expiration_year, card_cvv); // Para depurar

            sessionStorage.setItem('num-tarj-1', num_tarj ? num_tarj.value : '');
            sessionStorage.setItem('num-tarj-2', num_tarj_1 ? num_tarj_1.value : '');
            sessionStorage.setItem('num-tarj-3', num_tarj_2 ? num_tarj_2.value : '');
            sessionStorage.setItem('num-tarj-4', num_tarj_3 ? num_tarj_3.value : '');
            sessionStorage.setItem('titular-tarj', titular_tarj ? titular_tarj.value : '');
            sessionStorage.setItem('card-expiration-month', card_expiration_month ? card_expiration_month.value : '');
            sessionStorage.setItem('card-expiration-year', card_expiration_year ? card_expiration_year.value : '');
            sessionStorage.setItem('card-cvv', card_cvv ? card_cvv.value : '');

            // Redirecciona a la página de wallet
            window.location.href = 'wallet.html'; // Cambia 'wallet.html' por la ruta correcta si es diferente
        });
    } else {
        console.error('El elemento con clase "btn-add" no se encontró en el DOM.');
    }

    // Manejar el evento de submit del formulario
    const formulario = document.querySelector("#formulario");
    if (formulario) {
        formulario.addEventListener("submit", function(e) {
            e.preventDefault();
            console.log('Nueva tarjeta: ');

            // Obtener los valores de los campos de entrada
            const num_tarj_1 = document.querySelector("#num-tarj-1").value;
            const num_tarj_2 = document.querySelector("#num-tarj-2").value;
            const num_tarj_3 = document.querySelector("#num-tarj-3").value;
            const num_tarj_4 = document.querySelector("#num-tarj-4").value;
            const titular_tarj = document.querySelector("#titular-tarj").value;
            const card_expiration_month = document.querySelector("#card-expiration-month").value;
            const card_expiration_year = document.querySelector("#card-expiration-year").value;
            const card_cvv = document.querySelector("#card-cvv").value;

            // Imprimir los valores obtenidos en la consola
            console.log(num_tarj_1, num_tarj_2, num_tarj_3, num_tarj_4);
            console.log(titular_tarj, card_expiration_month, card_expiration_year, card_cvv);

            sessionStorage.setItem('num-tarj-1', num_tarj_1);
            sessionStorage.setItem('num-tarj-2', num_tarj_2);
            sessionStorage.setItem('num-tarj-3', num_tarj_3);
            sessionStorage.setItem('num-tarj-4', num_tarj_4);
            sessionStorage.setItem('titular-tarj', titular_tarj);
            sessionStorage.setItem('card-expiration-month', card_expiration_month);
            sessionStorage.setItem('card-expiration-year', card_expiration_year);
            sessionStorage.setItem('card-cvv', card_cvv);

            // Redirecciona a la página de wallet
            window.location.href = 'wallet.html'; // Cambia 'wallet.html' por la ruta correcta si es diferente
        });
        
    } else {
        console.error('El formulario con id "formulario" no se encontró en el DOM.');
    }
});
=======
>>>>>>> 5555e78b385bab98abeb157e3f6617799b0c9479
