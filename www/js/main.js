url_de_llegada=" ";
$(window).load(function(){
	$(".main-loader").css("display", "none")
	$(".main.container").css("display", "inherit")
	url_de_llegada=location.href;

	if(url_de_llegada.substr(url_de_llegada.length-6, url_de_llegada.length)=="pedido"){
	
	$("#hacer_pedido").click();
	}
});

$(document).ready(function(){




contrasenas_equal=1;

botones_prsonalizar=0;
table_producto=0;
		

$(".reg_telefono").change(function(){
	if($(".reg_telefono").val()!=""){
		if($(".reg_telefono").val().length<8){
			$(this).addClass("incorrect");
		}else{
			$(this).removeClass("incorrect");
		}
	}
});



$(".reg_telefono").focusout(function(){
	if($(".reg_telefono").val()!=""){
		if($(".reg_telefono").val().length<8){
			$(this).addClass("incorrect");
			$(".reg_telefono").focus();
			$(".error_tel_fijo").show("fast");
		}else{
			$(".error_tel_fijo").hide("fast");
		}
	}else{
		$(".error_tel_fijo").hide("fast");
	}
});

  
$(".buscarcolonia").focusout(function(){
	if(colonia_seleccionada==0){
		$(this).focus();
		$(".error_colonia").show("fast");
	}else{
		$(".error_colonia").hide("fast");
		
	}
});



$(".reg_telefono").focusout(function(){
	if($(".reg_telefono").val()!=""){
		if($(".reg_telefono").val().length<8){
			$(this).addClass("incorrect");
			$(".reg_telefono").focus();
			$(".error_tel_fijo").show("fast");
		}else{
			$(".error_tel_fijo").hide("fast");
			$(this).removeClass("incorrect");
		}
	}else{
		$(".error_tel_fijo").hide("fast");
	}
	
});

$(".telefono").focusout(function(){
if(($(".reg_telefono_celular").hasClass("incorrect") || $(".reg_telefono_celular").val()=="") &&  ($(".reg_telefono").hasClass("incorrect") || $(".reg_telefono").val()=="") ){
		$(".error_telefonos").show("fast");
		$(".reg_telefono").focus();
	}else{
		$(".error_telefonos").hide("fast");
	}
});
$(".reg_telefono_celular").focusout(function(){
	if($(".reg_telefono_celular").val()!=""){
		if($(".reg_telefono_celular").val().length<8){
			$(this).addClass("incorrect");
			$(".reg_telefono_celular").focus();
			$(".error_tel_cel").show("fast");
		}else{
			$(".error_tel_cel").hide("fast");
			$(this).removeClass("incorrect");
		}
	}else{
		$(".error_tel_cel").hide("fast");
	}
	

});

$(".reg_correo").focusout(function(){
	if($(".reg_correo").val().indexOf('@', 0) == -1 || $(".reg_correo").val().indexOf('.', 0) == -1) {
            $(".error_mail").show("fast");
            $(this).focus();
		}else{
			$(".error_mail").hide("fast");
		
        }
});





$(".reg_telefono_celular").change(function(){
	if($(".reg_telefono_celular").val()!=""){
		if($(".reg_telefono_celular").val().length<8){
			$(this).addClass("incorrect");
		}else{
			$(this).removeClass("incorrect");
		}
	}
});


width=$(window).width();
if(width<5000){
		$(".dropdown-toggle").addClass("fa");
		$(".dropdown-toggle").addClass("fa-bars");
		$(".dropdown-toggle").html(" ");
		$(".dropdown-toggle").css("font-size", "24px");	
	}

$(window).resize(function(){
	width=$(window).width();
	if(width<5000){
		$(".dropdown-toggle").addClass("fa");
		$(".dropdown-toggle").addClass("fa-bars");
		$(".dropdown-toggle").html(" ");
		$(".dropdown-toggle").css("font-size", "24px");	
	}else{
		$(".dropdown-toggle").removeClass("fa");
		$(".dropdown-toggle").removeClass("fa-bars");
		$(".dropdown-toggle").html('Menú<span class="caret"></span>');
		$(".dropdown-toggle").css("font-size", "14px");	
	}
})


function readCookie() {
    var nameEQ = "7clean_id" + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return "null";
}


url="https://alumin.agency/untrampolin/administrador";
	descuento_inicial=0;
responsive=0;
calificacion=0;
id_user=readCookie();
codigo_cupon="N/A";
codigo_convenio="N/A"
html="";
volverdeloggin=8;
setTimeout(function(){

 $(".rating").rating();
},1000);


$(window).load(function(){

	$("body").css("display", "inherit");
			$.ajax({
					 type: "POST", 
					 url: url+"/index.php/servicios/traer_estados", 
					 dataType: "json", 
					 success: function (data) {
					 		html='<option value="0">Estado</option>';
						for(i=0; i<data.length; i++){
							if(data[i]["estado"]=="Distrito Federal"){
								html+='<option value="'+data[i]["estado"]+'">Ciudad de México</option>';			
							}else{
								html+='<option value="'+data[i]["estado"]+'">'+data[i]["estado"]+'</option>';	
							}
						}
								
							
						$(".reg_estado").html(html);
						html="";
					}

			});

			if(id_user!="null"){
				
				$("body").removeClass("no-logged");
				$("body").addClass("logged");

				$.ajax({
											                type: "POST", 
											                url: url+"/index.php/servicios/traer_datos_cliente", 
											                data: { id_user: id_user},
											                dataType: "json", 
											                 success: function (data) {

											                 		$("#edit_nombre").val(data[0]['nombre']);
											                 		$("#edit_correo").val(data[0]['correo']);
											                 		if(data[0]["foto_url"]!=""){
											                 			$(".avatar img").attr("src", data[0]["foto_url"]); 
											                 		}else{
											                 			$(".avatar img").attr("src", "images/avatar.png"); 
											                 		}
											                 		$("#edit_apellidos").val(data[0]['apellidos']);
											                 		$("#edit_telefono").val(data[0]['telefono_casa']);
											                 		$("#edit_telefono_celular").val(data[0]['telefono_cel']);
											                 		$("#edit_convenio").val(data[0]['convenio']);
											                 		$(".nombre_imagen").val(data[0]['foto_url']);
											                 		$("#edit_password").val(data[0]['password']);
											                 		$('.avatar-perfil img').attr('src',data[0]['foto_url']);
																		codigoconvenio=data[0]['convenio'];
											                 }
											            }); 
			}

	
});
	
$(".reg_estado").change(function(){
	estado=$(this).find("option:selected").val();
	$.ajax({
					 type: "POST", 
					 url: url+"/index.php/servicios/traer_municipios", 
					 dataType: "json", 
					 data: {estado:estado },
					 success: function (data) {
					 	
					 		html='<option value="0">Delegación/Municipio</option>';
						for(i=0; i<data.length; i++){
							html+='<option value="'+data[i]["municipio"]+'">'+data[i]["municipio"]+'</option>';						
						}
						$(".reg_municipio").html(html);
					}

	});
});

/*$("#btn-inicio").click(function(){
	
	window.location.href = "https://alumin.agency/untrampolin/servicio_a_domicilio/#pedido";
	location.reload();
});
*/


$("#btn-guardar-perfil").click(function(){
		
$("#uploadimage").submit();

	$("#form-edit-perfil").submit();
});

$("#form-edit-perfil").submit(function(e){
	e.preventDefault();
edit_nombre=$("#edit_nombre").val();
edit_apellidos=$("#edit_apellidos").val();
edit_telefono=$("#edit_telefono").val();
edit_telefono_celular=$("#edit_telefono_celular").val();
edit_password=$("#edit_password").val();
codigoconvenio=$("#edit_convenio").val();
foto=$(".nombre_imagen").val();			

			$.ajax({
					 type: "POST", 
					 url: url+"/index.php/servicios/guardar_cambios_perfil", 
					 dataType: "json", 
					 data: {id_user:id_user, foto:foto, edit_nombre:edit_nombre, edit_apellidos:edit_apellidos, edit_telefono:edit_telefono, edit_telefono_celular:edit_telefono_celular, edit_password:edit_password, edit_convenio:codigoconvenio},
					 success: function (data) {
					 	
					 $(".cambios-guardados").addClass("active");
					 setTimeout(function(){
					 	$(".cambios-guardados").addClass("animation");
					 },2000);
					 setTimeout(function(){
					 	$(".cambios-guardados").removeClass("animation");
					 	$(".cambios-guardados").removeClass("active");
					 },3000);
			}

	});
});



$('#historial_1').on('rating.change', '.rating', function(event, value, caption) {
    calificacion=value;
    /*
    									$.ajax({
									                type: "POST", 
									                url: url+"/index.php/servicios/guardar_rating", 
									                data: {value: value, producto: producto},
									                dataType: "json", 
									                 success: function (data) {
									                	if(data!=-1){
									                		$(this).attr("data-disabled", "true");
									                	}
												   }
									            });*/
});



$("#hacer_pedido, .back_direcciones").click(function(){
	$(".contenedor-slide").removeClass("active");		
	$("#slide8").addClass("active");	
	$("body").removeClass("background");
	$("header").removeClass("barrainvisible");
	$("#hacer_pedido").css("display", "none");
	$("#historial_pedidos").css("display", "inherit");
	$(".paso_1-title, .paso_1-number").show("fast");
	$(".contenedor-detalles-pedido").hide("fast");
	$(".back_pagos, .back_pagos-title, back_pagos-number").hide("fast");
	$(".heading-detalles-recoleccion").hide("fast");	
	$(".heading-direcciones").show("fast");	
	$("#agregar-registro").show("fast");
	$("#lista-direcciones").show("fast");	
	$("#lista-direcciones").prev("fast");	
	$("#lista-direcciones").next("fast");	

})

$("#historial_pedidos, #ver-perdidos").click(function(){
	/*$(".contenedor-slide").removeClass("active");		
	$("#historial_1").addClass("active");	
	$("body").removeClass("background");
	$("header").removeClass("barrainvisible");
	$("#hacer_pedido").css("display", "inherit");
	$("#historial_pedidos").css("display", "none");*/
	$.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/traer_pedidos_x_cliente", 
								                data: { id_user: id_user},
								                dataType: "json", 
								                 success: function (data) {
								                 	if(data!="-1"){
								                 		html="";
								                 		for(i=0; i<data.length; i++){

								                 				
									                 			html+='<div class="content-historial-individual">';
									                 			html+='<div class="dato col-xs-12 col-lg-12"><p class="historial-fecha">'+data[i].fecha_de_pedido+'</p></div>';
									                 			html+='<div class="historial-ticket"><div class="title col-xs-6 col-sm-6 ">Ticket:</div><div class="dato col-xs-6 col-sm-6">'+data[i].ticket_aplicado+'</div></div>';
									                 			html+='<div class="historial-f_pedido"><div class="title col-xs-6 col-sm-6">Fecha de recolección:</div><div class="dato col-xs-6 col-sm-6">'+data[i].fecha_de_salida+'</div></div>';
									                 			html+='<div class="historial-f_salida"><div class="title col-xs-6 col-sm-6">Fecha de entrega:</div><div class="dato col-xs-6 col-sm-6">'+data[i].fecha_de_entrega+'</div></div>';
									                 			html+='<div class="historial-recurrencia"><div class="title col-xs-6 col-sm-6">Recurrencia:</div><div class="dato col-xs-6 col-sm-6">'+data[i].recurrencia+'</div></div>';
									                 			html+='<div class="historial-modo_de_pago"><div class="title col-xs-6 col-sm-6">Modo de pago:</div><div class="dato col-xs-6 col-sm-6">'+data[i].modo_de_pago+'</div></div>';
									                 			html+='<div class="historial-estado"><div class="title col-xs-6 col-sm-6">Etapa:</div><div class="dato col-xs-6 col-sm-6">'+data[i].edo_servicio+'</div></div>';
									                 			/*html+='<div class="historial-monto"><div class="title col-xs-6 col-sm-6">Total:</div><div class="dato col-xs-6 col-sm-6">$ '+data[i].monto_total+'</div></div>';*/
								                 			if(data[i].edo_servicio=="entregado"){
								                 				if(data[i].calificacion==null){
											                 		html+='<div class="historial-calificacion"><div class="title col-xs-6 col-sm-6">Calificación:</div><div class="dato col-xs-6 col-sm-6"><input id="input-id" name="input-name" type="number"  class="rating rating-loading" data-producto-id="'+data[i].id+'" data-size="xs" data-min="1" data-max="5" data-step="0.5"></div></div>';
											                 		html+='<div class="historial-comentario"><div class="title col-xs-12 col-sm-12"><textarea class="comentario_cliente" placeholder="Comentario de nuestro servicio" data-producto-id="'+data[i].id+'"></textarea><br><button type="button" class="btn_comentario_cliente btn btn-primary" data-producto-id="'+data[i].id+'">Guardar</button></div></div>';
								                 				}else{
											                 		html+='<div class="historial-calificacion"><div class="title col-xs-6 col-sm-6">Calificación:</div><div class="dato col-xs-6 col-sm-6"><input id="input-id" name="input-name" type="number" value="'+data[i].calificacion+'" class="rating rating-loading" data-disabled="true" data-producto-id="'+data[i].id+'" data-size="xs" data-min="0" data-max="5" data-step="0.5"></div></div>';
											                 	}
															}		
																html+='</div>';
																$(".contenedor-slide").removeClass("active");
																/*if(url_de_llegada.substr(url_de_llegada.length-6, url_de_llegada.length)=="pedido"){
																	$("#slide8").addClass("active");
																}else{
																	$("#historial_1").addClass("active");
																}*/
											                 	$(".content-historial").html(html);
											                 	$("#slidehome").addClass("active");
											                 	$("body").removeClass("background");
																$("header").removeClass("barrainvisible");
																$("#historial_pedidos").css("display", "none");
																$("#hacer_pedido").css("display", "inherit");
																$(".dropdown-menu li").removeClass("active")
																$("#historial_pedidos").addClass("active");
														
																
											            }	
								                 	}else{
								                 		
								                 		html="<p class='center'>Aun no has hecho pedidos</p>";
								                 		$(".contenedor-slide").removeClass("active");
														$("#slidehome").addClass("active");	
														$(".content-historial").html(html);
														$("body").removeClass("background");
														$("header").removeClass("barrainvisible");
														$("#historial_pedidos").css("display", "none");
																$("#historial_pedidos").addClass("inactive");
	
								                 	}
													$(".contenedor-slide").removeClass("active");
													$("#historial_1").addClass("active");
								   				}
								    });
	
	
})

if(id_user!="null"){
	html="";
	$("#cerrar_sesion").css("display", "inherit");
	$("#editar_perfil").css("display", "inherit");
	$("#historial_pedidos").css("display", "inherit");
	$("body").addClass("background");
	$("header").addClass("barrainvisible");
	$("#hacer_pedido").css("display", "none");
	$("#iniciar_sesion").css("display", "none");
	$("#editar_perfil").css("display", "inherit");
	$("#editar_direcciones").css("display", "inherit");
	$("#dir_saved").css("display", "inherit");
	$("#slide8").removeClass("active");
	$("#slide9").css("display", "none");
	$("#historial_1").removeClass("active");
	$("#slidehome").addClass("active");	

									$.ajax({
									                type: "POST", 
									                url: url+"/index.php/servicios/traer_directorio", 
									                data: {id_user: id_user},
									                dataType: "json", 
									                 success: function (data) {
									                	if(data!=-1){
									                		direcciones="";
									                		for(i=0; i<data.length; i++){
									                		direcciones+="<p><button type='button'  data-id_direccion='"+data[i].id+"' data-colonia='"+data[i].colonia+"' data-calle_y_num='"+data[i].calle_numero+"' data-entre_calle_1='"+data[i].entre_calle_1+"' data-entre_calle_2='"+data[i].entre_calle_2+"' data-referencias='"+data[i].referencias+"' data-estado='"+data[i].estado+"' data-delegacion='"+data[i].delegacion+"' data-codigo_postal='"+data[i].codigo_postal+"' data-num-ext='"+data[i].numero_exterior+"' data-num-int='"+data[i].numero_interior+"' class='btn btn-default direccion_guardada'>"+data[i].nombre_en_agenda+"</button><i class='fa fa-pencil editar_direccion_button' aria-hidden='true'></i></p><br>";
									                		}

									                		$("#lista-direcciones, #botones-direcciones-editar").prepend(direcciones);
									                		$("#lista-direcciones2, #botones-direcciones-editar").prepend(direcciones);
									                		$("#p-direcciones").addClass("active");
									                	}
												   }
									            });


									$.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/traer_pedidos_x_cliente", 
								                data: { id_user: id_user},
								                dataType: "json", 
								                 success: function (data) {
								                 	if(data!="-1"){
								                 		html="";
								                 		for(i=0; i<data.length; i++){

								                 				
									                 			html+='<div class="content-historial-individual">';
									                 			html+='<div class="dato col-xs-12 col-lg-12"><p class="historial-fecha">'+data[i].fecha_de_pedido+'</p></div>';
									                 			html+='<div class="historial-ticket"><div class="title col-xs-6 col-sm-6 ">Ticket:</div><div class="dato col-xs-6 col-sm-6">'+data[i].ticket_aplicado+'</div></div>';
									                 			html+='<div class="historial-f_pedido"><div class="title col-xs-6 col-sm-6">Fecha de recolección:</div><div class="dato col-xs-6 col-sm-6">'+data[i].fecha_de_salida+'</div></div>';
									                 			html+='<div class="historial-f_salida"><div class="title col-xs-6 col-sm-6">Fecha de entrega:</div><div class="dato col-xs-6 col-sm-6">'+data[i].fecha_de_entrega+'</div></div>';
									                 			html+='<div class="historial-recurrencia"><div class="title col-xs-6 col-sm-6">Recurrencia:</div><div class="dato col-xs-6 col-sm-6">'+data[i].recurrencia+'</div></div>';
									                 			html+='<div class="historial-modo_de_pago"><div class="title col-xs-6 col-sm-6">Modo de pago:</div><div class="dato col-xs-6 col-sm-6">'+data[i].modo_de_pago+'</div></div>';
									                 			html+='<div class="historial-estado"><div class="title col-xs-6 col-sm-6">Etapa:</div><div class="dato col-xs-6 col-sm-6">'+data[i].edo_servicio+'</div></div>';
									                 			/*html+='<div class="historial-monto"><div class="title col-xs-6 col-sm-6">Total:</div><div class="dato col-xs-6 col-sm-6">$ '+data[i].monto_total+'</div></div>';*/
								                 			if(data[i].edo_servicio=="entregado"){
								                 				if(data[i].calificacion==null){
											                 		html+='<div class="historial-calificacion"><div class="title col-xs-6 col-sm-6">Calificación:</div><div class="dato col-xs-6 col-sm-6"><input id="input-id" name="input-name" type="number"  class="rating rating-loading" data-producto-id="'+data[i].id+'" data-size="xs" data-min="1" data-max="5" data-step="0.5"></div></div>';
											                 		html+='<div class="historial-comentario"><div class="title col-xs-12 col-sm-12"><textarea class="comentario_cliente" placeholder="Comentario de nuestro servicio" data-producto-id="'+data[i].id+'"></textarea><br><button type="button" class="btn_comentario_cliente btn btn-primary" data-producto-id="'+data[i].id+'">Guardar</button></div></div>';
								                 				}else{
											                 		html+='<div class="historial-calificacion"><div class="title col-xs-6 col-sm-6">Calificación:</div><div class="dato col-xs-6 col-sm-6"><input id="input-id" name="input-name" type="number" value="'+data[i].calificacion+'" class="rating rating-loading" data-disabled="true" data-producto-id="'+data[i].id+'" data-size="xs" data-min="0" data-max="5" data-step="0.5"></div></div>';
											                 	}
															}		
																html+='</div>';
																$(".contenedor-slide").removeClass("active");
																/*if(url_de_llegada.substr(url_de_llegada.length-6, url_de_llegada.length)=="pedido"){
																	$("#slide8").addClass("active");
																}else{
																	$("#historial_1").addClass("active");
																}*/
											                 	$(".content-historial").html(html);
											                 	$("#slidehome").addClass("active");
											                 	$("body").removeClass("background");
																$("header").removeClass("barrainvisible");
																$("#historial_pedidos").css("display", "none");
																$("#hacer_pedido").css("display", "inherit");
																
														
																
											            }	
								                 	}else{
								                 		
								                 		html="<p class='center'>Aun no has hecho pedidos</p>";
								                 		$(".contenedor-slide").removeClass("active");
														$("#slidehome").addClass("active");	
														$(".content-historial").html(html);
														$("body").removeClass("background");
														$("header").removeClass("barrainvisible");
														$("#historial_pedidos").css("display", "none");
																$("#historial_pedidos").addClass("inactive");
	
								                 	}
													
								   				}
								    });




}else{
	$("#iniciar_sesion").css("display", "inherit");
	$("#cerrar_sesion").css("display", "none");
	$("#editar_perfil").css("display", "none");
	$("#editar_direcciones").css("display", "none");
	$("#historial_pedidos").css("display", "none");
	$("#hacer_pedido").css("display", "none");
	
}


