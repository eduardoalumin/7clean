<?php 

$headers = 'MIME-Version: 1.0' . "\r\n";

			$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

			$headers .= 'From: 7Clean <no-replay@tintorerias7clean.com>' . "\r\n";

			$asunto = 'Recuperación de contraseña.';
			$bodymail =	'<html style="width: 600px;margin: auto;" lang="es"><head>';
			$bodymail .='<meta charset="UTF-8">';
			$bodymail .='<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">';
			$bodymail .='<title>Recuperación de contraseña</title>';
			$bodymail .='<style>';
			$bodymail .='header{height: 80px;}';
			$bodymail .='html,body{width: 600px;margin: auto;}';
			$bodymail .='header p{ line-height: 80px; margin: 0px;height: 80px; text-align: center;padding-top: 10px;}';
			$bodymail .='.content{font-size: 20px;background: #1874a7;color: #fff;padding: 20px;}';
			$bodymail .='.textverdecursiva{color: #98bf2e;font-size: 25px;}';
			$bodymail .='.saludo{	text-align: center;text-transform: capitalize;}';
			$bodymail .='.bienvenida{padding: 20px;text-align: center;}';
			$bodymail .='.textobold{font-size: 22px;font-weight: bold;}';
			$bodymail .='.content-datos{width: 100%; height: 100px;font-size: 14px;}';
			$bodymail .='.content-datos1{width: 49%;display: inline-block;}';
			$bodymail .='.content-datos2{width: 49%;display: inline-block;}';
			$bodymail .='.content-datos2 p{text-align: center;}';
			$bodymail .='.valor{padding: 17px 10px 10px; border: 2px solid #98bf2e; font-size: 16px;width: 120px; display: inline-block; margin-top: -13px; position: relative; z-index: 0;}';
			$bodymail .='.title{color: #98bf2e;font-size: 20px; background: #1874a7;width: 110px; padding: 3px; display: inline-block; position: relative; z-index: 1;}';
			$bodymail .='footer{width: 100%;padding: 1px; background: #98bf2e; height: 30px;}';
			$bodymail .='.footer_1{width: 49%;float: left;height: 100%;}';
			$bodymail .='.footer_1 p{text-align: left;}';
			$bodymail .='.footer_2{width: 49%;float: right;height: 100%;}';
			$bodymail .='.footer_2 p{text-align: right;}';
			$bodymail .='.content-footer p{margin:0px;line-height: 100%;height: 100%;padding: 0px 20px;}';
			$bodymail .='.content-footer a{color: #fff;text-decoration: none;font-size: 18px; height: 30px; line-height: 30px;}';
			$bodymail .='main{overflow-x: hidden;}';
			$bodymail .='</style>';
			$bodymail .='</head>';
			$bodymail .='<body style="width: 600px;margin: auto;">';
			$bodymail .='<header style="height: 60px;">';
			$bodymail .='<p style="line-height: 60px; margin: 0px;height: 80px; text-align: center;padding-top: 10px; background: #fff"><img src="http://untrampolin.com/development/7clean/servicio_a_domicilio/images/logo3.png"></p>';
			$bodymail .='</header>';
			$bodymail .='<main style="overflow-x: hidden;">';
			$bodymail .='<div style="background: #fff; width: 600px;"><p class="saludo" style="color: #1874a7; font-size: 20px; text-align: center;text-transform: capitalize; font-weight: bold;">¡Hola eduardo!</p></div>';
			$bodymail .='<div class="content" style="font-size: 20px;color: #fff;padding: 20px;">';
			$bodymail .='<div class="content-datos2" style="width: 100%;display: inline-block;"><p style="text-align: center;"><span class="title" style="color: #a6a7a7; font-size: 16px;  padding: 3px; padding-bottom: 30px; display: inline-block; position: relative; z-index: 1; ">Hemos recibido tu solicitud<br> para recuperar tu contraseña</span><br><span class="valor" style="padding: 10px 10px 10px; border: 2px solid #98bf2e; font-size: 16px;width: 120px; display: inline-block; margin-top: -13px; position: relative; z-index: 0; color: #a6a7a7">12345678</span></p></div>';
			$bodymail .='<p class="bienvenida" style="padding: 20px;text-align: center; color: #a6a7a7"><br> Fue un placer asisterte <span class="textverdecursiva" style="color: #98bf2e;font-size: 25px; font-weight: bold">nos vemos</span><br></p>';
			$bodymail .='</div>';
			$bodymail .='<footer style="width: 598px;padding: 1px; background: #98bf2e; height: 30px;">';
			$bodymail .='<div class="content-footer footer_1" style="width: 49%;float: left;height: 100%;"><p class="face" style="margin:0px;line-height: 100%;height: 100%;padding: 0px 20px;text-align: left;"><img height="16px" src="http://untrampolin.com/development/7clean/servicio_a_domicilio/images/facebook.png" style="margin-bottom: 0px; padding-top: 5px;margin-right: 5px;"><a  href="https://www.facebook.com/tintorerias7clean/" target="_blank" style="color: #fff;text-decoration: none;font-size: 14px; height: 30px; line-height: 30px;">Tintorerías 7Clean</a></p></div>';
			$bodymail .='<div class="content-footer footer_2" style="width: 49%;float: right;height: 100%;"><p class="url" style="margin:0px;line-height: 100%;height: 100%;padding: 0px 20px;text-align: right;"><a href="http://www.tintorerias7clean.com" target="_blank" style="color: #fff;text-decoration: none;font-size: 14px; height: 30px; line-height: 30px;">www.tintorerias7clean.com</a></p></div>';
			$bodymail .='</footer>';
			$bodymail .='</main>';
			$bodymail .='</body>';
			$bodymail .='<html>';

			$enviado = mail("gaby.frias@untrampolin.com",  $asunto, $bodymail, $headers);



			?>