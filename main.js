$(document).ready(function () {
    let mainContent = $(".controlador");
    let tituloPrincipal = $(".contenedorTitulo");

    // funcion que deja sombreado el boton elegido del nav ( como se ve en la img del pdf )
    $(document).ready(function () {
        $("nav > button").on("click", function () {
            // Quitar la clase 'selected' de cualquier botón que la tenga
            $("nav > button").removeClass("selected");
            // Agregar la clase 'selected' al botón clicado
            $(this).addClass("selected");
        });
    });

    // utilizo ajax para cargar dinamicamente el home en el main al momento de cargar la web
    const mostrarHome = () => {
        $.ajax({
            url: "./pages/home.html",
            method: "GET",
            success: function (data) {
                $(mainContent).html(data);
            },
            error: function (status, error) {
                console.log("Hubo un error en la solicitud AJAX:");
                console.log("Estado:", status);
                console.log("Error:", error);
            },
        });
    };

    // botonera del nav
    $("#clientes-btn").on("click", () => {
        console.log("Imprimiendo seccion clientes");
        // Cargar y mostrar el contenido de clientes.html en mainContent
        $(mainContent).load("./pages/clientes.html");
    });

    $("#productos-btn").on("click", () => {
        console.log("imprimir PRODUCTOS");
        // Cargar y mostrar el contenido de productos.html en mainContent
        $(mainContent).load("./pages/productos.html");
    });

    $("#categorias-btn").on("click", () => {
        console.log("imprimir CATEGORIAS");
        // Cargar y mostrar el contenido de categorias.html en mainContent
        $(mainContent).load("./pages/categorias.html");
    });

    $(tituloPrincipal).on("click", function () {
        // Quitar la clase 'selected' de cualquier botón que la tenga
        $("nav > button").removeClass("selected");
        //  funcion para regargar el sitio, cuando se clickea el texto del header
        mostrarHome();
    });








    //llamo a la funcion mostrarHome para cargar el home
    mostrarHome();
});