$("#btn-cancelar").click(function(){

		location.reload();

									/*$.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/traer_pedidos_x_cliente", 
								                data: { id_user: id_user},
								                dataType: "json", 
								                 success: function (data) {
								                 	if(data!="-1"){
								                 		for(i=0; i<data.length; i++){

								                 				html+='<hr>';
									                 			html+='<div class="content-historial-individual">';
									                 			html+='<div class="historial-ticket"><div class="title col-xs-6 col-lg-6 ">Ticket:</div><div class="dato col-xs-6 col-lg-6">'+data[i].ticket_aplicado+'</div></div>';
									                 			html+='<div class="historial-f_pedido"><div class="title col-xs-6 col-lg-6">Fecha de recogida:</div><div class="dato col-xs-6 col-lg-6">'+data[i].fecha_de_salida+'</div></div>';
									                 			html+='<div class="historial-f_salida"><div class="title col-xs-6 col-lg-6">Fecha de entrega:</div><div class="dato col-xs-6 col-lg-6">'+data[i].fecha_de_entrega+'</div></div>';
									                 			html+='<div class="historial-recurrencia"><div class="title col-xs-6 col-lg-6">Recurrencia:</div><div class="dato col-xs-6 col-lg-6">'+data[i].recurrencia+'</div></div>';
									                 			html+='<div class="historial-modo_de_pago"><div class="title col-xs-6 col-lg-6">Modo de pago:</div><div class="dato col-xs-6 col-lg-6">'+data[i].modo_de_pago+'</div></div>';
									                 			html+='<div class="historial-estado"><div class="title col-xs-6 col-lg-6">Etapa:</div><div class="dato col-xs-6 col-lg-6">'+data[i].edo_servicio+'</div></div>';
									                 			html+='<div class="historial-monto"><div class="title col-xs-6 col-lg-6">Total:</div><div class="dato col-xs-6 col-lg-6">$ '+data[i].monto_total+'</div></div>';
								                 			if(data[i].calificacion==null){
								                 				html+='<div class="historial-calificacion"><div class="title col-xs-6 col-lg-6">Calificación:</div><div class="dato col-xs-6 col-lg-6"><input id="input-id" name="input-name" type="number" class="rating input-id" min=1 max=10 step=2 data-size="lg" data-rtl="true"></div></div>';
								                 			}else{
								                 				html+='<div class="historial-calificacion"><div class="title col-xs-6 col-lg-6">Calificación:</div><div class="dato col-xs-6 col-lg-6">'+data[i].calificacion+'</div></div>';
								                 			}
																html+='</div>';
																$(".contenedor-slide").removeClass("active");
																$("#historial_1").addClass("active");
											                 	$(".content-historial").html(html);
											            }	
								                 	}else{
								                 		
								                 		html="<p class='center'>Aun no has hecho pedidos</p>";
								                 		$(".contenedor-slide").removeClass("active");
														$("#slide1").addClass("active");	
														$(".content-historial").html(html);
								                 	}
													
								   				}
								    });*/
});


	
	width=$(window).width();
		if(width<780){
			$(".table-hover").bootstrapTable('toggleView');
			responsive=1;
		}

	$(window).resize(function(){
		width=$(window).width();
		if(width<780){
			if(responsive==0){
				$(".table-hover").bootstrapTable('toggleView');
				responsive=1;	
			}
		}else{
			if(responsive==1){
				$(".table-hover").bootstrapTable('toggleView');
				responsive=0;	
			}
		}


	});	


	recibe="yo";
	ingresacodigo=0;

	contador_de_productos=0;

	var pedido = [[],[]];

	function datos_para_aviso(){
		return 0;
	}

	function validarcorreo(correo_aviso){
		  // Expresion regular para validar el correo
		    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
		    // Se utiliza la funcion test() nativa de JavaScript
			    if (regex.test($("#correo_aviso").val().trim())) {
			        return 1;
			    } else {
			        return 0;
			    }
			
	}
	$("input").focus(function(){
		$(this).removeClass("incorrecto");
	});
	

	$("#recibe").change(function(){
		recibe=$("#recibe option:selected").val();
		if(recibe=="otro"){
			$(".especifica, .div-recibe").show("fast");
		}else{
			$(".especifica, .div-recibe").hide("fast");
		}
	});
	$("#hora_recoleccion").change(function(){
		recibe=$("#hora_recoleccion option:selected").val();
		if(recibe=="otro"){
			$(".div-horas").show("fast");
		}else{
			$(".div-horas").hide("fast");
		}
	});






	$("#btn_convenio_true").click(function(){
		$("#convenio_true").prop('checked', true);
		$("#convenio_false").prop('checked', false);
		$("#btn_convenio_true").addClass("active");
		$("#btn_convenio_false").removeClass("active");
		$("#codigo-contenedor").addClass("active");
		$(".btn-convenio").attr("src", "images/bolita-2.png");
		$(this).attr("src", "images/bolita-1.png");
	});
	
	$("#btn_convenio_false").click(function(){
		$("#convenio_false").prop('checked', true);
		$("#convenio_true").prop('checked', false);
		$("#btn_convenio_false").addClass("active");
		$("#btn_convenio_true").removeClass("active");
		$("#codigo-contenedor").removeClass("active");
		$(".btn-convenio").attr("src", "images/bolita-2.png");
		$(this).attr("src", "images/bolita-1.png");
	});

	$("#tabuladorservicios").on("click", ".servicio", function(){
		$(".servicio").removeClass("active");
		$(this).addClass("active");
		servicio_id=$(this).attr("data-idservicio");
		servicio_nombre=$(this).text();
		$("#producto").val("");
		$("#cantidad").val("1");
		$("#precio").html("");
		$("#agregar_a_ticket").css("display", "inline");
		$(".title_productos_search").css("display", "inherit");
		$("#agregar_otro").css("display", "none");
		$("#terminar-edicion").css("display", "inline");
		$("#tituloproducto").html($(this).text());
		botones_prsonalizar=1;
		table_producto=1;

		$("#table-productos").show("fast");
		$("#botones-personalizacion").hide("fast");
		$(".botones-opcion-personalizacion").hide("fast");
		$("#table-personalizaciones").hide("fast");
		setTimeout(function(){
					 $("html, body").animate({ scrollTop: $(document).height() }, 1000);
				},300);
		});


	$("#slide7").click(function(){
		$(".container-results p").remove();
	}); 

	$("#slide7").on("mouseover", ".registro_de_producto",function(){
		$(".registro_de_producto").removeClass("hover");
		$(this).addClass("hover");
	}); 
	$("#slide7").on("mouseout", ".registro_de_producto",function(){
		$(".registro_de_producto").removeClass("hover");
		$(".registro_de_producto:first-child").addClass("hover");	
	});







	$("#btn_personalizacion_true").click(function(){
		$("#personalizacion_true").prop('checked', true);
		$("#personalizacion_false").prop('checked', false);
		$("#btn_personalizacion_true").addClass("active");
		$("#btn_personalizacion_false").removeClass("active");
		$("#table-personalizaciones").show("fast");
		$("#table-personalizaciones").addClass("active");
		$(".btn-personalizacion ").attr("src", "images/personalizacion-2.png");
		$(this).attr("src", "images/personalizacion-1.png");

	});
	
	$("#btn_personalizacion_false").click(function(){
		$("#personalizacion_false").prop('checked', true);
		$("#personalizacion_true").prop('checked', false);
		$("#btn_personalizacion_false").addClass("active");
		$("#btn_personalizacion_true").removeClass("active");
		$("#table-personalizaciones").removeClass("active");
		$(".btn-personalizacion").attr("src", "images/personalizacion-2.png");
		$(this).attr("src", "images/personalizacion-1.png");
	});


	$("#slide1").on('keyup','#codigo_postal',function(e){
			if (e.keyCode == '13') {
				$("#codigo_postal_btn").click();
			}
	});

	$("#convenio-codigo").keyup(function(e){
			if (e.keyCode == '13') {
				$("#enviar_datos_codigo").click();
			}
	});




	$("#agregar_a_ticket").click(function(){
		
		pedido["id"]=$(".producto").attr("data-id-producto");
		pedido["nombre"]=$(".producto").val();
		pedido["precio_real"]=parseFloat($(".producto").attr("data-precio-real")).toFixed(2);
		pedido["cantidad"]=$("#cantidad").val();
		pedido["pago_total"]=parseFloat($(".producto").attr("data-precio-producto")*pedido["cantidad"]).toFixed(2);
		pedido["personalizacion_1"]=$(".presentacion:checked").attr("data");
		pedido["personalizacion_2"]=$(".ganchos:checked").attr("data");
		pedido["personalizacion_3"]=$(".planchado:checked").attr("data");
		pedido["servicio"]=servicio_nombre;

		if(pedido["id"]!=""){
		

		html="<tr class='producto-en-pedido'>";
		html+="<td><span style='display:none' class='producto-en-pedido_id'>"+pedido["id"]+"</span><span class='producto-en-pedido_servicio texto-gris'>"+pedido["servicio"]+"</span></td>";
		html+="<td><span class='producto-en-pedido_nombre texto-gris'>"+pedido["nombre"]+"</span></td>";
		html+="<td class='middle'><span class='producto-en-pedido_cantidad texto-gris'>"+pedido["cantidad"]+"</span></td>";
		html+="<td class='middle'><span class='producto-en-pedido_pago_total texto-gris'>"+pedido["pago_total"]+"</span><span class='producto-en-pedido_precio_real texto-gris'></span></td>";
		html+="<p class='col-btn-delete'>Acciones: <span class='eliminar-producto'><i class='fa fa-trash' aria-hidden='true'></i></span></span></p>";
		html+="</tr>";
			html+="<tr class='producto-en-pedido_personalizaciones'>";
			html+="<td colspan='1'> Personalizaciones: </td><td colspan='4' class='middle personalizaciones'>";
		
		html2="<div class='producto-en-pedido'>"
		html2+="<p>Servicio: <span style='display:none' class='producto-en-pedido_id texto-gris'>"+pedido["id"]+"</span><span class='producto-en-pedido_servicio texto-gris'>"+pedido["servicio"]+"</span></p>";
		html2+="<p>Producto: <span class='producto-en-pedido_nombre texto-gris'>"+pedido["nombre"]+"</span></p>";
		html2+="<p>Cantidad: <span class='producto-en-pedido_cantidad texto-gris'>"+pedido["cantidad"]+"</span></p>";
		html2+="<p>Costo: <span class='producto-en-pedido_pago_total texto-gris'>"+pedido["pago_total"]+"</span><span class='producto-en-pedido_precio_real'></span></p>";
		html2+="<p>Personalizaciones: <span class='personalizaciones_ticket texto-gris'>";
		


			if(pedido["personalizacion_1"]==undefined && pedido["personalizacion_2"]==undefined && pedido["personalizacion_3"]==undefined){
			html+="Ninguna";
			html2+="Ninguna"
			}else{
				if(pedido["personalizacion_1"]){ html+=pedido["personalizacion_1"]+", ";  html2+=pedido["personalizacion_1"]+", "; }
				if(pedido["personalizacion_2"]){ html+=pedido["personalizacion_2"]+", "; html2+=pedido["personalizacion_2"]+", "; }
				if(pedido["personalizacion_3"]){ html+=pedido["personalizacion_3"]; html2+=pedido["personalizacion_3"]; }

			}
		html2+="</span></p>";
		html2+="<p class='col-btn-delete'>Acciones: <span class='eliminar-producto'><i class='fa fa-trash' aria-hidden='true'></i></span></span></p>";
		html2+="</div><hr>";
		
		html3="<div class='producto-en-pedido col-md-12'>"
		html3+="<p class='col-md-1 col-xs-2 col-lg-1 col-sm-1 column-num'><span class='producto-en-pedido_cantidad texto-gris'>"+pedido["cantidad"]+"</span></p>";
		html3+="<p class='col-md-3 col-xs-4 col-lg-3 col-sm-3 column-des'><span class='producto-en-pedido_nombre texto-gris'>"+pedido["nombre"]+"</span></p>";
		html3+="<p class='col-md-2 col-xs-0 col-lg-2 col-sm-2 column-ser'><span style='display:none' class='producto-en-pedido_id texto-gris'>"+pedido["id"]+"</span><span class='producto-en-pedido_servicio texto-gris'>"+pedido["servicio"]+"</span></p>";
		html3+="<p class='col-md-3 col-xs-0 col-lg-3 col-sm-3 column-par'><span class='personalizaciones_ticket texto-gris'>";
		


			if(pedido["personalizacion_1"]==undefined && pedido["personalizacion_2"]==undefined && pedido["personalizacion_3"]==undefined){
			html+="Ninguna";
			html3+="Ninguna"
			}else{
				if(pedido["personalizacion_1"]){ html+=pedido["personalizacion_1"]+", ";  html3+=pedido["personalizacion_1"]+", "; }
				if(pedido["personalizacion_2"]){ html+=pedido["personalizacion_2"]+", "; html3+=pedido["personalizacion_2"]+", "; }
				if(pedido["personalizacion_3"]){ html+=pedido["personalizacion_3"]; html3+=pedido["personalizacion_3"]; }

			}
		html3+="</span></p>";
		html3+="<p class='col-md-2 col-xs-4 col-lg-2 col-sm-2 column-sub'><span class='producto-en-pedido_pago_total texto-gris'>"+pedido["pago_total"]+"</span><span style='display:none' class='producto-en-pedido_precio_real'>"+pedido["precio_real"]+"</span></p>";
		html3+="<p class='col-btn-delete col-md-1 col-xs-2 col-lg-1 col-sm-1 column-bor'><span class='editar_producto'><i class='fa fa-pencil ' aria-hidden='true'></i></span><span class='eliminar-producto'> <i class='fa fa-trash' aria-hidden='true'></i></span></p>";
		html3+="</div>";
		


		$("#table-productos-ticket").append(html3);
		$(".editar_producto").css("display", "inline");

		total=$("#total_a_pagar").text();
		total=parseFloat(parseFloat(pedido["pago_total"])+parseFloat(total)).toFixed(2);
		$("#ant_operacion_total").html("<span class='textos'>Costo:</span> $"+total);
		descuento_del_total=total*.1;	
		$("#ant_operacion_descuento").html("<span class='textos'>Descuento:</span> -$"+parseFloat(descuento_del_total).toFixed(2));	
		total_final_descuento=total-descuento_del_total;
		$("#ant_operacion_final").html("<span  class='textos'>Final:</span> $"+parseFloat(total_final_descuento).toFixed(2));	
		
		$("#reg_operacion_final").html("<span  class='textos'>Final:</span> $"+parseFloat(total).toFixed(2));	

			$(".desc-convenio").text(descuento_inicial);
			total=$("#total_a_pagar").text();
			total=parseFloat(parseFloat(pedido["pago_total"])+parseFloat(total)).toFixed(2);
			$("#conv_operacion_total").html("<span class='textos'>Costo:</span> $"+total);
			descuento_del_total=total*(descuento_inicial/100);	
			$("#conv_operacion_descuento").html("<span class='textos'>Descuento:</span> -$"+parseFloat(descuento_del_total).toFixed(2));	
			total_final_descuento=total-descuento_del_total;
			$("#conv_operacion_final").html("<span  class='textos'>Final:</span> $"+parseFloat(total_final_descuento).toFixed(2));	
													

		$("#total_a_pagar").text(total);	
		$("#total_a_pagar2").text(total);	
		contador_de_productos++;
		/*$("#contenedor-ticket").css("display", "inherit");*/
		$("#table-productos-ticket").css("display", "inherit");
		$(".producto").attr("data-id-producto", "");
		$(".producto").val("");
		$(".producto").attr("data-precio-real", "");
		$(".producto").attr("data-precio-producto", "");
		$("#cantidad").val("1");
		$("#precio").val("0");
		$(".presentacion:checked").prop('checked', false);
		$(".ganchos:checked").prop('checked', false);
		$(".planchado:checked").prop('checked', false);
			/*$('html, body').animate({
                    scrollTop: $("#contenedor-ticket").offset().top
                }, 1000);*/	
        $(this).hide("fast");
        $("#table-productos").hide("fast");
		$("#botones-personalizacion").hide("fast");
		$(".botones-opcion-personalizacion").hide("fast");
		$(".botones-personalizacion").hide("fast");
		$("#table-personalizaciones").hide("fast");
		$(".title_productos_search").hide("fast");
		$("#agregar_otro").show("fast");
		$("#terminar-edicion").show("fast");
		$("#terminar-edicion").addClass("active");
		$("#cancelar_producto").hide("fast");
		$("#precio").text("0");
		}else{

			$(".producto").focus();
		
		}
	});
	
	$("#cancelar_producto").click(function(){
		$(this).hide("fast");
        $("#table-productos").hide("fast");
		$("#botones-personalizacion").hide("fast");
		$(".botones-opcion-personalizacion").hide("fast");
		$(".botones-personalizacion").hide("fast");
		$(".title_productos_search").hide("fast");
		
		$("#agregar_a_ticket").hide("fast");
		$("#table-personalizaciones").hide("fast");
		$("#terminar-edicion").show("fast");
		$("#agregar_otro").show("fast");
		$("#precio").text("");
		$(".producto").val("");
		$(".presentacion:checked").prop('checked', false);
		$(".ganchos:checked").prop('checked', false);
		$(".planchado:checked").prop('checked', false);
		$(".producto").attr("data-id-producto", "");
		$(".producto").val("");
		$(".producto").attr("data-precio-real", "");
		$(".producto").attr("data-precio-producto", "");
		$("#cantidad").val("1");
		$("#precio").val("0");
	
		
	});

		$(".servicio, .registro_de_producto, .btn-personalizacion").click(function(){
				setTimeout(function(){
					 $("html, body").animate({ scrollTop: $(document).height() }, 1000);
				},300);
		});


	$("#agregar_otro").click(function(){
		$(this).hide("fast");
        $("#table-productos").show("fast");
		$("#botones-personalizacion").show("fast");
		$(".botones-opcion-personalizacion").hide("fast");
		$(".botones-personalizacion").hide("fast");
		$(".title_productos_search").show("fast");
		
		$("#table-personalizaciones").hide("fast");
		$("#agregar_a_ticket").show("fast");
		$("#cancelar_producto").show("fast");
		$("#terminar-edicion").hide("fast");
		setTimeout(function(){
			 $("html, body").animate({ scrollTop: $(document).height() }, 1000);
		},300);

		
	});

	/*$("#slide7").on("click", ".eliminar-producto", function(){
		total=0;
		precio=parseFloat($(this).parent().prev().find(".producto-en-pedido_pago_total").text()).toFixed(2);
		$(this).parent().parent().next().hide("slow");
		$(this).parent().parent().hide("slow");
		$(this).parent().parent().next().addClass("remove");
		$(this).parent().parent().addClass("remove");
		total=parseFloat(parseFloat($("#total_a_pagar").text())-precio).toFixed(2);
		$("#total_a_pagar").text(total);
		setTimeout(function(){
			$(".remove").remove();
			contador=0;
			$(".producto-en-pedido_servicio").each(function(){
				contador++;
			});
			if(contador==0){
				$("#contenedor-ticket").css("display","none");
				$("#terminar-edicion").removeClass("active");
			}
		},400);
		

	});*/

		$("#slide7").on("click", ".eliminar-producto", function(){
		total=0;
		precio=parseFloat($(this).parent().prev().find(".producto-en-pedido_pago_total").text()).toFixed(2);
		
		$(this).parent().parent().hide("slow");
		$(this).parent().parent().addClass("remove");
		total=parseFloat(parseFloat($("#total_a_pagar").text())-precio).toFixed(2);
		$("#total_a_pagar").text(total);
		$("#total_a_pagar2").text(total);
		setTimeout(function(){
			$(".remove").remove();
			contador=0;
			$(".producto-en-pedido_servicio").each(function(){
				contador++;
			});
			if(contador==0){
				$("#contenedor-ticket").css("display","none");
				$("#terminar-edicion").removeClass("active");
			}
		},400);
		

	});


