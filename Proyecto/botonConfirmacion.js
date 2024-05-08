document.addEventListener('DOMContentLoaded', function() { // se asegura que el codigo este totalmente cargado para usar
    const buttons = document.querySelectorAll('#confirmarCompra');//recorre todos los botones con el mismo id.
    buttons.forEach(button => {
        button.addEventListener('click', function() {//agrega un evento de click
            if (confirm('¿Desea confirmar la compra?')) {//ejecuta una funcion confirm.
                alert('Compra confirmada. ¡Disfrute del servicio!');
            } else {
                alert('Compra cancelada.');
            }
        });
    });
});
