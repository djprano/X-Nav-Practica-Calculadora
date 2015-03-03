
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
		operador=operador/100;
		$('#resultado').text(operador.toString());
		break;

	}
}

jQuery(document).ready(function(){

	$('div#result').text(redondeo(operador,10).toString());
	//actualizamos result
	$(document).click(function(){
		$('div#result').text(operador.toString());
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
				var a = parseFloat($('#resultado').text())/100;
				$('#resultado').text(a.toString());
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
});