$("#btn-personalizacion-true").click(function(){
	$("#table-personalizaciones").show("fast");
});
$("#btn-personalizacion-flase").click(function(){
	$("#table-personalizaciones").hide("fast");
});
				

	$("#table-productos-ticket").on("click", ".editar_producto", function(){
		temp_cantidad=$(this).parent().parent().find(".producto-en-pedido_cantidad").html();
		temp_nombre=$(this).parent().parent().find(".producto-en-pedido_nombre").html();
		temp_servicios=$(this).parent().parent().find(".producto-en-pedido_servicio").html();
		temp_personalizaciones=$(this).parent().parent().find(".personalizaciones_ticket").html();
		temp_pago=$(this).parent().parent().find(".producto-en-pedido_pago_total").html();
		temp_servicios=temp_servicios.replace(/ /g,'');
		temp_producto_id=$(this).parent().parent().find(".producto-en-pedido_id").html();
		temp_precio_real=$(this).parent().parent().find(".producto-en-pedido_precio_real").html();
		precio_producto=temp_precio_real;
		$(this).parent().parent().find(".eliminar-producto").click();

		$(".editar_producto").css("display", "none");

		temp_precio=parseInt(temp_pago)/parseInt(temp_cantidad);
		$(".servicio."+temp_servicios).click();
		$("#table-productos #producto").val(temp_nombre);
		$(".producto").attr("data-precio-real", temp_precio);
		$(".producto").attr("data-precio-producto", temp_precio_real);
		$(".producto").attr("data-id-producto", temp_producto_id);
		$("#precio").text(pedido_pago_total);
							


		$("#table-productos #cantidad").val(temp_cantidad);
		$("#table-productos #precio").val(temp_precio);
		$(".botones-personalizacion, .botones-opcion-personalizacion").show("fast");
		$("#table-personalizaciones").show("fast");



		if(temp_personalizaciones.search("Ninguna")==-1){
			$(".btn-personalizacion-true").addClass("active");
			$(".btn-personalizacion-true").attr("src", "images/personalizacion-1.png");
			$(".btn-personalizacion-false").attr("src", "images/personalizacion-2.png");
			$(".btn-personalizacion-false").removeClass("active");
			$("#table-personalizaciones").show("fast");
			
			
			if(temp_personalizaciones.search("Doblado")!=-1){
				$("#presentacion1").prop("checked", true);
			}
			if(temp_personalizaciones.search("Colgado")!=-1){
				$("#presentacion2").prop("checked", true);
			}
			if(temp_personalizaciones.search("Un gancho")!=-1){
				$("#ganchos1").prop("checked", true);
			}
			if(temp_personalizaciones.search("Varios ganchos")!=-1){
				$("#ganchos2").prop("checked", true);
			}
			if(temp_personalizaciones.search("Con raya")!=-1){
				$("#planchado1").prop("checked", true);
			}
			if(temp_personalizaciones.search("Sin raya")!=-1){
				$("#planchado2").prop("checked", true);
			}


		}else{
			$("#table-personalizaciones").hide("fast");
			
		}


			



	});

$("#btn_personalizacion_false").click(function(){
	$("#table-personalizaciones").hide("fast");
	$("#presentacion1").prop("checked", false);
	$("#presentacion2").prop("checked", false);
	$("#ganchos1").prop("checked", false);
	$("#ganchos2").prop("checked", false);
	$("#planchado1").prop("checked", false);
	$("#planchado2").prop("checked", false);
})
$("#btn_personalizacion_true").click(function(){
	$("#table-personalizaciones").show("fast");
})


   $(".modos_de_pago .content button").click(function(){
   		$(".number-circle").parent().css("display", "none");
   		$("#title_total").css("display", "none");
		$("#btn-editar-pedido").css("display", "none");


   });

	$("#slide7").on("click", "#terminar-edicion.active", function(){
		$("#contenedor_1").hide("slow");
		/*$(".col-delete").remove();
		$(".col-btn-delete").remove();*/
		$("td.personalizaciones").attr("colspan", "3");
		$(".botones-finales").css("display", "inherit");
		$("#modo_de_pago").addClass("active");
		$("#title_modo_de_pago").addClass("active");
		$("#contenedor-ticket").css("display", "inherit");
		$(".back_direcciones, .back_direcciones-number, .back_direcciones-title").css("display", "none");
		$(".back_productos, .back_productos-number, .back_productos-title").css("display", "inherit");


	});

	$(".back_productos").click(function(){
		$(".back_direcciones, .back_direcciones-number, .back_direcciones-title").css("display", "inherit");
		$(".back_productos, .back_productos-number, .back_productos-title").css("display", "none");
		$("#btn-editar-pedido").click();
	});
	
	$(".back_direcciones").click(function(){
		$(".back_direcciones, .back_direcciones-number, .back_direcciones-title").css("display", "inherit");
		$(".back_productos, .back_productos-number, .back_productos-title").css("display", "none");
		$("#hacer_pedido").click();
		
		

	});
	
	$(".back_pagos").click(function(){
	$(".back_pagos, .back_pagos-number, .back_pagos-title").css("display", "none");
	$(".back_productos, .back_productos-number, .back_productos-title").css("display", "inherit");
		
$(".contenedor-slide").removeClass("active");	
	$("#slide7").addClass("active");		
});

	$("#btn-editar-pedido").click(function(){
		$("#contenedor-ticket").css("display", "none")
		$("#contenedor_1").show("slow");
		/*html="<p class='col-btn-delete col-md-1 col-xs-2 col-lg-1 col-sm-1'><span class='eliminar-producto'><i class='fa fa-trash' aria-hidden='true'></i></span></span></p>";
		$(".producto-en-pedido").each(function(){
			$(this).append(html);
		});
		html='<th class="middle col-delete">&nbsp</th>';
		$("#table-productos-ticket thead tr").append(html);
		$("td.personalizaciones").attr("colspan", "4");*/
		$(".botones-finales").css("display", "none");
		$(".back_direcciones, .back_direcciones-number, .back_direcciones-title").css("display", "inherit");
		$(".back_productos, .back_productos-number, .back_productos-title").css("display", "none");
	});

	$("#slide7").on("click", "#btn-confirmar-pedido.activo", function(){
		
			$(".heading-detalles-recoleccion").css("display", "inherit");
			$(".contenedor-detalles-pedido").css("display", "inherit");
			$(".btn-confirmar-detalles").css("display", "inherit");
			
			$(".heading-direcciones").css("display", "none");
			$("#lista-direcciones").parent().css("display", "none");
			$(".container-direccion").css("display", "none");
			$(".btn-confirmar-direccion-nueva-avanzar").css("display", "none");
			$(".btn-confirmar-direccion-existente-avanzar").css("display", "none");
			 
			$("#slide7").removeClass("active");		
			$("#slide8").addClass("active");	
			
			$(".tabs-pago").addClass("inactive");
			$(".paso_1-title, .paso_1-number").hide("fast");
			$(".back_pagos, .back_pagos-title, .back_pagos-number").show("fast");
			$("#agregar-registro").hide("fast");

	});

	$("#iniciar_sesion").click(function(){
		idslide=$(".contenedor-slide.active").attr("id");
		volverdeloggin=idslide.substring(5, idslide.length);
			$("#slide"+volverdeloggin).removeClass("active");		
			$("#slide9").addClass("active");	
			$("body").addClass("background");
			$("header").addClass("barrainvisible");
			$("#success_guardar").hide("fast");

		
	});	
	$("#editar_perfil").click(function(){
			$(".contenedor-slide").removeClass("active");		
			$("#slide15").addClass("active");	
			$("body").removeClass("background");
			$("header").removeClass("barrainvisible");
			$(".dropdown-menu li").css("display", "inherit");
			$("#editar_perfil").css("display", "none");
			$("#iniciar_sesion").css("display", "none");
			$(".dropdown-menu").removeClass("active");
			$(this).addClass("active");
			
	});	

	$("#lista_precios").click(function(){
		
			$(".contenedor-slide").removeClass("active");		
			$("#slideprecios").addClass("active");	
			$(".dropdown-menu li").removeClass("active");
			$(this).addClass("active");
	});	

	$("#hacer_pedido, #nuevo-pedido-home").click(function(){
			$(".contenedor-slide").removeClass("active");		
			$("#slide8").addClass("active");	
			$("body").removeClass("background");
			$("header").removeClass("barrainvisible");
			$(".dropdown-menu li").css("display", "inherit");
			$("#hacer_pedido").css("display", "none");
			$("#iniciar_sesion").css("display", "none");
			$(".contenedor-detalles-pedido").css("display", "inherit");
			$(".dropdown-menu li").removeClass("active");
			$("#hacer_pedido").addClass("active");
	});	

	$("#hacer_pedido, .hacer_pedido, #nuevo-pedido-home, #btn-inicio").click(function(){
			$(".container-direccion, .title-direccion, .btn-confirmar-direccion-nueva-avanzar, .btn-confirmar-direccion-existente-avanzar").css("display", "none");
			$("#header-direccion").css("display", "inherit");
	})
	$("#btn-inicio").click(function(){
		$(".contenedor-slide, #hacer_pedido").removeClass("active");		
		$("#slidehome").addClass("active");
	});


	$("#editar_direcciones").click(function(){
			$(".contenedor-slide").removeClass("active");
			$("#slide16").addClass("active");	
			$("body").removeClass("background");
			$("header").removeClass("barrainvisible");
			$(".dropdown-menu li").css("display", "inherit");
			$("#editar_direcciones").css("display", "none");
			$("#iniciar_sesion").css("display", "none");
			$(".dropdown-menu li").removeClass("active");
			$("#editar_direcciones").addClass("active");
			$(".container-direccion, .btn-confirmar-direccion-nueva, .title-direccion").css("display", "none");
															$("#header-direccion2").css("display", "inherit");
			$(".btn-confirmar-direccion-existente, .btn-confirmar-direccion-existente-avanzar, .btn-confirmar-direccion-nueva, .btn-confirmar-direccion-nueva").hide("fast");												
	});	


	$("#ya_tengo_cuenta").click(function(){
		$("#slide10").removeClass("active");		
		$("#slide9").addClass("active");
		$("body").addClass("background");
		$("header").addClass("barrainvisible");
	});

	$("#back_slide1").click(function(){
		$("#slide3").removeClass("active");
		$("#slide1").addClass("active");		
	});

	$("#back_slide3").click(function(){
		$("#slide5").removeClass("active");
		$("#slide3").addClass("active");		
	});

	$(".back-slide1").click(function(){
		$(".contenedor-slide").removeClass("active");
		$("#slide1").addClass("active");		
	});



	$(".tabs-pago").click(function(){
		if(!$(this).hasClass("inactive")){
				$(".tabs-pago").removeClass("active");		
			$(".modos_de_pago").removeClass("active");		
			$(this).addClass("active");
			pago_id=$(this).html();
			if(pago_id=="Anticipado"){
				$("#anticipado").addClass("active")	
				$("#btn-confirmar-pedido").removeClass("activo");
			}else{
				$("#regular").addClass("active");
				$("#btn-confirmar-pedido").addClass("activo");
				if(descuento_inicial==0){
					descuento_inicial=0;
					modo_de_pago="Contraentrega";
				}

			}
		}
		
		
	});

	$("#cantidad").change(function(){
		cantidad_producto=$(this).val();
		precio_total_piezas=parseFloat(precio_producto*cantidad_producto).toFixed(2);
		$("#precio").text(precio_total_piezas);
		
	});

	$("#cantidad").keyup(function(){
		cantidad_producto=$(this).val();
		precio_total_piezas=parseInt(precio_producto*cantidad_producto).toFixed(2);
		$("#precio").text(precio_total_piezas);
		
	});

	$("#cupon").keyup(function(e){
		if (e.keyCode == '13'){
			
			$("#btn-cupon").click();
		}
	});

	$("#cerrar_sesion").click(function(){
		$(".confirm_cerrar_sesion").addClass("active");
		
	});

	$("#aceptar_cerrar_sesión").click(function(){
		document.cookie = "7clean_id=null; expires=Thu, 01 Jan 1970 00:00:00 UTC";
		location.reload();
		$(".confirm_cerrar_sesion").removeClass("active");
	});
	$("#negar_cerrar_sesión").click(function(){
		
		$(".confirm_cerrar_sesion").removeClass("active");
	});

	$("#btn-crear-cuenta").click(function(){
		$(".contenedor-slide").removeClass("active");
		$("#slide10").addClass("active");
		$("body").removeClass("background");
		$("header").removeClass("barrainvisible");
	});

	$("#slide10").on("click", ".fa-eye", function(){
		$(this).addClass("fa-eye-slash");
		$(this).removeClass("fa-eye");
		$("#password_register").attr("type", "text");
	});


	$("#slide10").on("click", ".fa-eye-slash", function(){
		$(this).addClass("fa-eye");
		$(this).removeClass("fa-eye-slash");
		$("#password_register").attr("type", "password");
	});







			
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------conexiones---------------------------------------------------------------------------*/




/*------------------------------------validación de código postal----------------------------------*/



	$("#slide1").on('click','#codigo_postal_btn',function(){
	
		base_codigo_postal=$("#codigo_postal").val()
			if(base_codigo_postal!="" && base_codigo_postal.length>3 && base_codigo_postal.length<6){
				if(base_codigo_postal.length==4){
					base_codigo_postal="0"+base_codigo_postal;		
				}
				$("#slide1").removeClass("active");
				
				setTimeout(function(){

					 $.ajax({

		                type: "POST", 
		                url: url+"/index.php/servicios/comprobar_cp", 
		                data: { codigo_postal: base_codigo_postal},
		                 dataType: "json", 
		                 success: function (data) {
							if(data!="-1"){ 
								$("#slide2").removeClass("active");
								$("#slide6").addClass("active");
								
								
									ruta_id=data[0].rutas_id;
									final_colonia=data[0].colonia;
									dias="";
			                 		if(data[0].lunes=="1"){dias+="lunes, "; dia_1="lunes"; habil1=1;}
			                 		if(data[0].martes=="1"){dias+="martes, "; dia_1="martes"; habil1=2;}
			                 		if(data[0].miercoles=="1"){dias+="miércoles, "; dia_1="miércoles"; habil1=3;}
			                 		if(data[0].jueves=="1"){dias+="jueves "; dia_2="jueves"; habil2=4;}
			                 		if(data[0].viernes=="1"){dias+="viernes "; dia_2="viernes"; habil2=5;}
			                 		if(data[0].sabado=="1"){dias+="sábado "; dia_2="sábado"; habil2=6;}
 									
			                 		if(dia_1=="lunes" && dia_2=="jueves"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 1 || day == 4)] ;
									    }
									    });
									 	 } );
			                 		}
			                 		if(dia_1=="lunes" && dia_2=="miercoles"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 1 || day == 3)] ;
									    }
									    });
									 	 } );
			                 		}
			                 		if(dia_1=="martes" && dia_2=="jueves"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 2 || day == 4)] ;
									    }
									    });
									 	 } );
			                 		}
									if(dia_1=="martes" && dia_2=="viernes"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 2 || day == 5)] ;
									    }
									    });
									 	 } );
			                 		}
									if(dia_1=="miércoles" && dia_2=="viernes"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 3 || day == 5)] ;
									    }
									    });
									 	 } );
			                 		}
									if(dia_1=="miércoles" && dia_2=="sábado"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 3 || day == 6)] ;
									    }
									    });
									 	 } );
			                 		}

			                 		
			                 		
			                 		$("#dias_de_servicio").html(dia_1+" y "+dia_2);
 									

 									

			                 		$("#dia_1").val(dia_1);$("#span_dia1").text(dia_1);$("#dia_2").val(dia_2);$("#span_dia2").text(dia_2);

			                 		 $.ajax({
						                type: "POST", 
						                url: url+"/index.php/servicios/traer_ruta", 
						                data: { ruta_id: ruta_id},
						                dataType: "json", 
						                 success: function (data) {
						                 	final_ruta_nombre=data[0]["nombre"];
						                 	sucursal_id=data[0]["sucursal_id"];
						                 	
						                 	$.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/traer_sucursal", 
								                data: { sucursal_id: sucursal_id},
								                dataType: "json", 
								                 success: function (data) {
								                 	final_sucursal_direccion=data[0]["direccion"];
								                 	final_sucursal_telefono=data[0]["telefono"];
								                 	final_sucursal_nombre=data[0]["nombre"];
								                 	$("#nombrederuta").html(final_ruta_nombre);
													$("#nombredesucursal").html(final_sucursal_nombre);

								                }
								            });


						                 	$.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/traer_servicios", 
								                data: { sucursal_id: sucursal_id},
								                dataType: "json", 
								                 success: function (data) {
								                 	for(i=0; i<data.length; i++){
								                 		if(i==0){
								                 			'<button type="button" class="btn btn-default">Left</button><button type="button" class="btn btn-default">Right</button></div>'
								                 			html='<button type="button"  data-idservicio="'+data[i].id+'" class="btn btn-default servicio"><img src="images/'+data[i].nombre+'.png"> '+data[i].nombre+'</button>';
								                 			servicio_id=data[i].id;
								                 			servicio_nombre=data[i].nombre;

								                 		}else{
								                 			html+='<button type="button"  data-idservicio="'+data[i].id+'" class="btn btn-default servicio"><img src="images/'+data[i].nombre+'.png"> '+data[i].nombre+'</button>';
								                 		}	
								                 	}
								                 	$("#tabuladorservicios").html(html);
								                }
								            });
								          
						                 	if(id_user!="null"){
						                 		$.ajax({
									                type: "POST", 
									                url: url+"/index.php/servicios/traer_directorio", 
									                data: {id_user: id_user},
									                dataType: "json", 
									                 success: function (data) {
									                	if(data!=-1){
									                		direcciones="";
									                		for(i=0; i<data.length; i++){
									                		direcciones+="<p><button type='button'  data-id_direccion='"+data[i].id+"' data-calle_y_num='"+data[i].calle_numero+"' data-entre_calle_1='"+data[i].entre_calle_1+"' data-entre_calle_2='"+data[i].entre_calle_2+"' data-referencias='"+data[i].referencias+"' data-colonia='"+data[i].colonia+"' data-num-ext='"+data[i].numero_exterior+"' data-num-int='"+data[i].numero_interior+"' class='btn btn-default direccion_guardada'>"+data[i].nombre_en_agenda+"</button> <i class='fa fa-pencil editar_direccion_button' aria-hidden='true'></i></p><br>";
									                		}
									                		$("#lista-direcciones").html(direcciones);
									                		$("#lista-direcciones2").html(direcciones);
									                	}
												   }
									            });
									           
						                 	}

								           $.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/traer_direccion", 
								                data: { codigo_postal: parseInt(base_codigo_postal)},
								                dataType: "json", 
								                 success: function (data) {
								                 	$("#delegacion").val(data[0]["municipio"]);
								                 	$("#estado").val(data[0]["estado"]);
								                 	if(data[0]["codigo_postal"].length==4){
								                 		data[0]["codigo_postal"]="0"+data[0]["codigo_postal"];
								                 	}
								                 	$("#codigopostal").val(data[0]["codigo_postal"]);
								                 	$("#colonia").val(data[0]["colonia"]);

								                }
								            });
								           
					                 		

						                }
						            });
									
					            	
								}else{		
								$("#slide2").removeClass("active");
								$("#slide3").addClass("active");
							}
							
		                }

		            });

					


					
					
				},1000);
			}else{
				$("#codigo_postal").addClass("incorrecto");
				$("#codigo_postal").val("");
				$("#codigo_postal").attr("placeholder", "Ingresa un código postal válido");
			}	
	});

