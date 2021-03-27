var Nombre = document.getElementById('Nombre');
var Email = document.getElementById('Email');
var Celular = document.getElementById('Celular');
var EscogerProducto = document.getElementById('EscogerProducto');
var EscogerFrase = document.getElementById('EscogerFrase');
var FrasePersonalizada = document.getElementById('FrasePersonalizada');

function EnviarFormulario(){
    console.log('Enviar');

    if(Nombre.value.length <=0 || Email.value.length <=0 ||Celular.value.length <=0 || EscogerProducto.value.length <=0){

        swal("Error!", "Rellena todos los campos", "error");
        }else{
            swal("Muy bien!", "Nos contactaremos contigo", "success"); 
        }

    if (EscogerFrase.value.length <=0 && FrasePersonalizada.value.length <=0) {
        swal("Error!", "Tienes que escoger una frase o escribir una", "error")
    } 
}

