$(document).ready(function(){

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
responsive=0;
id_user=readCookie();
codigo_cupon="N/A";
codigo_convenio="N/A"

html="";

if(id_user!="null"){
	$("#cerrar_sesion").css("display", "inherit");
	$("#editar_perfil").css("display", "inherit");
	$("#hacer_pedido").css("display", "inherit");
	$("#historial_pedidos").css("display", "inherit");
}else{
	location.href = "index.html";
}




	
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


											$.ajax({
								                type: "POST", 
								                url: "http://malfabon.com.mx/proyectos/7clean/index.php/servicios/traer_historial_pedidos", 
								                data: { id_user: id_user},
								                dataType: "json", 
								                 success: function (data) {
								                 	if(data!="-1"){
								                 		for(i=0; i<data.length; i++){
									                 			html+='<div class="content-historial">';
									                 			html+='<div class="historial-ticket"><div class="title">Ticket:</div><div clas="dato">'+data[i].ticket_aplicado+'</div></div>';
									                 			html+='<div class="historial-f_pedido"><div class="title">Fecha de recogida:</div><div clas="dato">'+data[i].fecha_de_salida+'</div></div>';
									                 			html+='<div class="historial-f_salida"><div class="title">Fecha de entrega:</div><div clas="dato">'+data[i].fecha_de_entrega+'</div></div>';
									                 			html+='<div class="historial-recurrencia"><div class="title">Recurrencia:</div><div clas="dato">'+data[i].recurrencia+'</div></div>';
									                 			html+='<div class="historial-modo_de_pago"><div class="title">Modo de pago:</div><div clas="dato">'+data[i].modo_de_pago+'</div></div>';
									                 			html+='<div class="historial-estado"><div class="title">Etapa:</div><div clas="dato">'+data[i].estado+'</div></div>';
									                 			html+='<div class="historial-monto"><div class="title">Total:</div><div clas="dato">$ '+data[i].monto+'</div></div>';
								                 			if(data[i].calificacion==""){
								                 				html+='<div class="historial-calificacion"><div class="title">Calificación:</div><div clas="dato"><input id="input-id" name="input-name" type="number" class="rating" min=1 max=10 step=2 data-size="lg" data-rtl="true"></div></div>';
								                 			}else{
								                 				html+='<div class="historial-calificacion"><div class="title">Calificación:</div><div clas="dato">'+data[i].calificacion+'</div></div>';
								                 			}
																html+='</div>';

								                 		}

								                 	}
								                 	
								                 	$("#historial_1").html(html);
								                }
								            });

			$("#input-id").rating();
			$("#input-id").rating({min:1, max:10, step:2, size:'lg'});



});