/*---------------------------------------------------------------------------------------llenar direccion--------------------------------------------------------------------------------------------*/



	$("#slide8, #slide16").on("click", ".direccion_guardada", function(){
		if(!$(this).hasClass("active")){
			dir_id_direccion=$(this).attr("data-id_direccion");
			dir_calle_numero=$(this).attr("data-calle_y_num");
			dir_entre_calle_1=$(this).attr("data-entre_calle_1");
			dir_entre_calle_2=$(this).attr("data-entre_calle_2");
			dir_colonia=$(this).attr("data-colonia");
			dir_estado=$(this).attr("data-estado");
			dir_delegacion=$(this).attr("data-delegacion");
			dir_codigo_postal=$(this).attr("data-codigo_postal");
			dir_referencias=$(this).attr("data-referencias");
			dir_nombre_en_agenda=$(this).attr("data-nombre_en_agenda");
			dir_numero_exterior=$(this).attr("data-num-ext");
			dir_numero_interior=$(this).attr("data-num-int");
			dir_nombre=$(this).html();
			$(".editar_direccion_button").removeClass("active");
			$(".direccion_guardada, .direccion_nueva").removeClass("active");
			$(this).addClass("active");
			$(".calle").val(dir_calle_numero);
			$(".colonia").val(dir_colonia);
			$(".alter_calle_1").val(dir_entre_calle_1);
			$(".alter_calle_2").val(dir_entre_calle_2);
			$(".referencias").val(dir_referencias);	
			$(".delegacion").val(dir_delegacion);	
			$(".estado").val(dir_estado);	
			$(".reg_estado").val(dir_estado);	
			$(".delegacion").val(dir_delegacion);	
			$("#success_guardar_dir").hide("fast");
			$(".reg_calle").val(dir_calle_numero);
			$(".reg_colonia").val(dir_colonia);
			
			$.ajax({
					 type: "POST", 
					 url: url+"/index.php/servicios/traer_estados", 
					 dataType: "json", 
					 success: function (data) {
					 		html='<option value="0">Estado</option>';
						for(i=0; i<data.length; i++){
							if(data[i]["estado"]=="Distrito Federal"){
								html+='<option value="'+data[i]["estado"]+'">Ciudad de México</option>';			
							}else{
								html+='<option value="'+data[i]["estado"]+'">'+data[i]["estado"]+'</option>';	
							}
							}
								
							
						$(".reg_estado").html(html);
					
						setTimeout(function(){
							$(".reg_estado option").each(function(){
								valor=$(this).val();	

								if(valor==dir_estado){
									
									$(this).prop("selected", true);
								}else{
									$(this).prop("selected", false);
								}		
							});
						},10);

					}

			});



				
			$.ajax({
					type: "POST", 
					 url: url+"/index.php/servicios/traer_municipios", 
					 dataType: "json", 
					 data: { estado:dir_estado },
					 success: function (data) {
					 	
					 		html='<option value="0">Delegación/Municipio</option>';
						for(i=0; i<data.length; i++){
							html+='<option value="'+data[i]["municipio"]+'">'+data[i]["municipio"]+'</option>';						
						}
						$(".reg_municipio").html(html);

						setTimeout(function(){
							$(".reg_municipio option").each(function(){
								valor=$(this).val();		
								if(valor==dir_delegacion){
									$(this).prop("selected", true);
								}else{
									$(this).prop("selected", false);
								}		
							});
						},50);
						
					}
			});



			$(".codigopostal").val(dir_codigo_postal);	
			$(".num_exterior").val(dir_numero_exterior);	
			$(".num_interior").val(dir_numero_interior);	
			$(".nombre-de-direccion").html(dir_nombre);
			$(".new_dir_nombre").val(dir_nombre);
			$(".btn-confirmar-direccion-existente-avanzar").show("fast");
			$(".btn-confirmar-direccion-nueva-avanzar").hide("fast");
			$(".btn-confirmar-direccion-existente").show("fast");
			$(".btn-confirmar-direccion-nueva").hide("fast");
			$(".new_dir_nombre-container").show("fast");
			base_codigo_postal=dir_codigo_postal;
			/*$(".new_dir_nombre-container").show("fast");
			$("#new_dir_nombre").val(dir_nombre);*/
			$(".container-direccion").hide("fast");	
			
		}

	});



	$("#slide8, #slide16").on("click", ".editar_direccion_button", function(){
		if(!$(this).hasClass("active")){
			dir_id_direccion=$(this).prev().attr("data-id_direccion");
			dir_calle_numero=$(this).prev().attr("data-calle_y_num");
			dir_entre_calle_1=$(this).prev().attr("data-entre_calle_1");
			dir_entre_calle_2=$(this).prev().attr("data-entre_calle_2");
			dir_colonia=$(this).prev().attr("data-colonia");
			dir_estado=$(this).prev().attr("data-estado");
			dir_delegacion=$(this).prev().attr("data-delegacion");
			dir_codigo_postal=$(this).prev().attr("data-codigo_postal");
			dir_referencias=$(this).prev().attr("data-referencias");
			dir_nombre_en_agenda=$(this).prev().attr("data-nombre_en_agenda");
			dir_numero_exterior=$(this).prev().attr("data-num-ext");
			dir_numero_interior=$(this).prev().attr("data-num-int");
			dir_nombre=$(this).prev().html();
			$(".direccion_guardada, .direccion_nueva").removeClass("active");
			$(".editar_direccion_button").removeClass("active");
			$(this).addClass("active");
			$(this).prev().addClass("active");
			$(".calle").val(dir_calle_numero);
			$(".colonia").val(dir_colonia);
			$(".alter_calle_1").val(dir_entre_calle_1);
			$(".alter_calle_2").val(dir_entre_calle_2);
			$(".referencias").val(dir_referencias);	
			$(".delegacion").val(dir_delegacion);	
			$(".estado").val(dir_estado);	
			$("#success_guardar_dir").hide("fast");
			$(".reg_calle").val(dir_calle_numero);
			$(".reg_colonia").val(dir_colonia);
			
			$.ajax({
					 type: "POST", 
					 url: url+"/index.php/servicios/traer_estados", 
					 dataType: "json", 
					 success: function (data) {
					 		html='<option value="0">Estado</option>';
						for(i=0; i<data.length; i++){
							if(data[i]["estado"]=="Distrito Federal"){
								html+='<option value="'+data[i]["estado"]+'">Ciudad de México</option>';			
							}else{
								html+='<option value="'+data[i]["estado"]+'">'+data[i]["estado"]+'</option>';	
							}
						}
								
							
						$(".reg_estado").html(html);
					
						setTimeout(function(){
							$(".reg_estado option").each(function(){
								valor=$(this).val();	

								if(valor==dir_estado){
									
									$(this).prop("selected", true);
								}else{
									$(this).prop("selected", false);
								}		
							});

			$(".reg_estado").next().find(".select2-selection__rendered").html(dir_estado);	
						},10);

					}

			});



				$.ajax({
					type: "POST", 
					 url: url+"/index.php/servicios/traer_municipios", 
					 dataType: "json", 
					 data: { estado:dir_estado },
					 success: function (data) {
					 	
					 		html='<option value="0">Delegación/Municipio</option>';
						for(i=0; i<data.length; i++){
							html+='<option value="'+data[i]["municipio"]+'">'+data[i]["municipio"]+'</option>';						
						}
						$(".reg_municipio").html(html);

						setTimeout(function(){
							$(".reg_municipio option").each(function(){
								valor=$(this).val();		
								if(valor==dir_delegacion){
										$(this).prop("selected", true);
								}else{
									$(this).prop("selected", false);
								}		
							});

			$(".reg_municipio").next().find(".select2-selection__rendered").html(dir_delegacion);	

						},50);
						
					}
			});


			$(".codigopostal").val(dir_codigo_postal);	
			$(".num_exterior").val(dir_numero_exterior);	
			$(".num_interior").val(dir_numero_interior);	
			$(".nombre-de-direccion").html(dir_nombre);
			$(".new_dir_nombre").val(dir_nombre);
			$(".container-direccion").show("fast");	
			$(".btn-confirmar-direccion-existente-avanzar").show("fast");
			$(".btn-confirmar-direccion-nueva-avanzar").hide("fast");
			$(".btn-confirmar-direccion-existente").show("fast");
			$(".btn-confirmar-direccion-nueva").hide("fast");
			$(".new_dir_nombre-container").show("fast");
			base_codigo_postal=dir_codigo_postal;
			/*$(".new_dir_nombre-container").show("fast");
			$("#new_dir_nombre").val(dir_nombre);*/

		}

	});





	$(".btn-confirmar-direccion-nueva").click(function(){
			dir_calle_numero=$(".calle").val();
			dir_entre_calle_1=$("#slide16 .alter_calle_1").val();
			dir_entre_calle_2=$("#slide16 .alter_calle_2").val();
			dir_colonia=$(".reg_colonia").val();
			dir_estado=$("#slide16 .reg_estado").next().find(".select2-selection__rendered").text();
			dir_delegacion=$("#slide16 .reg_municipio").next().find(".select2-selection__rendered").text();
			dir_codigo_postal=$(".codigopostal").val();
			dir_referencias=$("#slide16 .referencias").val();
			dir_nombre_en_agenda=$("#slide16 .new_dir_nombre").val();
			dir_numero_exterior=$(".num_exterior").val();
			dir_numero_interior=$(".num_interior").val();
			base_codigo_postal=dir_codigo_postal;
			


				calle=dir_calle_numero;
					colonia=dir_colonia;
					base_codigo_postal=dir_codigo_postal;
					delegacion=dir_delegacion;
					estado=dir_estado;
					alter_calle_1=dir_entre_calle_1;
					alter_calle_2=dir_entre_calle_2;
					referencias=dir_referencias;

				
					if(dir_estado!="0" && dir_delegacion!="0" && dir_codigo_postal!="" && dir_colonia!="" && dir_nombre_en_agenda!="" && dir_numero_exterior!="" && dir_entre_calle_1!="" && dir_entre_calle_2!="" ){
						$.ajax({
								type: "POST", 
									url: url+"/index.php/servicios/guardar_nueva_direccion", 
									data: { nombre_en_agenda: dir_nombre_en_agenda, calle_numero: dir_calle_numero, codigo_postal: dir_codigo_postal, delegacion: dir_delegacion, colonia: dir_colonia, alter_calle_1: dir_entre_calle_1, alter_calle_2: dir_entre_calle_2,  referencias: dir_referencias, estado: dir_estado, cliente_id: id_user, numero_exterior: dir_numero_exterior, numero_interior: dir_numero_interior },
									dataType: "json", 
									success: function (data) {
											$.ajax({
									                type: "POST", 
									                url: url+"/index.php/servicios/traer_directorio", 
									                data: {id_user: id_user},
									                dataType: "json", 
									                 success: function (data) {
									                	if(data!=-1){
									                		direcciones="";
									                		for(i=0; i<data.length; i++){
									                		direcciones+="<p><button type='button'  data-id_direccion='"+data[i].id+"' data-calle_y_num='"+data[i].calle_numero+"' data-entre_calle_1='"+data[i].entre_calle_1+"' data-entre_calle_2='"+data[i].entre_calle_2+"' data-referencias='"+data[i].referencias+"' data-colonia='"+data[i].colonia+"' data-estado='"+data[i].estado+"' data-delegacion='"+data[i].delegacion+"' data-codigo_postal='"+data[i].codigo_postal+"'  data-num-ext='"+data[i].numero_exterior+"' data-num-int='"+data[i].numero_interior+"' class='btn btn-default direccion_guardada'>"+data[i].nombre_en_agenda+"</button><i class='fa fa-pencil editar_direccion_button' aria-hidden='true'></i></p><br>";
									                		}
									                		$("#lista-direcciones").html(direcciones);
									                		$("#lista-direcciones2").html(direcciones);
									                		$("#editar_perfil").css("display", "inherit");
															$("#editar_direcciones").css("display", "inherit");
															$(".container-direccion, .btn-confirmar-direccion-nueva, .title-direccion").css("display", "none");
															$("#header-direccion2").css("display", "inherit");
									                	}
												   }
									            });	
										
									}
						});
					}else{
					/*	alert("Llena todos los campos"+dir_estado+" - "+dir_delegacion+" - "+dir_codigo_postal+" - "+dir_colonia+" - "+dir_nombre_en_agenda+" - "+dir_numero_exterior+" - "+dir_entre_calle_1+" - "+dir_entre_calle_2+" - "+dir_referencias);
					*/}
				
				


	});

	
	$(".btn-confirmar-direccion-existente").click(function(){
				dir_calle_numero=$(".calle").val();
				dir_entre_calle_1=$("#slide16 .alter_calle_1").val();
				dir_entre_calle_2=$("#slide16 .alter_calle_2").val();
				dir_colonia=$(".reg_colonia").val();
				dir_estado=$("#slide16 .reg_estado").next().find(".select2-selection__rendered").text();
				dir_delegacion=$("#slide16 .reg_municipio").next().find(".select2-selection__rendered").text();
				dir_codigo_postal=$(".codigopostal").val();
				dir_referencias=$("#slide16 .referencias").val();
				dir_nombre_en_agenda=$(".new_dir_nombre").val();
				dir_numero_exterior=$(".num_exterior").val();
				dir_numero_interior=$(".num_interior").val();

					calle=dir_calle_numero;
					colonia=dir_colonia;
					base_codigo_postal=dir_codigo_postal;
					delegacion=dir_delegacion;
					estado=dir_estado;
					alter_calle_1=dir_entre_calle_1;
					alter_calle_2=dir_entre_calle_2;
					referencias=dir_referencias;

					
	
					if(dir_estado!="0" && dir_delegacion!="0" && dir_codigo_postal!="" && dir_colonia!="" && dir_nombre_en_agenda!="" && dir_numero_exterior!="" && dir_entre_calle_1!="" && dir_entre_calle_2!="" ){
					
						$.ajax({
								type: "POST", 
								url: url+"/index.php/servicios/editar_direccion", 
								data: { id: dir_id_direccion,   nombre_en_agenda: dir_nombre_en_agenda, calle_numero: dir_calle_numero, codigo_postal: dir_codigo_postal, delegacion: dir_delegacion, colonia: dir_colonia, alter_calle_1: dir_entre_calle_1, alter_calle_2: dir_entre_calle_2,  referencias: dir_referencias, estado: dir_estado, cliente_id: id_user, numero_exterior: dir_numero_exterior, numero_interior: dir_numero_interior },
								dataType: "json", 
								success: function (data) {
									 	$(".cambios-guardados").addClass("active");
										 setTimeout(function(){
										 	$(".cambios-guardados").addClass("animation");
										 },2000);
										 setTimeout(function(){
										 	$(".cambios-guardados").removeClass("animation");
										 	$(".cambios-guardados").removeClass("active");
										 },3000);
											$.ajax({
									                type: "POST", 
									                url: url+"/index.php/servicios/traer_directorio", 
									                data: {id_user: id_user},
									                dataType: "json", 
									                 success: function (data) {
									                	if(data!=-1){
									                		direcciones="";
									                		for(i=0; i<data.length; i++){
									                		direcciones+="<p><button type='button'  data-id_direccion='"+data[i].id+"' data-calle_y_num='"+data[i].calle_numero+"' data-entre_calle_1='"+data[i].entre_calle_1+"' data-entre_calle_2='"+data[i].entre_calle_2+"' data-referencias='"+data[i].referencias+"' data-colonia='"+data[i].colonia+"' data-estado='"+data[i].estado+"' data-delegacion='"+data[i].delegacion+"' data-codigo_postal='"+data[i].codigo_postal+"'  data-num-ext='"+data[i].numero_exterior+"' data-num-int='"+data[i].numero_interior+"' class='btn btn-default direccion_guardada'>"+data[i].nombre_en_agenda+"</button><i class='fa fa-pencil editar_direccion_button' aria-hidden='true'></i></p><br>";
									                		}
									                		$("#lista-direcciones").html(direcciones);
									                		$("#lista-direcciones2").html(direcciones);
									                		$(".btn-confirmar-direccion-nueva-avanzar, .container-direccion").hide("fast");
															$(".btn-confirmar-direccion-nueva, .btn-confirmar-direccion-existente, .btn-confirmar-direccion-existente-avanzar").hide("fast");
			
									                	}
												   }
									            });	
								}
						});

					
					}else{
						alert("Llena todos los campos"+dir_estado+" - "+dir_delegacion+" - "+dir_codigo_postal+" - "+dir_colonia+" - "+dir_nombre_en_agenda+" - "+dir_numero_exterior+" - "+dir_entre_calle_1+" - "+dir_entre_calle_2+" - "+dir_referencias);
					}



		});

	$('.back[data-destino="slidehome"]').click(function(){
		$(".dropdown-menu li").removeClass("active");
	})

	$(".btn-confirmar-direccion-nueva-avanzar").click(function(){
			dir_calle_numero=$(".calle").val();
			dir_entre_calle_1=$(".alter_calle_1").val();
			dir_entre_calle_2=$(".alter_calle_2").val();
			dir_colonia=$(".reg_colonia").val();
			dir_estado=$("#slide8 .reg_estado").next().find(".select2-selection__rendered").text();
			dir_delegacion=$("#slide8  .reg_municipio").next().find(".select2-selection__rendered").text();
			dir_codigo_postal=$(".codigopostal").val();
			dir_referencias=$(".referencias").val();
			dir_nombre_en_agenda=$(".new_dir_nombre").val();
			dir_numero_exterior=$(".num_exterior").val();
			dir_numero_interior=$(".num_interior").val();
			base_codigo_postal=dir_codigo_postal;
			$(".back_direcciones,  .back_direcciones-title, .back_direcciones-number").show("fast");
				calle=dir_calle_numero;
					colonia=dir_colonia;
					base_codigo_postal=dir_codigo_postal;
					delegacion=dir_delegacion;
					estado=dir_estado;
					alter_calle_1=dir_entre_calle_1;
					alter_calle_2=dir_entre_calle_2;
					referencias=dir_referencias;

			

			if(dir_estado!="0" && dir_delegacion!="0" && dir_codigo_postal!="" && dir_colonia!="" && dir_nombre_en_agenda!="" && dir_numero_exterior!="" && dir_entre_calle_1!="" && dir_entre_calle_2!="" ){
				$("#slide8").removeClass("active");
				$("#slide2").addClass("active");

				$.ajax({
						type: "POST", 
							url: url+"/index.php/servicios/guardar_nueva_direccion", 
							data: { nombre_en_agenda: dir_nombre_en_agenda, calle_numero: dir_calle_numero, codigo_postal: dir_codigo_postal, delegacion: dir_delegacion, colonia: dir_colonia, alter_calle_1: dir_entre_calle_1, alter_calle_2: dir_entre_calle_2,  referencias: dir_referencias, estado: dir_estado, cliente_id: id_user, numero_exterior: dir_numero_exterior, numero_interior: dir_numero_interior },
							dataType: "json", 
							success: function (data) {
								$("#slide8").removeClass("active");
								$.ajax({
									                type: "POST", 
									                url: url+"/index.php/servicios/traer_directorio", 
									                data: {id_user: id_user},
									                dataType: "json", 
									                 success: function (data) {
									                	if(data!=-1){
									                		direcciones="";
									                		for(i=0; i<data.length; i++){
									                		direcciones+="<p><button type='button'  data-id_direccion='"+data[i].id+"' data-calle_y_num='"+data[i].calle_numero+"' data-entre_calle_1='"+data[i].entre_calle_1+"' data-entre_calle_2='"+data[i].entre_calle_2+"' data-referencias='"+data[i].referencias+"' data-colonia='"+data[i].colonia+"' data-estado='"+data[i].estado+"' data-delegacion='"+data[i].delegacion+"' data-codigo_postal='"+data[i].codigo_postal+"'  data-num-ext='"+data[i].numero_exterior+"' data-num-int='"+data[i].numero_interior+"' class='btn btn-default direccion_guardada'>"+data[i].nombre_en_agenda+"</button><i class='fa fa-pencil editar_direccion_button' aria-hidden='true'></i></p><br>";
									                		}
									                		$("#lista-direcciones").html(direcciones);
									                		$("#lista-direcciones2").html(direcciones);
									                			$(".btn-confirmar-direccion-nueva-avanzar").hide("fast");
															$(".btn-confirmar-direccion-nueva").hide("fast");
			
									                	}
												   }
									            });	
							}
				});
				

				 $.ajax({

		                type: "POST", 
		                url: url+"/index.php/servicios/comprobar_cp", 
		                data: { codigo_postal: base_codigo_postal},
		                 dataType: "json", 
		                 success: function (data) {
							if(data!="-1"){ 
								$("#slide2").removeClass("active");
								$("#slide-detalles-pedido").addClass("active");
								
								
									ruta_id=data[0].rutas_id;
									final_colonia=data[0].colonia;
									dias="";
			                 		if(data[0].lunes=="1"){dias+="lunes, "; dia_1="lunes"; habil1=1;}
			                 		if(data[0].martes=="1"){dias+="martes, "; dia_1="martes"; habil1=2;}
			                 		if(data[0].miercoles=="1"){dias+="miércoles, "; dia_1="miércoles"; habil1=3;}
			                 		if(data[0].jueves=="1"){dias+="jueves "; dia_2="jueves"; habil2=4;}
			                 		if(data[0].viernes=="1"){dias+="viernes "; dia_2="viernes"; habil2=5;}
			                 		if(data[0].sabado=="1"){dias+="sábado "; dia_2="sábado"; habil2=6;}
 									
			                 		if(dia_1=="lunes" && dia_2=="jueves"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 1 || day == 4)] ;
									    }
									    });
									 	 } );
			                 		}
									if(dia_1=="lunes" && dia_2=="miercoles"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 1 || day == 3)] ;
									    }
									    });
									 	 } );
			                 		}
			                 		if(dia_1=="martes" && dia_2=="jueves"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 2 || day == 4)] ;
									    }
									    });
									 	 } );
			                 		}
									if(dia_1=="martes" && dia_2=="viernes"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 2 || day == 5)] ;
									    }
									    });
									 	 } );
			                 		}
									if(dia_1=="miércoles" && dia_2=="viernes"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 3 || day == 5)] ;
									    }
									    });
									 	 } );
			                 		}
									if(dia_1=="miércoles" && dia_2=="sábado"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 3 || day == 6)] ;
									    }
									    });
									 	 } );
			                 		}

			                 		
			                 		$("#dias_de_servicio").html(dia_1+" y "+dia_2);
 									

			                 		$("#dia_1").val(dia_1);$("#span_dia1").text(dia_1);$("#dia_2").val(dia_2);$("#span_dia2").text(dia_2);

			                 		 $.ajax({
						                type: "POST", 
						                url: url+"/index.php/servicios/traer_ruta", 
						                data: { ruta_id: ruta_id},
						                dataType: "json", 
						                 success: function (data) {
						                 	final_ruta_nombre=data[0]["nombre"];
						                 	sucursal_id=data[0]["sucursal_id"];
						                 	
						                 	$.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/traer_sucursal", 
								                data: { sucursal_id: sucursal_id},
								                dataType: "json", 
								                 success: function (data) {
								                 	final_sucursal_direccion=data[0]["direccion"];
								                 	final_sucursal_telefono=data[0]["telefono"];
								                 	final_sucursal_nombre=data[0]["nombre"];
								                 	$("#nombrederuta").html(final_ruta_nombre);
													$("#nombredesucursal").html(final_sucursal_nombre);

								                }
								            });


						                 	$.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/traer_servicios", 
								                data: { sucursal_id: sucursal_id},
								                dataType: "json", 
								                 success: function (data) {
								                 	for(i=0; i<data.length; i++){
								                 		if(i==0){
								                 			'<button type="button" class="btn btn-default">Left</button><button type="button" class="btn btn-default">Right</button></div>'
								                 			html='<button type="button"  data-idservicio="'+data[i].id+'" class="btn btn-default servicio "><img src="images/'+data[i].nombre+'.png"> '+data[i].nombre+'</button>';
								                 			servicio_id=data[i].id;
								                 			servicio_nombre=data[i].nombre;

								                 		}else{
								                 			html+='<button type="button"  data-idservicio="'+data[i].id+'" class="btn btn-default servicio"><img src="images/'+data[i].nombre+'.png"> '+data[i].nombre+'</button>';
								                 		}	
								                 	}
								                 	$("#tabuladorservicios").html(html);
								                }
								            });
								          
						                 	
								           $.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/traer_direccion", 
								                data: { codigo_postal: parseInt(base_codigo_postal)},
								                dataType: "json", 
								                 success: function (data) {
								                 	$("#delegacion").val(data[0]["municipio"]);
								                 	$("#estado").val(data[0]["estado"]);
								                 	if(data[0]["codigo_postal"].length==4){
								                 		data[0]["codigo_postal"]="0"+data[0]["codigo_postal"];
								                 	}
								                 	$("#codigopostal").val(data[0]["codigo_postal"]);
								                 	$("#colonia").val(data[0]["colonia"]);

								                }
								            });
								           
					                 		
					                 		if(codigoconvenio!=""){

								           		$.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/comprobar_codigo_convenio", 
								                data: { codigo_convenio: codigoconvenio},
								                dataType: "json", 
								                success: function(data){
								                if(data!="-1"){
								                	$(".row-convenio").show("fast");
													descuento_inicial=data[0]["descuento"];
													convenio=data[0]["nombre"];
													$("#descuento_inicial").html(descuento_inicial+" %");
														$("#title_modo_de_pago").html("Para respetar tu descuento  del "+descuento_inicial+"% por convenio tu pago debe ser anticipado");
														$("#regular").css("display", "none");
														$("#anticipado-cupon").css("display", "none");
													modo_de_pago="Anticipado";
													$("#anticipado").css("display", "inherit");
													$("#modo_pago_convenio").css("display", "inherit");
													$("#anticipado-cupon").css("display", "none!important");
													$("#regular").css("display", "none!important");
													conv=1;
												
												}else{
													$(".row-convenio").hide("fast");
													$("#convenio-codigo").addClass("incorrecto");
													$("#convenio-codigo").val("");
													$("#descuento_inicial").html(" Tu código no coincide con ninguno en nuestros registros");
													$("#convenio-codigo").attr("placeholder", "Ingresa un código válido");
												}
								                }
								            });	

								           }

						                }
						            });
									
					            	
								}else{		
								$("#slide2").removeClass("active");
								$("#slide3").addClass("active");
							}
							
		                }

		            });

		}else{
						alert("Llena todos los campos");
					}

	});

	$(".btn-confirmar-direccion-existente-avanzar").click(function(){
				$(".back_direcciones,  .back_direcciones-title, .back_direcciones-number").show("fast");
				dir_calle_numero=$(".calle").val();
				dir_entre_calle_1=$(".alter_calle_1").val();
				dir_entre_calle_2=$(".alter_calle_2").val();
				dir_colonia=$(".reg_colonia").val();
				dir_estado=$("#slide16 .reg_estado").next().find(".select2-selection__rendered").text();
				dir_delegacion=$("#slide16 .reg_municipio").next().find(".select2-selection__rendered").text();
				dir_codigo_postal=$(".codigopostal").val();
				dir_referencias=$(".referencias").val();
				dir_nombre_en_agenda=$(".new_dir_nombre").val();
				dir_numero_exterior=$(".num_exterior").val();
				dir_numero_interior=$(".num_interior").val();

					calle=dir_calle_numero;
					colonia=dir_colonia;
					base_codigo_postal=dir_codigo_postal;
					delegacion=dir_delegacion;
					estado=dir_estado;
					alter_calle_1=dir_entre_calle_1;
					alter_calle_2=dir_entre_calle_2;
					referencias=dir_referencias;

				if(dir_estado!="0" && dir_delegacion!="0" && dir_codigo_postal!="" && dir_colonia!="" && dir_nombre_en_agenda!="" && dir_numero_exterior!="" && dir_entre_calle_1!="" && dir_entre_calle_2!=""  ){
				
				$("#slide8").removeClass("active");
				$(".contenedor-detalles-pedido").css("display", "inherit");
				$("#slide2").addClass("active");


					$.ajax({
							type: "POST", 
							url: url+"/index.php/servicios/editar_direccion", 
							data: { id: dir_id_direccion,   nombre_en_agenda: dir_nombre_en_agenda, calle_numero: dir_calle_numero, codigo_postal: dir_codigo_postal, delegacion: dir_delegacion, colonia: dir_colonia, alter_calle_1: dir_entre_calle_1, alter_calle_2: dir_entre_calle_2,  referencias: dir_referencias, estado: dir_estado, cliente_id: id_user, numero_exterior: dir_numero_exterior, numero_interior: dir_numero_interior },
							dataType: "json", 
							success: function (data) {
								$("#slide8").removeClass("active");
								$.ajax({
									                type: "POST", 
									                url: url+"/index.php/servicios/traer_directorio", 
									                data: {id_user: id_user},
									                dataType: "json", 
									                 success: function (data) {
									                	if(data!=-1){
									                		direcciones="";
									                		for(i=0; i<data.length; i++){
									                		direcciones+="<p><button type='button'  data-id_direccion='"+data[i].id+"' data-calle_y_num='"+data[i].calle_numero+"' data-entre_calle_1='"+data[i].entre_calle_1+"' data-entre_calle_2='"+data[i].entre_calle_2+"' data-referencias='"+data[i].referencias+"' data-colonia='"+data[i].colonia+"' data-estado='"+data[i].estado+"' data-delegacion='"+data[i].delegacion+"' data-codigo_postal='"+data[i].codigo_postal+"'  data-num-ext='"+data[i].numero_exterior+"' data-num-int='"+data[i].numero_interior+"' class='btn btn-default direccion_guardada'>"+data[i].nombre_en_agenda+"</button><i class='fa fa-pencil editar_direccion_button' aria-hidden='true'></i></p><br>";
									                		}
									                		$("#lista-direcciones").html(direcciones);
									                		$("#lista-direcciones2").html(direcciones);
									                		$("#editar_perfil").css("display", "inherit");
															$("#editar_direcciones").css("display", "inherit");
	
									                	}
												   }
									            });	
							}
					});



				 $.ajax({

		                type: "POST", 
		                url: url+"/index.php/servicios/comprobar_cp", 
		                data: { codigo_postal: base_codigo_postal},
		                 dataType: "json", 
		                 success: function (data) {
							if(data!="-1"){ 
								$("#slide2").removeClass("active");
								$("#slide-detalles-pedido").addClass("active");
								
									ruta_id=data[0].rutas_id;
									final_colonia=data[0].colonia;
									dias="";
			                 		if(data[0].lunes=="1"){dias+="lunes, "; dia_1="lunes"; habil1=1;}
			                 		if(data[0].martes=="1"){dias+="martes, "; dia_1="martes"; habil1=2;}
			                 		if(data[0].miercoles=="1"){dias+="miércoles, "; dia_1="miércoles"; habil1=3;}
			                 		if(data[0].jueves=="1"){dias+="jueves "; dia_2="jueves"; habil2=4;}
			                 		if(data[0].viernes=="1"){dias+="viernes "; dia_2="viernes"; habil2=5;}
			                 		if(data[0].sabado=="1"){dias+="sábado "; dia_2="sábado"; habil2=6;}
 									
			                 		if(dia_1=="lunes" && dia_2=="jueves"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 1 || day == 4)] ;
									    }
									    });
									 	 } );
			                 		}
			                 		if(dia_1=="lunes" && dia_2=="miercoles"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 1 || day == 3)] ;
									    }
									    });
									 	 } );
			                 		}
			                 		if(dia_1=="martes" && dia_2=="jueves"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 2 || day == 4)] ;
									    }
									    });
									 	 } );
			                 		}
									if(dia_1=="martes" && dia_2=="viernes"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 2 || day == 5)] ;
									    }
									    });
									 	 } );
			                 		}
									if(dia_1=="miércoles" && dia_2=="viernes"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 3 || day == 5)] ;
									    }
									    });
									 	 } );
			                 		}
									if(dia_1=="miércoles" && dia_2=="sábado"){
			                 			$( function() {
									    $( "#datepicker" ).datepicker({
									    	minDate: 1,
									    	 beforeShowDay: function(date) {
									        var day = date.getDay();
									        return   [(day == 3 || day == 6)] ;
									    }
									    });
									 	 } );
			                 		}

			                 		
			                 		$("#dias_de_servicio").html(dia_1+" y "+dia_2);
 									

