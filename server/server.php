<?php
    header('Access-Control-Allow-Origin: *');
    $opcion = $_POST["opcion"];

    switch($opcion){

        case 'sumar':
            $valor1 = $_POST["valor1"];
            $valor2 = $_POST["valor2"];
            $result = $valor1 + $valor2;
            echo $result;
            break;

        case 'multiplicar':
            $valor1 = $_POST["valor1"];
            $valor2 = $_POST["valor2"];
            $result = $valor1 * $valor2;
            echo $result;
            break;
    }

?>