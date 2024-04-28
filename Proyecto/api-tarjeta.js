/* Esta parte en javascript se encarga de manejar la entrada de datos en el form 
y actualizar dinámicamente a medida que la vamos cargando. Uso jQuery*/

function addData(){
	var num_tarj = document.getElementById('num-tarj').value;
	var titular_tarj = document;
	var expiracion = document.getElementById('expiracion').value;
	var cvv = document.getElementById('cvv').value;
	var titular_tarj = document.getElementById('titular-tarj').value;
	var tipo_tarj = document.getElementById('tipo-tarj').value;
	var data = {
		"num_tarj": num_tarj,
		"titular_tarj": titular_tarj,
	}
	//Agregar datos en sessionStorage
	sessionStorage.setItem('data', JSON.stringify(data));
	
}

/* Crea una variable para almacenar el número de tarjeta.*/ 
$('.input-numero-tarj').on('keyup change', function(){
	var elementoActual = $(this);

/*
En jQuery, la convención de usar el signo $ antes de un nombre de variable es una práctica 
común para indicar que esa variable contiene un objeto jQuery. 

La función $() de jQuery se utiliza para convertir this en un objeto jQuery, 
lo que permite usar métodos de jQuery en el elemento.

!! Yo lo use con 'var = elementoActual
 para entenderlo mejor*/


	if (elementoActual.val().length > 3) {
		elementoActual.next().focus();
	}

	var num_tarj = '';
	$('.input-numero-tarj').each(function(){
		num_tarj += $(this).val() + ' ';
			if ($(this).val().length == 16) {
			$(this).next().focus();
		}
	})
	$('.credit-card-box .number').html(num_tarj);
});


$('#titular-tarj').on('keyup change', function(){
	elementoActual = $(this);
	$('.credit-card-box .titular-tarj div').html(elementoActual.val());
});

$('#titular-tarj').on('keyup change', function(){
	
	elementoActual= $(this);
	$('.credit-card-box .titular-tarj div').html(elementoActual.val());
});

$('#card-expiration-month, #card-expiration-year').change(function(){
	m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
	m = (m < 10) ? '0' + m : m;
	y = $('#card-expiration-year').val().substr(2,2);
	$('.card-expiration-date div').html(m + '/' + y);
})

$('#card-cvv').on('focus', function(){
	$('.credit-card-box').addClass('hover');
}).on('blur', function(){
	$('.credit-card-box').removeClass('hover');
}).on('keyup change', function(){
	$('.cvv div').html($(this).val());
});

setTimeout(function(){
	$('#card-cvv').focus().delay(1000).queue(function(){
		$(this).blur().dequeue();
	});
}, 500);