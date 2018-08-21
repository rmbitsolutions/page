
/* Funciones Javascript  */

function suma(){
	var n1 = document.getElementById("numero1").value;
	var n2 = document.getElementById("numero2").value;
	
	var total = (parseInt(n1) + parseInt(n2));
	
	resultado.value = total;
}

function resta(){
	var n1 = document.getElementById("numero1").value;
	var n2 = document.getElementById("numero2").value;
	
	var total = (parseInt(n1) - parseInt(n2));
	
	resultado.value = total;
}

function multiplica(){
	var n1 = document.getElementById("numero1").value;
	var n2 = document.getElementById("numero2").value;
	
	var total = (parseInt(n1) * parseInt(n2));
	
	resultado.value = total;
}

function divide(){
	var n1 = document.getElementById("numero1").value;
	var n2 = document.getElementById("numero2").value;
	
	var total = (parseInt(n1) / parseInt(n2));
	
	resultado.value = total;
}

function alerta(){
	alert("Esto es una Alerta");
}


/* Funsion selectores jquery */
	$(document).on("ready", function(){
		
		$('#a').text('<h1>Esto es un elemnto texto Incrustado con id de selector</h1>');
		
		$('div.c').html('<h1>Esto es un elemnto html Incrustado con la clase</h1>');
		
		$('#s').html('<h1>En el codigo se mustra como se manejaron los estilos desde jquery</h1>')
		
		/* Manejo de estilo mediante la clase */
		
		$('div.c').css({
			
			'color':'red',
			'background':'#222222',
			
		})
		
		$('#s').css({
			
			'color':'#FFFFFF',
			'background':'#222222',
		})
		
	})



/* Validaciones del formulario de Empleo con javascript */
function validacion (id) {
	var e = document.getElementById(id);
	if (e.checkValidity())
		e.style.borderColor="blue";
	else
		e.style.borderColor="red";
}







