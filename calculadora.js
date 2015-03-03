
var operador = 0.0;
var operacion = '';

function redondeo(numero, decimales){
	var flotante = parseFloat(numero);
	var resultado = Math.round(flotante*Math.pow(10,decimales))/Math.pow(10,decimales);
	return resultado;
}

function eval (num , ope){
	
	switch(ope) {
		case '+':
		operador=operador+num;
		$('#resultado').text('');
		break;
		
		case '-':
		operador=operador-num;
		$('#resultado').text('');
		break;
		
		case '\u00F7':
		operador=operador/num;
		$('#resultado').text('');
		break;
		
		case'\u00D7':
		operador=operador*num;
		$('#resultado').text('');
		break;

		case'%':
		operador=redondeo(num/100,10);
		$('#resultado').text(operador.toString());
		break;

	}
}

jQuery(document).ready(function(){

	$('div#result').text(redondeo(operador,10).toString());
	//actualizamos result
	$(document).click(function(){
		$('div#result').text(redondeo(operador,10).toString());
	})
	$('span').mousedown(function(){
		//sombra
		if($(this).hasClass('numeros') || $(this).hasClass('cero') || $(this).hasClass('operador') || $(this).hasClass('ac')){
			$(this).addClass('press');
		}
		//numeros
		if($(this).hasClass('numeros') || $(this).hasClass('cero')){
			if(operacion=='='){
				$('#resultado').text('');
				operacion='';
			}
			var p = $(this).text();
			$('#resultado').append(p);
		}
		//c
		if($(this).hasClass('ac')){
			$('#resultado').text('');
			operador=0;
			operacion='';
		}
		//operador distinto de (=) y (+/-)
		if($(this).hasClass('operador') && $(this).hasClass('igual')==false && $(this).text()!='\u00B1'){

			if(operacion!=''){
				if(operacion=='='){
					if($(this).text()!='%'){
						operacion=$(this).text();
						$('#resultado').text('');
					}else{
						operador=(parseFloat($('#resultado').text())/100);
						$('#resultado').text(operador.toString());
					}
					
					
				}else if($('#resultado').text()==''){
					operacion=$(this).text();
				}else{
					eval(parseFloat($('#resultado').text()),operacion);
					operacion=$(this).text();
					$('#resultado').text('');
				}
				
			}else if($(this).text()!='%'){//distinto de porcentajes
				operador = parseFloat($('#resultado').text());
				$('#resultado').text('');
				operacion = $(this).text();
			}else{//porcentajes
				eval($('#resultado').text(),$(this).text());
			}
		}

		//igual
		if($(this).hasClass('igual')){
			if($('#resultado').text()!=''){
				eval(parseFloat($('#resultado').text()),operacion);
			}
			var res = redondeo(operador,10);
			$('#resultado').text(res.toString());
			operacion = $(this).text();
		}

		if($(this).text()=='\u00B1'&& $('#resultado').text()!=''){
			$('#resultado').text(parseFloat($('#resultado').text())*(-1));
		}
		
	});
$('span').mouseup(function(){
	if($(this).hasClass('numeros')||$(this).hasClass('cero')||$(this).hasClass('operador')||$(this).hasClass('ac')){
		$(this).removeClass('press');
	}
})

$(document).keydown(function(event){
	//alert(event.keyCode);
	switch(event.keyCode) {
		case 49:
		$('span:contains("1")').mousedown();
		break;
		case 50:
		$('span:contains("2")').mousedown();
		break;
		case 51:
		$('span:contains("3")').mousedown();
		break;
		case 52:
		$('span:contains("4")').mousedown();
		break;
		case 53:
		$('span:contains("5")').mousedown();
		break;
		case 54:
		$('span:contains("6")').mousedown();
		break;
		case 55:
		$('span:contains("7")').mousedown();
		break;
		case 56:
		$('span:contains("8")').mousedown();
		break;
		case 57:
		$('span:contains("9")').mousedown();
		break;
		case 96:
		$('span:contains("0")').mousedown();
		break;
		case 97:
		$('span:contains("1")').mousedown();
		break;
		case 98:
		$('span:contains("2")').mousedown();
		break;
		case 99:
		$('span:contains("3")').mousedown();
		break;
		case 100:
		$('span:contains("4")').mousedown();
		break;
		case 101:
		$('span:contains("5")').mousedown();
		break;
		case 102:
		$('span:contains("6")').mousedown();
		break;
		case 103:
		$('span:contains("7")').mousedown();
		break;
		case 104:
		$('span:contains("8")').mousedown();
		break;
		case 105:
		$('span:contains("9")').mousedown();
		break;
		case 96:
		$('span:contains("0")').mousedown();
		break;
		case 110:
		$('span:contains(".")').mousedown();
		break;
		case 8:
		$('span:contains("C")').mousedown();
		event.preventDefault();
		return false;
		break;
		case 13:
		$('span:contains("=")').mousedown();
		break;
		case 107:
		$('span:contains("+")').mousedown();
		break;
		case 109:
		$('span:contains("-")').mousedown();
		break;
		case 106:
		$('span:contains("\u00D7")').mousedown();
		break;
		case 111:
		$('span:contains("\u00F7")').mousedown();
		break;




	}
});

$(document).keyup(function(event){
	$('div#result').text(redondeo(operador,10).toString());
	switch(event.keyCode) {
		case 49:
		$('span:contains("1")').mouseup();
		break;
		case 50:
		$('span:contains("2")').mouseup();
		break;
		case 51:
		$('span:contains("3")').mouseup();
		break;
		case 52:
		$('span:contains("4")').mouseup();
		break;
		case 53:
		$('span:contains("5")').mouseup();
		break;
		case 54:
		$('span:contains("6")').mouseup();
		break;
		case 55:
		$('span:contains("7")').mouseup();
		break;
		case 56:
		$('span:contains("8")').mouseup();
		break;
		case 57:
		$('span:contains("9")').mouseup();
		break;
		case 96:
		$('span:contains("0")').mouseup();
		break;
		case 97:
		$('span:contains("1")').mouseup();
		break;
		case 98:
		$('span:contains("2")').mouseup();
		break;
		case 99:
		$('span:contains("3")').mouseup();
		break;
		case 100:
		$('span:contains("4")').mouseup();
		break;
		case 101:
		$('span:contains("5")').mouseup();
		break;
		case 102:
		$('span:contains("6")').mouseup();
		break;
		case 103:
		$('span:contains("7")').mouseup();
		break;
		case 104:
		$('span:contains("8")').mouseup();
		break;
		case 105:
		$('span:contains("9")').mouseup();
		break;
		case 96:
		$('span:contains("0")').mouseup();
		break;
		case 110:
		$('span:contains(".")').mouseup();
		break;
		case 8:
		$('span:contains("C")').mouseup();
		break;
		case 13:
		$('span:contains("=")').mouseup();
		break;
		case 107:
		$('span:contains("+")').mouseup();
		break;
		case 109:
		$('span:contains("-")').mouseup();
		break;
		case 106:
		$('span:contains("\u00D7")').mouseup();
		break;
		case 111:
		$('span:contains("\u00F7")').mouseup();
		break;

	}
});
});