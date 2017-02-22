<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
include_once("../modelo/base.php");
include_once("../modelo/Contacto.php");
$nombre=$_POST["name"];
$last=$_POST["last"];
$email=$_POST["email"];
$telefono=$_POST["telefono"];
$region=$_POST["region"];
$interes=$_POST["interes"];
/*echo $nombre;
echo $email;
echo $telefono;
echo $mensaje;
if($nombre!="" ||$email!=""||$telefono!=""||$mensaje!="")
{
    $contacto= new Contacto();    
    $contacto->name=$nombre;
    $contacto->email=$email;
    $contacto->phone=$telefono;
    $contacto->message=$mensaje;
    echo $contacto->ContactoWeb();
}
else
{
    echo "<div class='alert alert-danger' role='alert'>Todos los campos son requeridos para el envio</div>";
}*/

 $headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: '.$nombre.' '.$last.' <'.$email.'>'."\r\n";

$asunto = 'Contacto franquicias';

$bodymail='<html><head><title>Contacto franquicias</title></head><body><h3> Datos:</h3>';	

$bodymail.='<p>Nombre: "'.$nombre.'" </p>';

$bodymail.='<p>Apellidos: "'.$last.'" </p>';

$bodymail.='<p>Correo: "'.$email.'" </p>';

$bodymail.='<p>Teléfono: "'.$telefono.'" </p>';

$bodymail.='<p>Región: "'.$region.'" </p>';

$bodymail.='<p>Interés: "'.$interes.'" </p>';

$bodymail.='<br /><br /><br /></body></html>';


$enviado = mail("p.gomez@untrampolin.com",  $asunto, $bodymail, $headers);



echo json_encode("enviado");


?>