$("#dia_1").val(dia_1);$("#span_dia1").text(dia_1);$("#dia_2").val(dia_2);$("#span_dia2").text(dia_2);

			                 		 $.ajax({
						                type: "POST", 
						                url: url+"/index.php/servicios/traer_ruta", 
						                data: { ruta_id: ruta_id},
						                dataType: "json", 
						                 success: function (data) {
						                 	final_ruta_nombre=data[0]["nombre"];
						                 	sucursal_id=data[0]["sucursal_id"];
						                 	
						                 	$.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/traer_sucursal", 
								                data: { sucursal_id: sucursal_id},
								                dataType: "json", 
								                 success: function (data) {
								                 	final_sucursal_direccion=data[0]["direccion"];
								                 	final_sucursal_telefono=data[0]["telefono"];
								                 	final_sucursal_nombre=data[0]["nombre"];
								                 	$("#nombrederuta").html(final_ruta_nombre);
													$("#nombredesucursal").html(final_sucursal_nombre);

								                }
								            });


						                 	$.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/traer_servicios", 
								                data: { sucursal_id: sucursal_id},
								                dataType: "json", 
								                 success: function (data) {
								                 	for(i=0; i<data.length; i++){
								                 		if(i==0){
								                 			'<button type="button" class="btn btn-default">Left</button><button type="button" class="btn btn-default">Right</button></div>'
								                 			html='<button type="button"  data-idservicio="'+data[i].id+'" data-nombreservicio="'+data[i].nombre+'" class="btn btn-default servicio '+data[i].nombre+'"><img src="images/'+data[i].nombre+'.png"> '+data[i].nombre+'</button>';
								                 			servicio_id=data[i].id;
								                 			servicio_nombre=data[i].nombre;

								                 		}else{
								                 			html+='<button type="button"  data-idservicio="'+data[i].id+'" data-nombreservicio="'+data[i].nombre+'"  class="btn btn-default servicio '+data[i].nombre+'"><img src="images/'+data[i].nombre+'.png"> '+data[i].nombre+'</button>';
								                 		}	
								                 	}
								                 	$("#tabuladorservicios").html(html);
								                }
								            });
								          
						                 	
								           $.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/traer_direccion", 
								                data: { codigo_postal: parseInt(base_codigo_postal)},
								                dataType: "json", 
								                 success: function (data) {
								                 	$("#delegacion").val(data[0]["municipio"]);
								                 	$("#estado").val(data[0]["estado"]);
								                 	if(data[0]["codigo_postal"].length==4){
								                 		data[0]["codigo_postal"]="0"+data[0]["codigo_postal"];
								                 	}
								                 	$("#codigopostal").val(data[0]["codigo_postal"]);
								                 	$("#colonia").val(data[0]["colonia"]);

								                }
								            });
								           
								          if(codigoconvenio!=""){

								           		$.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/comprobar_codigo_convenio", 
								                data: { codigo_convenio: codigoconvenio},
								                dataType: "json", 
								                success: function(data){
								                if(data!="-1"){
								                	$(".row-convenio").show("fast");
													descuento_inicial=data[0]["descuento"];
													convenio=data[0]["nombre"];
													$("#descuento_inicial").html(descuento_inicial+" %");
														$("#title_modo_de_pago").html("Para respetar tu descuento  del "+descuento_inicial+"% por convenio tu pago debe ser anticipado");
															$("#regular").css("display", "none");
														$("#anticipado-cupon").css("display", "none");
													
													modo_de_pago="Anticipado";
												$("#anticipado").css("display", "inherit");
													$("#modo_pago_convenio").css("display", "inherit");
													$("#anticipado-cupon").css("display", "none!important");
													$("#regular").css("display", "none!important");
												}else{
													$(".row-convenio").hide("fast");
													$("#convenio-codigo").addClass("incorrecto");
													$("#convenio-codigo").val("");
													$("#descuento_inicial").html(" Tu código no coincide con ninguno en nuestros registros");
													$("#convenio-codigo").attr("placeholder", "Ingresa un código válido");
												}
								                }
								            });	

								           }
										    

						                }
						            });
									
					            	
								}else{		
								$("#slide2").removeClass("active");
								$("#slide3").addClass("active");
							}
							
		                }

		            });



				}else{
					alert("Llena todos los campos");	
				}

		});

$("#slide8, #slide16").on("click", ".direccion_nueva", function(){
	$(".permisos").addClass("active");
	$(".btn-confirmar-direccion-existente-avanzar").hide();
});
$("#permitir_ubicacion").click(function(){
	$("#map-container").addClass("active");
	setTimeout(function(){
		$("#map-instrucciones").addClass("active");
	},2000);
	
	$(".permisos").removeClass("active");
});

$("#denegar_ubicacion").click(function(){
		if(!$(this).hasClass("active")){
			$(".permisos").removeClass("active");
			$(".direccion_guardada, .direccion_nueva").removeClass("active");
			$(this).addClass("active");
			$(".calle").val("");
			$(".colonia").val("");
			$(".alter_calle_1").val("");
			$(".alter_calle_2").val("");
			$(".referencias").val("");	
			$(".delegacion").val("");	
			$(".estado").val("");	
			$(".codigopostal").val("");	
			$(".num_exterior").val("");	
			$(".num_interior").val("");	
			$(".nombre-de-direccion").html("");
			$(".container-direccion").show("fast");	
			$(".btn-confirmar-direccion-nueva-avanzar").show("fast");
			$(".btn-confirmar-direccion-existente-avanzar").hide("fast");
			$(".btn-confirmar-direccion-nueva").show("fast");
			$(".btn-confirmar-direccion-existente").hide("fast");
			$(".new_dir_nombre-container").show("fast")
			$(".new_dir_nombre").val("");
			$(".reg_colonia").val("");
			$(".reg_estado option:nth-child(1)").attr("selected", "selected");
			$(".reg_municipio option:nth-child(1)").attr("selected", "selected");
			$(".editar_direccion_button").removeClass("active");














			/*$(".new_dir_nombre-container").show("fast");
			$("#new_dir_nombre").val(dir_nombre);*/

		}

	});


/*---------------------------------------------------------------------------------------crear cuenta--------------------------------------------------------------------------------------------*/

$("#btn-enviar_registro").click(function(){
	$("#form-registro .submitreal").click();
});

$(".reg_convenio").keyup(function(){
	valor=$(this).val();
	
	

		$.ajax({
			type: "POST",
			url: url+"/index.php/servicios/validar_codigo_ajax",
			data: { valor:valor },
			dataType: "json", 
			success: function (data) {
				
					if(data=="Inválido"){
						if(valor==""){
							$("#error_convenio").hide("fast");
						}else{
							$("#error_convenio").show("fast");
						}	
					}else{
						$("#error_convenio").hide("fast");
					}
				
			
			}
		});

	

	

});

$("#form-registro").submit(function(e){
 		e.preventDefault();

 var captcha = "valido";
           //recaptcha failed validation
           if(captcha.length == 0) {
               e.preventDefault();
               $('#captcha').html("Valida tu identidad porfavor");
           }
           //recaptcha passed validation
           else {
               $('#captcha').html(" ");
	                reg_nombre=$(".reg_nombre").val();
					reg_apellidos=$(".reg_apellidos").val();
					reg_correo=$(".reg_correo").val();
					reg_telefono=$(".reg_telefono").val();
					reg_password=$(".reg_password").val();
					reg_genero=$("#reg_genero option:selected").val();
					reg_birthday=$(".reg_birthday").val();
					reg_telefono_celular=$(".reg_telefono_celular").val();
					reg_confirm_password=$(".reg_confirm_password").val();
					reg_img=$("#reg_img").val();
					
					/*reg_calle=$(".reg_calle").val();
					reg_num_exterior=$(".reg_num_exterior").val();
					reg_num_interior=$(".reg_num_interior").val();
					reg_codigo_postal=$(".reg_codigo_postal").val();
					reg_municipio=$(".reg_municipio_reg").val();
					reg_colonia=$(".reg_colonia_reg").val();
					reg_estado=$(".reg_estado_reg").val();
					reg_calle_1=$(".reg_calle_1").val();
					reg_calle_2=$(".reg_calle_2").val();
					reg_detalles=$(".reg_detalles").val();
					reg_convenio=$(".reg_convenio").val();
					reg_nombre_direccion=$(".reg_nombre_direccion").val();
					*/


					if(reg_password!=reg_confirm_password){
				    	$("#error_password").show("fast");
				    	contrasenas_equal=0;
				    }else{
				    	$("#error_password").hide("fast");
				    	contrasenas_equal=1;
				    }

				 /*   if(colonia_seleccionada==0){
						contrasenas_equal==0;	
					}*/
					if(contrasenas_equal==1){
						if(reg_telefono!="" || reg_telefono_celular!=""){



									$.ajax({
											type: "POST", 
											url: url+"/index.php/servicios/registro_cliente", 
											data: { nombre: reg_nombre, apellidos: reg_apellidos, correo: reg_correo, password: reg_password, imagen: reg_img, gender: reg_genero, birthday: reg_birthday, telefono: reg_telefono, telefono_celular: reg_telefono_celular/*, convenio: reg_convenio*/},
											dataType: "json", 
											success: function (data) {

												if(data=="1"){
														
														$(".reg_correo").focus();
														$("#error_correo").show("fast");

												}else{

														codigovalidacion=data[0];
														id_user=data[1];			
													






														/*
														$.ajax({
												                type: "POST", 
												                url: url+"/index.php/servicios/guardar_nueva_direccion", 
												               data: { nombre_en_agenda: reg_nombre_direccion, calle_numero: reg_calle, codigo_postal: reg_codigo_postal, delegacion: reg_municipio, colonia: reg_colonia, alter_calle_1: reg_calle_1, alter_calle_2: reg_calle_2,
												                 referencias: reg_detalles, estado: reg_estado, cliente_id: id_user, numero_exterior: reg_num_exterior, numero_interior: reg_num_interior, },
																dataType: "json", 
												                 success: function (data) {
																	$("#slide2").addClass("active");
																	$("#slide10").removeClass("active");	
																
																}

												        });
														
														base_codigo_postal=reg_codigo_postal;
														*/
												        document.cookie = "7clean_id="+id_user+" ";	
													$.ajax({
									                type: "POST", 
									                url: url+"/index.php/servicios/traer_directorio", 
									                data: {id_user: id_user},
									                dataType: "json", 
									                 success: function (data) {
									                	
									                		direcciones="";
									                		for(i=0; i<data.length; i++){
									                		direcciones+="<p><button type='button'  data-id_direccion='"+data[i].id+"' data-calle_y_num='"+data[i].calle_numero+"' data-entre_calle_1='"+data[i].entre_calle_1+"' data-entre_calle_2='"+data[i].entre_calle_2+"' data-referencias='"+data[i].referencias+"' data-colonia='"+data[i].colonia+"' data-estado='"+data[i].estado+"' data-delegacion='"+data[i].delegacion+"' data-codigo_postal='"+data[i].codigo_postal+"'  data-num-ext='"+data[i].numero_exterior+"' data-num-int='"+data[i].numero_interior+"' class='btn btn-default direccion_guardada'>"+data[i].nombre_en_agenda+"</button><i class='fa fa-pencil editar_direccion_button' aria-hidden='true'></i></p><br>";
									                		}
									                		$("#lista-direcciones").prepend(direcciones);
									                		$("#lista-direcciones2").prepend(direcciones);
									                		$(".contenedor-slide").removeClass("active");	
															$("body").removeClass("no-logged");	
															$("body").addClass("logged");	
															$("#slidehome").addClass("active");
															$("#slide9").css("display", "none");
															$("#hacer_pedido").css("display", "none");
															$("#iniciar_sesion").css("display", "none");
															$("#editar_perfil").css("display", "inherit");
															$("#editar_direcciones").css("display", "inherit");

	
									                	
												   }
									            });	

								         	

													$.ajax({
											                type: "POST", 
											                url: url+"/index.php/servicios/traer_datos_cliente", 
											                data: { id_user: id_user},
											                dataType: "json", 
											                 success: function (data) {

											                 		$("#edit_nombre").val(data[0]['nombre']);
											                 		$("#edit_correo").val(data[0]['correo']);
											                 		$("#edit_apellidos").val(data[0]['apellidos']);
											                 		$("#edit_telefono").val(data[0]['telefono_casa']);
											                 		$("#edit_telefono_celular").val(data[0]['telefono_cel']);
											                 		$("#edit_password").val(data[0]['password']);
											                 		$("#edit_convenio").val(data[0]['convenio']);
											                 		$('.avatar-perfil img').attr('src',data[0]['foto_url']);
											                 		$('.avatar img').attr('src',data[0]['foto_url']);
											                 			codigoconvenio=data[0]['convenio'];
											                 }
											            }); 




												}



										}
									});
									
						
							 } else{
							 	$(".error_tel").show("fast");
							 }
						}else{
							$(".reg_password").focus();
						}
					

					}

	
});




