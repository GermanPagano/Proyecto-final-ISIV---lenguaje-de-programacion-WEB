const URL = "http://localhost:3000/Server/server.php";
const METHOD_POST = "post";

$(document).ready(() => {

        // saber de donde se clickeo el submit 
        let detectarSubmit = ''
        $(".submit").on("click", function() {
            detectarSubmit = $(this).val();
            console.log('se ejecuto  '+ detectarSubmit)

        });

    $(".formularioOperacion").on("submit", function(event) {
        // evitar que se recarge la pagina

        event.preventDefault();
        let form = $(this);
        let operacion = {
            opcion: detectarSubmit,
            valor1: Number(form.find('.val1').val()), // Encontrar valores dentro del formulario actual
            valor2: Number(form.find('.val2').val())  // Encontrar valores dentro del formulario actual
        }

        $.ajax({
            url: URL,
            type: METHOD_POST,
            data: operacion,
            success: (result) => {
                let resp = parseFloat(result);
                imprimir(form, resp)
            }
        });
        return false;
    })


    // Cargar resultados en el form correspondiente
    const imprimir = (form, e) => {
        $('.contenedorResult').find("#resultado[name='" + detectarSubmit + "']").text(e)
    };

});