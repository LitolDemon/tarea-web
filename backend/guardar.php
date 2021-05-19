<?php
    header('Content-type:application/json');
    header("Access-Control-Allow-Origin:*");

    $json=file_get_contents('php://input'); 
    $info = json_decode($json);
    $aux = json_decode($json,true);

    $estado = $aux[0]["estado"];
    echo $estado;


    switch($estado){
        case "abierta":
            $jsonData=file_get_contents("abierta.json");
            $arrayData=json_decode($jsonData);
            array_push($arrayData,$info);
            $jsonData = json_encode($arrayData);
        
            $archivo = fopen("abierta.json", "w");
            fwrite($archivo,$jsonData);
      
            break;
        case "proceso":
            //$archivo = fopen("datosProceso.json", "w");
            $jsonData=file_get_contents("proceso.json");
            $arrayData=(array)json_decode($jsonData);
            array_push($arrayData,$info);
            $jsonData = json_encode($arrayData);
            
            $archivo = fopen("proceso.json", "w");
            fwrite($archivo,$jsonData);
            break;
        case "cerrada":
            $jsonData=file_get_contents("cerrada.json");
            $arrayData=json_decode($jsonData);
            array_push($arrayData,$info);
            $jsonData = json_encode($arrayData);

            $archivo = fopen("cerrada.json","w");
            fwrite($archivo,$jsonData);
            break;
    }
?>