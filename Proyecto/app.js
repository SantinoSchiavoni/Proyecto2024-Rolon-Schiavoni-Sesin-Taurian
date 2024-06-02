const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", validarForm);

function validarForm(e) {
    e.preventDefault();
    console.log('Nueva tarjeta: ');
    
    const num_tarj_1 = document.querySelector("#num-tarj-1").value;
    const num_tarj_2 = document.querySelector("#num-tarj-2").value;
    const num_tarj_3 = document.querySelector("#num-tarj-3").value;
    const num_tarj_4 = document.querySelector("#num-tarj-4").value;
    const titular_tarj = document.querySelector("#titular-tarj").value;
    const card_expiration_year = document.querySelector("#card-expiration-year").value;
    const card_expiration_month = document.querySelector("#card-expiration-month").value;
    const card_cvv = document.querySelector("card-cvv").value;

    console.log(num_tarj_1, num_tarj_2, num_tarj_3, num_tarj_4, titular_tarj, card_expiration_year, card_expiration_month, card_cvv);
    
}


//EL ID