$(".telefono").keyup(function(){
    cadena=$(this).val();
    penultima=cadena.length-1;
    valor=cadena.substr(0, penultima-1);
    
    if(isNaN(cadena.substr(penultima, cadena.length))){
        $(this).val(cadena.slice(0, -1));
    }
});


$(".reg_confirm_password, .reg_password").keyup(function(){
    reg_password=$(".reg_password").val();				
    cadena=$(".reg_confirm_password").val();

    if(reg_password!=cadena && cadena!=""){
    	$("#error_password").show("fast");
    	valor=0;
    }else{
    	$("#error_password").hide("fast");
    	valor=1;
    }

});



/*---------------------------------------------------------------------------------------iniciar sesion--------------------------------------------------------------------------------------------*/
$("#password_loggin, #correo_loggin").keyup(function(e){
	if (e.keyCode == '13') {
					
					$("#btn-confirmar-loggin").click();
						
					}

});


$("#btn-confirmar-loggin").click(function(){
	correo_loggin=$("#slideloggin #correo_loggin").val();
	password_loggin=$("#slideloggin #password_loggin").val();
	$("#slideloggin").removeClass("active");
	$("#slide2").addClass("active");
		$.ajax({
				type: "POST", 
				url: url+"/index.php/servicios/loggin_cliente", 
				data: { correo: correo_loggin, password: password_loggin},
				dataType: "json", 
				success: function (data) {
						if(data["user"]=="0"){
							$("#password_loggin").addClass("incorrecto");
							$("#password_loggin").removeClass("place-holder-blanco");
							$("#password_loggin").val("");
							$("#password_loggin").attr("placeholder", "Contraseña incorrecta");
							$("#slideloggin").addClass("active");
							$("#slide2").removeClass("active");	
						}else{
						  	if(data["user"]=="-1"){
						  		$("#correo_loggin").addClass("incorrecto");
								$("#correo_loggin").removeClass("place-holder-blanco");
								$("#correo_loggin").val("");
								$("#correo_loggin").attr("placeholder", "No se encontró ese correo");
								$("#slideloggin").addClass("active");
								$("#slide2").removeClass("active");	
						  	}else{
						  		document.cookie = "7clean_id="+data["user"][0]["id"]+" ";
						  		$("#cerrar_sesion").css("display", "inherit");
						  		if(volverdeloggin!="historial_1"){ 
						  			$("#slide8").addClass("active");
								 }else{
								 	$("#historial_1").addClass("active");
								
								 }
								 $("body").removeClass("no-logged");
								 $("body").addClass("logged");
								if(data["user"][0]["foto_url"]!=""){
									$(".avatar img").attr("src", data["user"][0]["foto_url"]); 
								}else{
									$(".avatar img").attr("src", "images/avatar.png"); 
								}
								$("#slide2").removeClass("active");		
								$("body").removeClass("background");
								$("header").removeClass("barrainvisible");
								if(volverdeloggin==1 || volverdeloggin==2 || volverdeloggin==3 || volverdeloggin==4 || volverdeloggin==5 || volverdeloggin==6 || volverdeloggin==9){
								$("body").addClass("background");
								$("header").addClass("barrainvisible");
								}
								$("#iniciar_sesion").css("display", "none");
								$("#cerrar_sesion").css("display", "inherit");
								$("#editar_perfil").css("display", "inherit");
								$("#editar_direcciones").css("display", "inherit");
								$("#historial_pedidos").css("display", "inherit");
								$("#hacer_pedido").css("display", "inherit");
									
								
								
								id_user=data["user"][0]["id"];
								         	

										$.ajax({
											                type: "POST", 
											                url: url+"/index.php/servicios/traer_datos_cliente", 
											                data: { id_user: id_user},
											                dataType: "json", 
											                 success: function (data) {

											                 		$("#edit_nombre").val(data[0]['nombre']);
											                 		$("#edit_correo").val(data[0]['correo']);
											                 		$("#edit_apellidos").val(data[0]['apellidos']);
											                 		$("#edit_telefono").val(data[0]['telefono_casa']);
											                 		$("#edit_telefono_celular").val(data[0]['telefono_cel']);
											                 		$("#edit_password").val(data[0]['password']);
											                 		$("#edit_convenio").val(data[0]['convenio']);
											                 		$('.avatar-perfil img').attr('src',data[0]['foto_url']);
											                 			codigoconvenio=data[0]['convenio'];
											                 }
											            }); 
								         		$.ajax({
									                type: "POST", 
									                url: url+"/index.php/servicios/traer_directorio", 
									                data: {id_user: id_user},
									                dataType: "json", 
									                 success: function (data) {
									                	if(data!=-1){
									                		direcciones="";
									                		for(i=0; i<data.length; i++){
									                		direcciones+="</p><button type='button'  data-id_direccion='"+data[i].id+"' data-colonia='"+data[i].colonia+"' data-calle_y_num='"+data[i].calle_numero+"' data-entre_calle_1='"+data[i].entre_calle_1+"' data-entre_calle_2='"+data[i].entre_calle_2+"' data-referencias='"+data[i].referencias+"' data-estado='"+data[i].estado+"' data-delegacion='"+data[i].delegacion+"' data-codigo_postal='"+data[i].codigo_postal+"'  data-num-ext='"+data[i].numero_exterior+"' data-num-int='"+data[i].numero_interior+"' class='btn btn-default direccion_guardada'>"+data[i].nombre_en_agenda+"</button><i class='fa fa-pencil editar_direccion_button' aria-hidden='true'></i></p><br>";
									                		}

									                		$("#lista-direcciones, #botones-direcciones-editar").prepend(direcciones);
									                		$("#lista-direcciones2, #botones-direcciones-editar").prepend(direcciones);
									                		$("#p-direcciones").addClass("active");
									                	}
												   }
									            });
									      


						                 	

						}
				
					}						
				}
		});

});

/*--------------------------------------------------------------loggin facebook----------------------------------------------------*/


$("#button-start-facebook").click(function(){
	correo_loggin=$("#slideloggin #correo_loggin").val();
	$("#slideloggin").removeClass("active");
	$("#slide2").addClass("active");
		$.ajax({
				type: "POST", 
				url: url+"/index.php/servicios/loggin_cliente_facebook", 
				data: { correo: correo_loggin},
				dataType: "json", 
				success: function (data) {
						if(data["user"]=="0"){
							$("#password_loggin").addClass("incorrecto");
							$("#password_loggin").removeClass("place-holder-blanco");
							$("#password_loggin").val("");
							$("#password_loggin").attr("placeholder", "Contraseña incorrecta");
							$(".contenedor-slide").removeClass("active");
							$("#slideloggin").addClass("active");
								
						}else{
						  	if(data["user"]=="-1"){
						  		$("#correo_loggin").addClass("incorrecto");
								$("#correo_loggin").removeClass("place-holder-blanco");
								$("#correo_loggin").val("");
								$("#correo_loggin").attr("placeholder", "No se encontró ese correo");
								$(".contenedor-slide").removeClass("active");
								$("#slideloggin").addClass("active");
							}else{
						  		document.cookie = "7clean_id="+data["user"][0]["id"]+" ";
						  		$("#cerrar_sesion").css("display", "inherit");
						  		if(volverdeloggin!="historial_1"){ 
						  			$("#slidehome").addClass("active");
								 }else{
								 	$("#historial_1").addClass("active");
								
								 }
								if(data["user"][0]["foto_url"]!=""){
									$(".avatar img").attr("src", data["user"][0]["foto_url"]); 
								}else{
									$(".avatar img").attr("src", "images/avatar.png"); 
								}
								$("body").removeClass("no-logged");
								 $("body").addClass("logged");
								$("#slide2").removeClass("active");		
								$("body").removeClass("background");
								$("header").removeClass("barrainvisible");
								if(volverdeloggin==1 || volverdeloggin==2 || volverdeloggin==3 || volverdeloggin==4 || volverdeloggin==5 || volverdeloggin==6 || volverdeloggin==9){
								$("body").addClass("background");
								$("header").addClass("barrainvisible");
								}
								$("#iniciar_sesion").css("display", "none");
								$("#cerrar_sesion").css("display", "inherit");
								$("#editar_perfil").css("display", "inherit");
								$("#editar_direcciones").css("display", "inherit");
								$("#historial_pedidos").css("display", "inherit");
								$("#hacer_pedido").css("display", "inherit");
									
								
								
								id_user=data["user"][0]["id"];
								         	

										$.ajax({
											                type: "POST", 
											                url: url+"/index.php/servicios/traer_datos_cliente", 
											                data: { id_user: id_user},
											                dataType: "json", 
											                 success: function (data) {

											                 		$("#edit_nombre").val(data[0]['nombre']);
											                 		$("#edit_correo").val(data[0]['correo']);
											                 		$("#edit_apellidos").val(data[0]['apellidos']);
											                 		$("#edit_telefono").val(data[0]['telefono_casa']);
											                 		$("#edit_telefono_celular").val(data[0]['telefono_cel']);
											                 		$("#edit_password").val(data[0]['password']);
											                 		$("#edit_convenio").val(data[0]['convenio']);
											                 		$('.avatar-perfil img').attr('src',data[0]['foto_url']);
			
											                 			codigoconvenio=data[0]['convenio'];
											                 }
											            }); 
								         		$.ajax({
									                type: "POST", 
									                url: url+"/index.php/servicios/traer_directorio", 
									                data: {id_user: id_user},
									                dataType: "json", 
									                 success: function (data) {
									                	if(data!=-1){
									                		direcciones="";
									                		for(i=0; i<data.length; i++){
									                		direcciones+="</p><button type='button'  data-id_direccion='"+data[i].id+"' data-colonia='"+data[i].colonia+"' data-calle_y_num='"+data[i].calle_numero+"' data-entre_calle_1='"+data[i].entre_calle_1+"' data-entre_calle_2='"+data[i].entre_calle_2+"' data-referencias='"+data[i].referencias+"' data-estado='"+data[i].estado+"' data-delegacion='"+data[i].delegacion+"' data-codigo_postal='"+data[i].codigo_postal+"'  data-num-ext='"+data[i].numero_exterior+"' data-num-int='"+data[i].numero_interior+"' class='btn btn-default direccion_guardada'>"+data[i].nombre_en_agenda+"</button><i class='fa fa-pencil editar_direccion_button' aria-hidden='true'></i></p><br>";
									                		}

									                		$("#lista-direcciones, #botones-direcciones-editar").prepend(direcciones);
									                		$("#lista-direcciones2, #botones-direcciones-editar").prepend(direcciones);
									                		$("#p-direcciones").addClass("active");
									                	}
												   }
									            });
									      


						                 	

						}
				
					}						
				}
		});

});






/*---------------------------------------------------------------------------------------validar cuenta--------------------------------------------------------------------------------------------*/



$("#btn-validar-cuenta").click(function(){
	codigo_introducido=$("#codigo_validar_cuenta").val();
	if(codigo_introducido!=codigovalidacion || codigo_introducido==""){
		$("#codigo_validar_uenta").addClass("incorrecto");
		$("#codigo_validar_uenta").val("");
		$("#codigo_validar_uenta").attr("placeholder", "Código incorrecto");
	}else{
		$("#slide8").addClass("active");
		$("#slide11").removeClass("active");	
		$(".container .dropdown-toggle").show("fast");	
		$("body").removeClass("background");
		$("header").removeClass("barrainvisible");
		$("body").addClass("no-background");
		
	}
});





$("#direccion_nueva").click(function(){

});

/*---------------------------------------------------------------------------------------aceptar dirección--------------------------------------------------------------------------------------------*/


$("#btn-confirmar-direccion").click(function(){
				
				coincidenciadireccion=0;
					valido=0;
				calle=$("#slide8 #calle").val();
				colonia=$("#slide8 #colonia").val();
				delegacion=$("#slide8 #delegacion").val();
				estado=$("#slide8 #estado").val();
				codigopostal=$("#slide8 #codigopostal").val();
				alter_calle_1=$("#slide8 #alter_calle_1").val();
				alter_calle_2=$("#slide8 #alter_calle_2").val();
				num_exterior=$("#slide8 #num_exterior").val();
				num_interior=$("#slide8 #num_interior").val();
				referencias=$("#slide8 #referencias").val();
				dia_recogida=$(".dias:checked").val();
				horarios=$("#horarios option:selected").val();
				frecuencia=$(".frecuencia:checked").val();
				if(calle==""){
					$("#calle").addClass("incorrecto");
					$("#calle").val("");
					$("#calle").attr("placeholder", "Introduce una calle");
					valido=1;
				}
				if(colonia==""){
					$("#colonia").addClass("incorrecto");
					$("#colonia").val("");
					$("#colonia").attr("placeholder", "Introduce una colonia");
					valido=1;	
				}
				if(delegacion==""){
					$("#delegacion").addClass("incorrecto");
					$("#delegacion").val("");
					$("#delegacion").attr("placeholder", "Introduce una delegacion");
					valido=1;
				}
				if(estado==""){
					$("#estado").addClass("incorrecto");
					$("#estado").val("");
					$("#estado").attr("placeholder", "Introduce un estado");
					valido=1;
				}
				if(alter_calle_1==""){
					$("#alter_calle_1").addClass("incorrecto");
					$("#alter_calle_1").val("");
					$("#alter_calle_1").attr("placeholder", "Introduce una calle de referencia");
					valido=1;
				}
				if(alter_calle_2==""){
					$("#alter_calle_2").addClass("incorrecto");
					$("#alter_calle_1").val("");
					$("#alter_calle_1").attr("placeholder", "Introduce una calle de referencia");
					valido=1;
				}
				if(referencias==""){
					$("#referencias").addClass("incorrecto");
					$("#referencias").val("");
					$("#referencias").attr("placeholder", "Introduce una mínimo una referencia ");
					valido=1;
				}
				if(codigopostal==""){
					$("#codigopostal").addClass("incorrecto");
					$("#codigopostal").val("");
					$("#codigopostal").attr("placeholder", "Introduce un código postal");
					valido=1;
				}
				
				if(num_exterior==""){
					$("#num_exterior").addClass("incorrecto");
					$("#num_exterior").val("");
					$("#num_exterior").attr("placeholder", "Introduce el número de lote");
					valido=1;
				}
				
				if(recibe!="yo"){
					recibe=$("#especifica").val();
				}

				
				
				if(valido==0){
					/*
					$(".direccion_guardada").each(function(){
						if($(this).attr("data-calle_y_num")==calle){
							coincidenciadireccion=1;
						}
						
						

					});

					contador=1;
					html="";

				
					$(".producto-en-pedido").each(function(){
						html+="<div class='resumen-producto'><p class='num-producto'>Producto #"+contador+"</p>";
						html+=$(this).html();
						html+="</div>";
						contador++;
					});

					switch(horarios){
						case "hora1":
						hora="9:00 - 11:00";
						break;
						case "hora2":
						hora="11:00 - 13:00";
						break;
						case "hora3":
						hora="13:00 - 15:00";
						break;
						case "hora4":
						hora="15:00 - 17:00";
						break;
						case "hora5":
						hora="17:00 - 19:00";
						break;
						
					}

					frecuencia=$(".frecuencia:checked").val();

					if(frecuencia=="única"){
						frecuencia="solo esta vez";
					}

					if($("#input-especificaciones").val()!=""){
						especificaiones_final=$("#input-especificaciones").val();
					}else{
						especificaiones_final="Ninguna";
					}

					html+="<hr><p class='titulo-detalles'>Detalles<br></p><div class='detalles'>";
					html+="<p>Especificaiones del cliente: <span id='db_especificaciones'  class='texto-gris'>"+especificaiones_final+"</span></p>";	
					html+="<p>Quien recibe?: <span id='db_recibe' class='texto-gris'>"+recibe+"</span></p>";	
					html+="<p>Recurrencia: <span id='db_frecuencia'  class='texto-gris'>"+frecuencia+"</span></p>";	
					html+="<p>Día de recogida: <span  id='dia_recogida'  class='texto-gris'>"+dia_recogida+"</span></p>";	
					html+="<p>Horario de recogida: <span id='hora'  class='texto-gris'> <img src='images/reloj.png'> "+hora+"</span></p></div>";	
					html+="<hr><p class='titulo-detalles'>Dirección de envío<br></p><div class='detalles'>";
					html+="<p class='direccion-final texto-gris'>"+calle+", Col. "+colonia+", Cp: "+base_codigo_postal+", Delegación/Municipio: "+delegacion+", Estado: "+estado;	
					html+="<br>Indicaciones: entre calle "+alter_calle_1+" y calle "+alter_calle_2+" "+referencias+"</p></div>";	
					$("#precio-recibo-final").html(total);
					$("#resumenfinal").html(html);

	*/

					
							$("#slide8").removeClass("active");
							$("#slide2").addClass("active");
							setTimeout(function(){
								$("#slide2").removeClass("active");
								$("#slide-detalles-pedido").addClass("active");
							}, 400);	
					
					

				}


		
	

	
});

$("a.recover-pass").click(function(e){
	e.preventDefault();
	$("#slideloggin").removeClass("active");
	$("#slide17").addClass("active");
});

$(".back-slide9").click(function(){
	$("#slide17").removeClass("active");
	$("#slide9").addClass("active");
});


$("#btn-recover-pass").click(function(){

	correo_recover=$("#correo_recover").val();

	$("#slide17 .content-form-recover").hide("slow");
	$.ajax({
				type: "POST", 
				url: url+"/index.php/servicios/recover_pass", 
				data: {correo:correo_recover},
				dataType: "json", 
				success: function (data) {
					
					
				}
		});
	$("#slide17 .content-correo-enviado").show("fast");
					$("#slide17 .content-correo-enviado").css("display", "inherit");
					$("#correo_enviado").text(correo_recover);

});

$(".fa-calendar").click(function(){
	$("#datepicker").click();
});

$("#guardar-pedido").click(function(){
	modo_de_pago="Contraentrega";
	$.ajax({
				type: "POST", 
				url: url+"/index.php/servicios/abrir_orden_de_compra", 
				data: { parentesco: parentesco, dia_en_numero: dia_en_numero, mes_en_numero: mes_en_numero, ano_en_numero: ano_en_numero, cliente_id: id_user, monto_total: " ", sucursal: sucursal_id,  codigo: codigo_cupon, codigo_de_convenio: codigo_convenio, modo_de_pago: modo_de_pago,  ruta: ruta_id,  fecha_de_salida: fecha_de_salida, fecha_de_entrega: fecha_de_entrega, recibe: recibe, recurrencia: frecuencia, direccion_de_entrega: direccion_de_entrega, horarios: horarios, descuento_inicial: descuento_inicial, edit_nombre: edit_nombre, edit_correo:edit_correo, especificaiones_final: especificaiones_final},
				dataType: "json", 
				success: function (data) {
					$(".contenedor-slide").removeClass("active");
					$("#slide14").addClass("active");
					$(".num-ticket").text(data);		
						/*$(".producto-en-pedido").each(function(){
							id_producto_db=$(this).find(".producto-en-pedido_id").text();
							servicio_db=$(this).find(".producto-en-pedido_servicio").text();
							producto_db=$(this).find(".producto-en-pedido_nombre").text();
							cantidad_db=$(this).find(".producto-en-pedido_cantidad").text();
							pago_total_db=$(this).find(".producto-en-pedido_pago_total").text();
							pago_real_db=$(this).find(".producto-en-pedido_precio_real").text();
							personalizaciones_ticket=$(this).find(".personalizaciones_ticket").text();
							id_orden_de_compra=data;
										$.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/agregar_producto_a_pedido", 
								                data: { id_producto_db: id_producto_db, producto_db: producto_db, cantidad_db: cantidad_db, pago_total_db: pago_total_db, pago_real_db: pago_real_db, personalizaciones_ticket: personalizaciones_ticket, id_orden_de_compra: id_orden_de_compra },
								                dataType: "json", 
								                success: function (data) {
															$("#slide13").removeClass("active");
															$("#slide2").addClass("active");
															setTimeout(function(){
																$("#slide2").removeClass("active");
																$("#slide14").addClass("active");
															}, 400);	
								                }
								        });


						});*/
					
				}
		});

});



$("#cancelar-pedido").click(function(){
	
														$("#slide13").removeClass("active");
															$("#slide2").addClass("active");
															setTimeout(function(){
																$("#slide2").removeClass("active");
																$("#slide8").addClass("active");
															}, 400);	

});
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

