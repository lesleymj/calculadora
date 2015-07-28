

var operacion = ' ';
var resultado = ' ';

function enviarNumero(calcular) {
		alert("USTED SELECIONO EL NUMERO:   "+calcular);
		operacion = operacion + calcular;
		inserteTesxto();
}



function enviarSigno(calcular) {
		alert("USTED SELECIONO EL SIGNO:   "+calcular);
		operacion = operacion + calcular;
		inserteTesxto();
}



function igual() {
		resultado=eval(operacion);
		alert("EL RESULTADO DE LA OPERACION ES:   "+resultado)
	operacionFinal(resultado);
}

function borrar() {
	operacion='';
	resultado='';
	document.getElementById("total").innerHTML="";
}



function insertetesxto(){
	document.getElementById("total").innerHTML=operacion;
}



function operacionFinal(calcular){
	document.getElementById("total").innerHTML=operacion+"="+resultado;
}