$("#btn-confirmar-detalles").click(function(){
	contador=1;
					html="";

					html+='<div id="campos-ticket" class="col-md-12"> <p class="col-md-1 col-xs-2 col-lg-1 col-sm-1 column-num textoazul ticket-head">CANT.</p><p class="col-md-3 col-xs-4 col-lg-3 col-sm-3 column-des textoazul ticket-head">DESCRIPCIÓN</p><p class="col-md-2 col-xs-0 col-lg-2 col-sm-2 column-ser textoazul ticket-head">SERVICIO</p><p class="col-md-3 col-xs-0 col-lg-3 col-sm-3 column-par textoazul ticket-head">PARTICULARIDADES</p><p class="col-md-2 col-xs-4 col-lg-2 col-sm-2 column-sub textoazul ticket-head">SUBTOTAL</p><p class="col-btn-delete col-md-1 col-xs-2 col-lg-1 col-sm-1 column-bor textoazul ticket-head">&nbsp</p>';
						
					$(".producto-en-pedido").each(function(){
						html+=$(this).html();
						
						contador++;
					});
					html+="</div>";
	dia_recogida=$(".dias:checked").val();

					horarios=$("#hora_recoleccion option:selected").val();

					if(horarios=="otro"){
						horarios=$("#horarios option:selected").val();
							switch(horarios){
								case "hora1":
								hora="9:00 - 11:00";
								break;
								case "hora2":
								hora="11:00 - 13:00";
								break;
								case "hora3":
								hora="13:00 - 15:00";
								break;
								case "hora4":
								hora="15:00 - 17:00";
								break;
								case "hora5":
								hora="17:00 - 19:00";
								break;
							
							}

					}else{
						hora=horarios;
					}


					
					
					frecuencia=$("#frecuencia option:selected").val();

					if(frecuencia=="única"){
						frecuencia="solo esta vez";
					}

					if($("#input-especificaciones").val()!=""){
						especificaiones_final=$("#input-especificaciones").val();
					}else{
						especificaiones_final="Ninguna";
					}

					datepicker=$("#datepicker").val();

				recibe=$("#recibe option:selected").val();

				if(recibe!="yo"){
						
					recibe=$("#especifica").val();
					parentesco=$("#parentesco").val()
				}else{

					if($("#edit_nombre").val()!=""){
							recibe=$("#edit_nombre").val();
					}else{
						recibe="yo";	
					}

					parentesco=$("#parentesco").val();
				}



					



if(datepicker!=""){

	


	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
	var fechaentrega= new Date(datepicker);
	var f=new Date();
	fecha_de_salida=(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
	dia_1=f.getDay();
	switch(dia_recogida){
						case "lunes":
						dia_2=1;
						break;
						case "martes":
						dia_2=2;
						break;
						case "miércoles":
						dia_2=3;
						break;
						case "jueves":
						dia_2=4;
						break;
						case "viernes":
						dia_2=5;
						break;
						case "sábado":
						dia_2=6;
						break;	
					}
	if(dia_1>dia_2){
		diferencia=7-(dia_1-dia_2);
	}
	if(dia_1<dia_2){
		diferencia=(dia_2-dia_1);
	}
	if(dia_1==dia_2){
		diferencia=7;
	}



	$("#datepicker").click();
													html+="<p class='titulo-detalles detaalles2'>Detalles<br></p><div class='detalles'><div class='row'>";
													html+="<div class='col-xs-6'><span class='col-sm-12 col-md-6'>Día de recoleccion: </span></div><div class='col-xs-6'><span  id='dia_recogida'  class='col-sm-12 col-md-6 texto-gris'>"+diasSemana[fechaentrega.getDay()]+"</span></div>";	
													html+="<div class='col-xs-6'><span class='col-sm-12 col-md-6'>Horario de recoleccion: </span></div><div class='col-xs-6'><span id='hora'  class='col-sm-12 col-md-6 texto-gris'> "+hora+"</span></div>";	
													html+="<div class='col-xs-6'><span class='col-sm-12 col-md-6'>Quien entrega?: </span></div><div class='col-xs-6'><span id='db_recibe' class='col-sm-12 col-md-6 texto-gris'>"+recibe+"</span></div>";	
													html+="<div class='col-xs-6'><span class='col-sm-12 col-md-6'>Frecuencia: </span></div><div class='col-xs-6'><span id='db_frecuencia'  class='col-sm-12 col-md-6 texto-gris'>"+frecuencia+"</span></div>";	
													html+="<div class='col-xs-6'><span class='col-sm-12 col-md-6'>Comentarios adicionales:</span></div> <div class='col-xs-6'><span id='db_especificaciones'  class='col-sm-12 col-md-6 texto-gris'>"+especificaiones_final+"</span></div>";	
													html+="<div class='col-xs-12 hr'>&nbsp;</div><div class='col-xs-12'><p class='titulo-detalles'>Dirección de recolección<br></p></div><div class='col-xs-12'><div class='detalles'>";
													html+="<p class='direccion-final texto-gris'>"+calle+", Col. "+colonia+", Cp: "+base_codigo_postal+", Delegación/Municipio: "+delegacion+", Estado: "+estado;	
													html+="<br>Indicaciones: entre calle "+alter_calle_1+" y calle "+alter_calle_2+" "+referencias+"</p></div></div>";	
													html+="</div>";
													/*$("#precio-recibo-final").html(total);*/
													$("#resumenfinal").html(html);


													$("#resumenfinal .column-bor").remove();







	if(frecuencia=="única"){
			dia_recogida="";
		}else{
			dia_recogida="miércoles";
	}

	var dayOfMonth = f.getDate();
	f.setDate(dayOfMonth + diferencia);

	f=new Date(datepicker);

	fecha_de_entrega=(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
	
	dia_en_numero=f.getDate();
	mes_en_numero=f.getMonth();
	ano_en_numero=f.getFullYear();


	direccion_de_entrega=calle+" "+colonia+", delegación"+delegacion+", C.P: "+base_codigo_postal+", entre calle: "+alter_calle_1+" y "+alter_calle_2+", referencias:"+referencias;

		edit_nombre=$("#edit_nombre").val();
		edit_correo=$("#edit_correo").val();
							

		



					
						
	}


						$("#slide-detalles-pedido").removeClass("active");
						$("#slide2").addClass("active");
						setTimeout(function(){
						$("#slide2").removeClass("active");
						$("#slide13").addClass("active");
						}, 400);	





					
});




/*----------------------------------------------------------------------------------------------Guardar pedido--------------------------------------------------------------------*/

$("#btn-guardar_pedido").click(function(){
	$("#slide13").removeClass("active");
	$("#slide2").addClass("active");


	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
	var f=new Date();
	fecha_de_salida=(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
	dia_1=f.getDay();
	switch(dia_recogida){
						case "lunes":
						dia_2=1;
						break;
						case "martes":
						dia_2=2;
						break;
						case "miércoles":
						dia_2=3;
						break;
						case "jueves":
						dia_2=4;
						break;
						case "viernes":
						dia_2=5;
						break;
						case "sábado":
						dia_2=6;
						break;	
					}
	if(dia_1>dia_2){
		diferencia=7-(dia_1-dia_2);
	}
	if(dia_1<dia_2){
		diferencia=(dia_2-dia_1);
	}
	if(dia_1==dia_2){
		diferencia=7;
	}

	if(frecuencia=="única"){
			dia_recogida="";
		}else{
			dia_recogida="miércoles";
	}

	var dayOfMonth = f.getDate();
	f.setDate(dayOfMonth + diferencia);

	f=new Date(datepicker);
	fecha_de_entrega=(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
	
	dia_en_numero=f.getDate();
	mes_en_numero=f.getMonth();
	ano_en_numero=f.getFullYear();


	direccion_de_entrega=calle+" "+colonia+", delegación"+delegacion+", C.P: "+base_codigo_postal+", entre calle: "+alter_calle_1+" y "+alter_calle_2+", referencias:"+referencias;

		edit_nombre=$("#edit_nombre").val();
		edit_correo=$("#edit_correo").val();
							

		$.ajax({
				type: "POST", 
				url: url+"/index.php/servicios/abrir_orden_de_compra", 
				data: { dia_en_numero: dia_en_numero, mes_en_numero: mes_en_numero, ano_en_numero: ano_en_numero, cliente_id: id_user, monto_total: total, sucursal: sucursal_id,  codigo: codigo_cupon, codigo_de_convenio: codigo_convenio, modo_de_pago: modo_de_pago,  ruta: ruta_id,  fecha_de_salida: fecha_de_salida, fecha_de_entrega: fecha_de_entrega, recibe: recibe, recurrencia: frecuencia, direccion_de_entrega: direccion_de_entrega, horarios: horarios, descuento_inicial: descuento_inicial, edit_nombre: edit_nombre, edit_correo:edit_correo},
				dataType: "json", 
				success: function (data) {
					$("#slide2").removeClass("active");
					$("#slide14").addClass("active");
					
						$(".producto-en-pedido").each(function(){



							id_producto_db=$(this).find(".producto-en-pedido_id").text();
							servicio_db=$(this).find(".producto-en-pedido_servicio").text();
							producto_db=$(this).find(".producto-en-pedido_nombre").text();
							cantidad_db=$(this).find(".producto-en-pedido_cantidad").text();
							pago_total_db=$(this).find(".producto-en-pedido_pago_total").text();
							pago_real_db=$(this).find(".producto-en-pedido_precio_real").text();
							personalizaciones_ticket=$(this).find(".personalizaciones_ticket").text();
							id_orden_de_compra=data;

										$.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/agregar_producto_a_pedido", 
								                data: { id_producto_db: id_producto_db, producto_db: producto_db, cantidad_db: cantidad_db, pago_total_db: pago_total_db, pago_real_db: pago_real_db, personalizaciones_ticket: personalizaciones_ticket, id_orden_de_compra: id_orden_de_compra },
								                dataType: "json", 
								                success: function (data) {
								                 	setTimeout(function(){
								                		$("#slide2").removeClass("active");
														$("#slide14").addClass("active");
								                 	},500);
								                }
								        });


						});
					
				}
		});


});





/*----------------------------------------------------------------------*/
$("#slide12").on("click", "#btn-guardar_direccion_nueva", function(){
			nombre_en_agenda=$("#nombre_en_agenda").val();
			
			if(nombre_en_agenda!="" && nombre_en_agenda.length>3){
				$("#slide12").removeClass("active");
			$("#slide2").addClass("active");
				setTimeout(function(){


					$.ajax({
								                type: "POST", 
								                url: url+"/index.php/servicios/guardar_nueva_direccion", 
								               data: { nombre_en_agenda: nombre_en_agenda, calle_numero: calle, codigo_postal: base_codigo_postal, delegacion: delegacion, colonia: colonia, alter_calle_1: alter_calle_1, alter_calle_2: alter_calle_2,  referencias: referencias, estado: estado, cliente_id: id_user },
												dataType: "json", 
								                 success: function (data) {
								                 	$("#slide2").removeClass("active");
													$("#slide13").addClass("active");

								                }
								            });


				},300);

			}
				
			
})






/*------------------------------------comprobar cupon de descuento----------------------------------*/

$("#btn-cupon").click(function(){
		cupon=$("#cupon").val();
		if(cupon!=""){
		$("#datoscupon").css("display", "none");
		$("#espera_cupon").css("display", "inherit");
			$.ajax({
				type: "POST", 
				url: url+"/index.php/servicios/verificar_cupon", 
				data: { cupon: cupon },
				dataType: "json", 
				success: function (data) {
					if(data=="-1"){
						setTimeout(function(){
								$("#datoscupon").css("display", "inherit");
								$("#espera_cupon").css("display", "none");
							},300);
						$("#cupon").attr("placeholder", "Cupón Inválido");
						$("#cupon").addClass("incorrecto");
						$("#cupon").val("");
						$('html, body').animate({
				                    scrollTop: $("#anticipado-cupon").offset().top
				                }, 100);
					}else{
						cupon_id=data[0].id;
						descuento_inicial=data[0].descuento;
						codigo_cupon=data[0].codigo;
						vigencia_cupon=data[0].fecha_final;
						validez_cupon=data[0].active;
						var f = new Date();
						fecha_de_hoy=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
						
						array_fecha = fecha_de_hoy.split("/");
						var dia=array_fecha[0]
						var mes=(array_fecha[1]-1)
						var ano=(array_fecha[2])
						f1 = new Date(ano,mes,dia);
						array_fecha = vigencia_cupon.split("/");
						var dia=array_fecha[0]
						var mes=(array_fecha[1]-1)
						var ano=(array_fecha[2])
						f2 = new Date(ano,mes,dia);



						if(f1 > f2){
							$("#cupon").attr("placeholder", "Cupón Caducado");
							$("#cupon").addClass("incorrecto");
							$("#cupon").val("");
							setTimeout(function(){
								$("#datoscupon").css("display", "inherit");
								$("#espera_cupon").css("display", "none");
							},300);
							$('html, body').animate({
				                    scrollTop: $("#anticipado-cupon").offset().top
				                }, 100);
						}else{
							setTimeout(function(){
							mensaje_de_cupon="Cupón válido por: "+descuento_inicial+" de descuento";
							$(".mensajecupon").html(mensaje_de_cupon);
							$("#div_cupon_valido").css("display", "inherit");
							$("#espera_cupon").css("display", "none");
							},300);
							
							$("#cup_operacion_total").html("<span class='textos'>Costo:</span> $"+total);
							descuento_del_total=total*(descuento_inicial/100);	
							$("#cup_operacion_descuento").html("<span class='textos'>Descuento:</span> -$"+parseFloat(descuento_del_total).toFixed(2));	
							total_final_descuento=total-descuento_del_total;
							$("#cup_operacion_final").html("<span  class='textos'>Final:</span> $"+parseFloat(total_final_descuento).toFixed(2));	
								$('html, body').animate({
				                    scrollTop: $("#anticipado-cupon").offset().top
				                }, 100);
						}

					}
				}
			});	
		}else{
			$("#cupon").attr("placeholder", "Cupón Inválido");
			$("#cupon").addClass("incorrecto");
			$("#cupon").val("");
		}
});

/*------------------------------------aplicar descuento cupón----------------------------------*/







/*------------------------------------aplicar descuento cupón----------------------------------*/


$("#btn-cupon_2").click(function(){
	/*$("#regular").css("width", "100%");
	$("#anticipado").css("width", "0%");*/
	$("#anticipado").css("display", "none");
	$("#regular").css("display", "none");
	$("#anticipado-cupon").css("margin", "auto");
	$("#anticipado-cupon").css("float", "none");
	
   
	$("#title_total, #title_total2").hide("fast");

	modo_de_pago="Cupón";
	total=parseFloat($("#total_a_pagar").text()).toFixed(2);
	total=parseFloat((total*(1-(parseFloat(descuento_inicial)/100)))).toFixed(2);
	$("#total_a_pagar").text(total);
	$("#total_a_pagar").addClass("con_descuento");
	$("#total_a_pagar2").text(total);
	$("#total_a_pagar2").addClass("con_descuento");
	$(this).css("display", "none");
	$(".producto-en-pedido_pago_total").each(function(){
		precio=parseFloat((parseFloat($(this).text())*(1-(parseFloat(descuento_inicial)/100)))).toFixed(2);
		$(this).text(precio);
		$("#table-productos-ticket").addClass("con_descuento");
	});
	$("#btn-confirmar-pedido").removeClass("inactive");
	$("#btn-confirmar-pedido").addClass("activo");	
	$(".opcion_pago").hide("fast");
});
	
/*------------------------------------aplicar descuento pago anticipado----------------------------------*/


$("#btn-anticipado").click(function(){
	descuento_inicial=10;
	/*$("#anticipado").css("width", "100%");
	$("#regular").css("width", "0%");*/
	$("#anticipado-cupon").css("display", "none");
	$("#regular").css("display", "none");
	$("#anticipado").css("margin", "auto");
	$("#anticipado").css("float", "none");
	$("#title_total, #title_total2").hide("fast");

	modo_de_pago="Anticipado";
	total=parseFloat($("#total_a_pagar").text()).toFixed(2);
	total=parseFloat((total*(1-(parseFloat(descuento_inicial)/100)))).toFixed(2);
	$("#total_a_pagar").text(total);
	$("#total_a_pagar").addClass("con_descuento");
	$(this).css("display", "none");
	$(".producto-en-pedido_pago_total").each(function(){
		precio=parseFloat((parseFloat($(this).text())*(1-(parseFloat(descuento_inicial)/100)))).toFixed(2);
		$(this).text(precio);
		$("#table-productos-ticket").addClass("con_descuento");

	});
	$("#btn-confirmar-pedido").removeClass("inactive");
	$("#btn-confirmar-pedido").addClass("activo");
	$(".opcion_pago").hide("fast");
});
	

	
/*------------------------------------aplicar descuento pago anticipado----------------------------------*/


$("#btn-convenio").click(function(){
	
	/*$("#anticipado").css("width", "100%");
	$("#regular").css("width", "0%");*/
	$("#anticipado").css("display", "none");
	$("#anticipado-cupon").css("display", "none");
	$("#regular").css("display", "none");
	$("#modo_pago_convenio").css("margin", "auto");
	$("#modo_pago_convenio").css("float", "none");
	$("#title_total, #title_total2").hide("fast");

	modo_de_pago="Convenio";
	total=parseFloat($("#total_a_pagar").text()).toFixed(2);
	total=parseFloat((total*(1-(parseFloat(descuento_inicial)/100)))).toFixed(2);
	$("#total_a_pagar").text(total);
	$("#total_a_pagar").addClass("con_descuento");
	$(this).css("display", "none");
	$(".producto-en-pedido_pago_total").each(function(){
		precio=parseFloat((parseFloat($(this).text())*(1-(parseFloat(descuento_inicial)/100)))).toFixed(2);
		$(this).text(precio);
		$("#table-productos-ticket").addClass("con_descuento");

	});
	$("#btn-confirmar-pedido").removeClass("inactive");
	$("#btn-confirmar-pedido").addClass("activo");
	$(".opcion_pago").hide("fast");
});
	

/*------------------------------------aplicar descuento pago anticipado----------------------------------*/


$("#btn-regular").click(function(){
	descuento_inicial=0;
	/*$("#anticipado").css("width", "100%");
	$("#regular").css("width", "0%");*/
	$("#anticipado-cupon").css("display", "none");
	$("#anticipado").css("display", "none");
	$("#regular").css("margin", "auto");
	$("#regular").css("float", "none");
	$("#title_total, #title_total2").hide("fast");

	modo_de_pago="Regular";
	total=parseFloat($("#total_a_pagar").text()).toFixed(2);
	total=parseFloat((total*(1-(parseFloat(descuento_inicial)/100)))).toFixed(2);
	$("#total_a_pagar").text(total);
	$("#total_a_pagar").addClass("con_descuento");
	$(this).css("display", "none");
	$(".producto-en-pedido_pago_total").each(function(){
		precio=parseFloat((parseFloat($(this).text())*(1-(parseFloat(descuento_inicial)/100)))).toFixed(2);
		$(this).text(precio);
		$("#table-productos-ticket").addClass("con_descuento");

	});
	$("#btn-confirmar-pedido").removeClass("inactive");
	$("#btn-confirmar-pedido").addClass("activo");
	$(".opcion_pago").hide("fast");
});
	

/*------------------------------------Enviar datos para notificación cuando haya servicio----------------------------------*/

/*$("#enviar_datos_neg_btn").click(function(){
	
	nombre_aviso=$("#nombre_aviso").val()
	apellidos_aviso=$("#apellidos_aviso").val()
	correo_aviso=$("#correo_aviso").val()
	telefono_aviso=$("#telefono_aviso").val()
	campo_correo="correo_aviso";
	r_validacion=validarcorreo(campo_correo);

		if(nombre_aviso!="" && apellidos_aviso!="" && r_validacion==1 && telefono_aviso!=""){
			$("#slide3").removeClass("active");
			$("#slide2").addClass("active");
				setTimeout(function(){
						$.ajax({
						      type: "POST", 
							url: url+"/index.php/servicios/guardar_datos_interesado", 
							data: { nombre_aviso: nombre_aviso, apellidos_aviso: apellidos_aviso, correo_aviso: correo_aviso, telefono_aviso: telefono_aviso, codigo_postal_aviso: base_codigo_postal },
							dataType: "json", 
							success: function (data) {
								if(data!="-1"){
									$("#slide2").removeClass("active");
									$("#slide4").addClass("active");
								}else{
									$("#slide2").removeClass("active");
									$("#slide5").addClass("active");
								}
							}
						});
				},1000);
		}else{

		
			if(nombre_aviso==""){
				$("#nombre_aviso").addClass("incorrecto");
				$("#nombre_aviso").val("");
				$("#nombre_aviso").attr("placeholder", "Ingresa tu nombre por favor");
			}
			if(apellidos_aviso==""){
				$("#apellidos_aviso").addClass("incorrecto")
				$("#apellidos_aviso").val("");
				$("#apellidos_aviso").attr("placeholder", "Ingresa por lo menos tu primer apellido");
			}
			if(r_validacion!="1"){
				$("#correo_aviso").addClass("incorrecto");
				$("#correo_aviso").val("");
				$("#correo_aviso").attr("placeholder", "Ingresa un correo válido");
			}
			if(telefono_aviso==""){
				$("#telefono_aviso").addClass("incorrecto");
				$("#telefono_aviso").val("");
				$("#telefono_aviso").attr("placeholder", "Ingresa un telefono para poder comunicarnos contigo");
			}


		}

});
*/

$("#enviar_datos_neg_btn").click(function(){
	
	nombre_aviso=$("#edit_nombre").val()
	apellidos_aviso=$("#edit_apellidos").val()
	correo_aviso=$("#edit_correo").val()
	telefono_aviso=$("#edit_telefono").val()
	telefono_aviso_2=$("#edit_telefono_celular").val()
	campo_correo="correo_aviso";
	r_validacion=1;

											                 	

			$("#slide3").removeClass("active");
			$("#slide2").addClass("active");
				setTimeout(function(){
						$.ajax({
						      type: "POST", 
							url: url+"/index.php/servicios/guardar_datos_interesado", 
							data: { nombre_aviso: nombre_aviso, apellidos_aviso: apellidos_aviso, correo_aviso: correo_aviso, telefono_aviso: telefono_aviso, telefono_aviso_2: telefono_aviso_2, codigo_postal_aviso: base_codigo_postal },
							dataType: "json", 
							success: function (data) {
								if(data!="-1"){
									location.reload();
								}else{
									location.reload();
								}
							}
						});
				},1000);
		


});


/*----------------------------------------------------------------------------------------------------------enviar datos de codigo------------------------------------------------------------------------------------------------------------------*/

	$("#enviar_datos_codigo").click(function(){
		ingresacodigo = $(".input-convenio:checked").val();
		$("#slide6").removeClass("active");		
		$("#slide2").addClass("active");		
				
			if(ingresacodigo==1){
				codigoconvenio=$("#convenio-codigo").val();
					setTimeout(function(){
						 $.ajax({
			                type: "POST", 
			                url: url+"/index.php/servicios/comprobar_codigo_convenio", 
			                data: { codigo_convenio: codigoconvenio},
			                dataType: "json", 
			                success: function(data){
			                if(data!="-1"){
			                	$(".row-convenio").show("fast");
								$("#slide2").removeClass("active");	
								$("#btn-anticipado").click();	
								descuento_inicial=data[0]["descuento"];
								convenio=data[0]["nombre"];
								$("#descuento_inicial").html(descuento_inicial);
								$("#slide-detalles-pedido").addClass("active");
								$("#title_modo_de_pago").html("Para respetar tu descuento  del "+descuento_inicial+"% por convenio tu pago debe ser anticipado");
								modo_de_pago="Anticipado";
								$("#anticipado").css("display", "inherit");
													$("#modo_pago_convenio").css("display", "inherit");
													$("#anticipado-cupon").css("display", "none!important");
													$("#regular").css("display", "none!important");
													$("#anticipado .display-details p").css("display", "none");
								$("header").removeClass("barrainvisible");
								$("body").removeClass("background");
								$("body").addClass("no-background");
								
							}else{
								$(".row-convenio").hide("fast");
								$("#slide2").removeClass("active");	
								$("#slide6").addClass("active");	
								$("#convenio-codigo").addClass("incorrecto");
								$("#convenio-codigo").val("");
								$("#convenio-codigo").attr("placeholder", "Ingresa un código válido");
							}
			                }
			            });	
					},500);
			}else{
				$("#slide2").removeClass("active");		
				$("#slide-detalles-pedido").addClass("active");
				$("header").removeClass("barrainvisible");
				$("body").removeClass("background");
				$("body").addClass("no-background");
				descuento_inicial=0;
				$("#descuento_inicial").html(descuento_inicial);
				convenio="independiente";

			}
		
	
	});

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
	

	$("#slide7").on("keyup", ".producto", function(e){
		search_producto=$(this).val();
		if(e.keyCode != '38' && e.keyCode != '40' && e.keyCode != '13'){
			seleccionado=0;
		

		if(typeof intervalo !== 'undefined'){
						clearInterval(intervalo);
					}

					detectatecla=0;
						intervalo=setInterval(function(){
							detectatecla++;
							if(detectatecla==3){
								
								
					

								
										$.ajax({
										      type: "POST", 
											  url: url+"/index.php/servicios/buscar_producto", 
										      data: { search_producto: search_producto, servicio_id: servicio_id, sucursal_id: sucursal_id},
											  dataType: "json", 
										      success: function (data) {
										      	html="";
												 	for(i=0; i<data.length; i++){
												 		html+="<p class='registro_de_producto' data-id-producto='"+data[i].id+"' data-number='"+i+"' data-precio-real='"+data[i].precio+"' data-precio-producto='"+(data[i].precio-(data[i].precio*(descuento_inicial/100)))+"'>"+data[i].nombre+"</p>";

												 	} 
												 	if(data=="-1"){
															html="<p class='registro_de_producto'> No hay coincidencias</p>";
														
												 	}
												 	$(".container-results").html(html);
												 	$(".registro_de_producto:first-child").addClass("hover");	
												 }
											
								              	});

								detectatecla=0;
								clearInterval(intervalo);
							}
							
							
							
						},10);

					
			}


					if (e.keyCode == '13') {
					nombre_producto_mostrar=$(".registro_de_producto.hover").text();
					if(nombre_producto_mostrar!=" No hay coincidencias"){
						precio_producto=$(".registro_de_producto.hover").attr("data-precio-producto");
						precio_producto_real=$(".registro_de_producto.hover").attr("data-precio-real");
						identificador_producto=$(".registro_de_producto.hover").attr("data-id-producto");
						$(".producto").val(nombre_producto_mostrar);
						$(".producto").attr("data-precio-real", precio_producto_real);
						$(".producto").attr("data-precio-producto", precio_producto);
						$(".producto").attr("data-id-producto", identificador_producto);
						$("#cantidad").val("1");
						$("#precio").text(precio_producto);
						$("#cantidad").removeAttr("disabled");
						$(".registro_de_producto").remove();
						$(".botones-personalizacion, .botones-opcion-personalizacion").show("fast");
						$("#btn-personalizacion-false").addClass("active");
			$("#btn-personalizacion-false").attr("src", "images/personalizacion-1.png");
			$("#btn-personalizacion-true").attr("src", "images/personalizacion-2.png");
			$("#btn-personalizacion-true").removeClass("active");
				$("#btn_personalizacion_false").click();
				
						}		
						
					}

					if (e.keyCode == '38') {
						  e.preventDefault();
					$(".registro_de_producto.hover").addClass("anterior-hover");	
					$(".registro_de_producto.hover").prev().addClass("hover");	
				    $(".registro_de_producto.anterior-hover").removeClass("hover anterior-hover");	
					}

				    if (e.keyCode == '40') {
				        e.preventDefault();
					$(".registro_de_producto.hover").addClass("anterior-hover");	
					$(".registro_de_producto.hover").next().addClass("hover");	
				    $(".registro_de_producto.anterior-hover").removeClass("hover anterior-hover");	
					}
				   


	          });




$(".reg_colonia_reg").keyup(function(e){
		search_colonia=$(this).val();
		estado_reg=$(".reg_estado_reg option:selected").val();
		municipio_reg=$(".reg_municipio_reg option:selected").val();
	
		if(e.keyCode != '38' && e.keyCode != '40' && e.keyCode != '13'){
			seleccionado=0;
		

		if(typeof intervalo !== 'undefined'){
						clearInterval(intervalo);
					}

					detectatecla=0;
						intervalo=setInterval(function(){
							detectatecla++;
							if(detectatecla==3){
								
								
					

								
										$.ajax({
										      type: "POST", 
											  url: url+"/index.php/servicios/buscar_colonia2", 
										      data: { search_colonia: search_colonia, estado: estado_reg, municipio: municipio_reg},
											  dataType: "json", 
										      success: function (data) {
										      	html="";
												 	for(i=0; i<data.length; i++){

												 		colonias=data[i].colonia.split(";");
												 		for(j=0; j<colonias.length; j++){
												 			colonias[j]=colonias[j].toUpperCase();
												 			search_colonia=search_colonia.toUpperCase();
												 			index=colonias[j].search(search_colonia);
												 			if(index!="-1"){
													 			html+="<p class='registro_colonia' data-codigo='"+data[i].codigo_postal+"' >"+colonias[j]+"</p>";

												 			}
												 		}
												 		

												 	} 
												 	if(data=="-1"){
															html="<p class='registro_colonia'> No hay coincidencias</p>";
															

												 	}
												 	$(".container-colonias-results").html(html);
												 	$(".registro_colonia:first-child").addClass("hover");	
												 	$(".registro_colonia.hover").focus();	
												 	colonia_seleccionada=0;
												 }
											
								              	});

								detectatecla=0;
								clearInterval(intervalo);
							}
							
							
							
						},100);

					
			}


					if (e.keyCode == '13') {
					nombre_colonia=$(this).text();	
						if(nombre_colonia!=" No hay coincidencias"){
							codigo_postal=$(this).attr("data-codigo");	
							if(codigo_postal.length==4){
								codigo_postal="0"+codigo_postal;
							}
							$(".reg_colonia").val(nombre_colonia);
							$(".reg_codigo_postal").val(codigo_postal);
							$(".registro_colonia").remove();
							colonia_seleccionada=1;
							$(".error_colonia").hide("fast");
						}		
										
					}

					if (e.keyCode == '38') {
						  e.preventDefault();
					$(".registro_colonia.hover").addClass("anterior-hover");	
					$(".registro_colonia.hover").prev().addClass("hover");	
				    $(".registro_colonia.anterior-hover").removeClass("hover anterior-hover");	
					}

				    if (e.keyCode == '40') {
				        e.preventDefault();
					$(".registro_colonia.hover").addClass("anterior-hover");	
					$(".registro_colonia.hover").next().addClass("hover");	
				    $(".registro_colonia.anterior-hover").removeClass("hover anterior-hover");	
					}
				   


	          });




$(".reg_colonia").keyup(function(e){
		search_colonia=$(this).val();
		estado=$(".reg_estado option:selected").val();
		municipio=$(".reg_municipio option:selected").val();
		if(e.keyCode != '38' && e.keyCode != '40' && e.keyCode != '13'){
			seleccionado=0;
		

		if(typeof intervalo !== 'undefined'){
						clearInterval(intervalo);
					}

					detectatecla=0;
						intervalo=setInterval(function(){
							detectatecla++;
							if(detectatecla==3){
								
								
					

								
										$.ajax({
										      type: "POST", 
											  url: url+"/index.php/servicios/buscar_colonia", 
										      data: { search_colonia: search_colonia, estado: estado, municipio: municipio},
											  dataType: "json", 
										      success: function (data) {
										      	html="";
												 	for(i=0; i<data.length; i++){

												 		colonias=data[i].colonia.split(";");
												 		for(j=0; j<colonias.length; j++){
												 			colonias[j]=colonias[j].toUpperCase();
												 			search_colonia=search_colonia.toUpperCase();
												 			index=colonias[j].search(search_colonia);
												 			if(index!="-1"){
													 			html+="<p class='registro_colonia' data-codigo='"+data[i].codigo_postal+"' >"+colonias[j]+"</p>";
												 			}
												 		}
												 		

												 	} 
												 	if(data=="-1"){
															html="<p class='registro_colonia'> No hay coincidencias</p>";

												 	}
												 	$(".container-colonias-results").html(html);
												 	$(".registro_colonia:first-child").addClass("hover");	
												 	$(".registro_colonia.hover").focus();	
												 	colonia_seleccionada=0;
												 	
												 }
											
								              	});

								detectatecla=0;
								clearInterval(intervalo);
							}
							
							
							
						},100);

					
			}


					if (e.keyCode == '13') {
					nombre_colonia=$(this).text();	
						if(nombre_colonia!=" No hay coincidencias"){
							codigo_postal=$(this).attr("data-codigo");	
							if(codigo_postal.length==4){
								codigo_postal="0"+codigo_postal;
							}
							$(".reg_colonia").val(nombre_colonia);
							$(".reg_codigo_postal").val(codigo_postal);
							$(".registro_colonia").remove();
							colonia_seleccionada=1;
						}		
										
					}

					if (e.keyCode == '38') {
						  e.preventDefault();
					$(".registro_colonia.hover").addClass("anterior-hover");	
					$(".registro_colonia.hover").prev().addClass("hover");	
				    $(".registro_colonia.anterior-hover").removeClass("hover anterior-hover");	
					}

				    if (e.keyCode == '40') {
				        e.preventDefault();
					$(".registro_colonia.hover").addClass("anterior-hover");	
					$(".registro_colonia.hover").next().addClass("hover");	
				    $(".registro_colonia.anterior-hover").removeClass("hover anterior-hover");	
					}
				   


	          });

	/* 
	$("#slide8").on("keyup", "#calle", function(e){
		


					search_address=$(this).val();
					if(e.keyCode != '38' && e.keyCode != '40' && e.keyCode != '13'){
						seleccionado=0;
					

					if(typeof intervalo !== 'undefined'){
									clearInterval(intervalo);
								}

								detectatecla=0;
									intervalo=setInterval(function(){
										detectatecla++;
										if(detectatecla==3){
											
											
								

											
													$.ajax({
													      type: "POST", 
														  url: url+"/index.php/servicios/buscar_address", 
													      data: { search_address: search_address,  codigo_postal: base_codigo_postal},
														  dataType: "json", 
													      success: function (data) {
													      	html="";
															 	for(i=0; i<data.length; i++){
															 		html+="<p class='registro_de_direccion' data-id-direccion='"+data[i].id+"' data-number='"+i+"' data-calle='"+data[i].calle_numero+"' data-entre_calle_1='"+data[i].entre_calle_1+"' data-entre_calle_2='"+data[i].entre_calle_2+"' data-referencias='"+data[i].referencias+"'>"+data[i].calle_numero+"</p>";

															 	}
															 	$(".container-address").html(html);
															 	$(".registro_de_calle:first-child").addClass("hover");	
															 }
														
											              	});

											detectatecla=0;
											clearInterval(intervalo);
										}
										
										
										
									},100);

								
						}


								if (e.keyCode == '13') {
								nombre_producto_mostrar=$(".registro_de_producto.hover").text();		
								precio_producto=$(".registro_de_producto.hover").attr("data-precio-producto");
								precio_producto_real=$(".registro_de_producto.hover").attr("data-precio-real");
								identificador_producto=$(".registro_de_producto.hover").attr("data-id-producto");
								$(".producto").val(nombre_producto_mostrar);
								$(".producto").attr("data-precio-real", precio_producto_real);
								$(".producto").attr("data-precio-producto", precio_producto);
								$(".producto").attr("data-id-producto", identificador_producto);
								$("#cantidad").val("1");
								$("#precio").text(precio_producto);
								$("#cantidad").removeAttr("disabled");
								$(".registro_de_producto").remove();
							}

								if (e.keyCode == '38') {
									  e.preventDefault();
								$(".registro_de_producto.hover").addClass("anterior-hover");	
								$(".registro_de_producto.hover").prev().addClass("hover");	
							    $(".registro_de_producto.anterior-hover").removeClass("hover anterior-hover");	
								}

							    if (e.keyCode == '40') {
							        e.preventDefault();
								$(".registro_de_producto.hover").addClass("anterior-hover");	
								$(".registro_de_producto.hover").next().addClass("hover");	
							    $(".registro_de_producto.anterior-hover").removeClass("hover anterior-hover");	
								}
		
					
							   


	  });

*/


$("#historial_1").on("click", ".btn_comentario_cliente", function(e){
		comentario=$(this).prev().prev().val();
		producto=$(this).attr("data-producto-id");

		if(calificacion!=0){	
			if(comentario.length>5){
					$(this).parent().parent().hide("slow");
					$(this).parent().parent().prev().hide("slow");
					$(this).parent().parent().parent().append('<div class="title col-xs-12 col-sm-12">Gracias por compartirnos tu opinión</div>');
						$.ajax({
									                type: "POST", 
									                url: url+"/index.php/servicios/guardar_rating", 
									                data: {value: calificacion, producto: producto, comentario: comentario},
									                dataType: "json", 
									                 success: function (data) {
									                	
												   }
									            });
				

			}else{
				alert("Déjanos saber tu opinion sobre nuestro servicio"+comentario);
			}
		}else{
			alert("Asigna una calificación porfavor");
		}


	   });

/*

$(".abrir-aviso").click(function(){

	$(".aviso-modal").modal("show");
});

$(".aviso-modal .btn-secondary").click(function(){
	$(".aviso-modal").modal("hide");
});

*/




	
	$("#slide7").on("click", ".registro_de_producto", function(){
		nombre_producto_mostrar=$(this).text();	
		if(nombre_producto_mostrar!=" No hay coincidencias"){
			precio_producto=$(this).attr("data-precio-producto");
			precio_producto_real=$(this).attr("data-precio-real");
			identificador_producto=$(this).attr("data-id-producto");
			$(".producto").val(nombre_producto_mostrar);
			$(".producto").attr("data-precio-real", precio_producto_real);
			$(".producto").attr("data-precio-producto", precio_producto);
			$(".producto").attr("data-id-producto", identificador_producto);
			$("#cantidad").val("1");
			$("#precio").text(precio_producto);
			$("#cantidad").removeAttr("disabled");
			$(".botones-opcion-personalizacion, .botones-personalizacion").show("fast");
			$("#btn_personalizacion_false").click();

			$("#btn-personalizacion-false").addClass("active");
			$("#btn-personalizacion-false").attr("src", "images/personalizacion-1.png");
			$("#btn-personalizacion-true").attr("src", "images/personalizacion-2.png");
			$("#btn-personalizacion-true").removeClass("active");
			

			$(".registro_de_producto").remove();
		}	
		
	});
	
	



	
	$("#slide10").on("click", ".registro_colonia", function(){
		nombre_colonia=$(this).text();	
		if(nombre_colonia!=" No hay coincidencias"){
			codigo_postal=$(this).attr("data-codigo");	
			if(codigo_postal.length==4){
				codigo_postal="0"+codigo_postal;
			}
			$("#slide10 .reg_colonia_reg").val(nombre_colonia);
			$("#slide10 .reg_codigo_postal").val(codigo_postal);
			$(".registro_colonia").remove();
			colonia_seleccionada=1;
			$(".error_colonia").hide("fast");
		}	
		
	});
	
	$("#slide8").on("click", ".registro_colonia", function(){
		nombre_colonia=$(this).text();	
		if(nombre_colonia!=" No hay coincidencias"){
			codigo_postal=$(this).attr("data-codigo");	
			if(codigo_postal.length==4){
				codigo_postal="0"+codigo_postal;
			}
			$("#slide8 .reg_colonia").val(nombre_colonia);
			$("#slide8 .codigopostal").val(codigo_postal);
			$(".registro_colonia").remove();
			colonia_seleccionada=1;
			$(".error_colonia").hide("fast");
		}	
		
	});
	
	$("#slide16").on("click", ".registro_colonia", function(){
		nombre_colonia=$(this).text();	
		if(nombre_colonia!=" No hay coincidencias"){
			codigo_postal=$(this).attr("data-codigo");	
			if(codigo_postal.length==4){
				codigo_postal="0"+codigo_postal;
			}
			$("#slide16 .reg_colonia").val(nombre_colonia);
			$("#slide16 .codigopostal").val(codigo_postal);
			$(".registro_colonia").remove();
			colonia_seleccionada=1;
			$(".error_colonia").hide("fast");
		}	
		
	});
	
	

$("#startbutton").click(function(){
	$("#slideintro").removeClass("active");
	$("#slide9").addClass("active");
	
});
$("#btn-loggin-slide").click(function(){
	$(".contenedor-slide").removeClass("active");
	$("#slideloggin").addClass("active");
	
});

$(".back").click(function(){
	destino=$(this).attr("data-destino");
	
	$(".contenedor-slide").removeClass("active");
	$("#"+destino).addClass("active");
});


/*--------------------------------------------------------------------------load image--------------------------------------------------------------*/

function isImage(extension)
{
    switch(extension.toLowerCase()) 
    {
        case 'jpg': case 'gif': case 'png': case 'jpeg':
            return true;
        break;
        default:
            return false;
        break;
    }
}

function imageIsLoaded(e) { 
		 $('.avatar-perfil img').attr('src', e.target.result);
	};



$("#file").change(function(){
			var file = this.files[0];
			var imagefile = file.type;
			var match= ["image/jpeg","image/png","image/jpg"];	
			if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
			{
			$('.avatar-perfil img').attr('src','noimage.png');
			return false;
			}
            else
			{
                var reader = new FileReader();	
                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }	
            var file = $('#file')[0].files[0]
			$(".nombre_imagen").val(url+"/media/images/users/"+id_user+"-"+file.name);

            
});

$(".avatar-perfil").click(function(){
	$("#file").click();
})



$("#uploadimage").on("submit", function(e){
	e.preventDefault();
			
			$.ajax({
	        	url: url+"/media/images/carga2.php?id_user="+id_user, 	// Url to which the request is send
				type: "POST",      				// Type of request to be send, called as method
				data:  new FormData(this), 		// Data sent to server, a set of key/value pairs representing form fields and values 
				contentType: false,       		// The content type used when sending data to the server. Default is: "application/x-www-form-urlencoded"
	    	    cache: false,					// To unable request pages to be cached
				processData:false,  			// To send DOMDocument or non processed data file it is set to false (i.e. data should not be in the form of string)
				success: function(data)  		// A function to be called if request succeeds
			    {
					
			    }	        
		   });			
		
	});

$(".otheraccount").click(function(){
	$(".block-loggin-default").css("display", "inherit");
	$(".loggin-facebook-box").css("display", "none")
});


});
