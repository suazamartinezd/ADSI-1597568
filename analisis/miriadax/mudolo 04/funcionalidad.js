var operandoa;
var operandob;
var operacion;


function init(){
	//variables
	var xala2 = document.getElementById("xala2");
	var inverso = document.getElementById("inverso");
	var cuadrada = document.getElementById("cuadrada");
	var xalay = document.getElementById("xalay");
	var resultado = document.getElementById("resultado");
	var reset = document.getElementById("reset");
	var suma = document.getElementById("suma");
	var resta = document.getElementById("resta");
	var multiplicacion = document.getElementById("multiplicacion");
	var division = document.getElementById("division");
	var igual = document.getElementById("igual")
	var uno = document.getElementById("uno");
	var dos = document.getElementById("dos");
	var tres = document.getElementById("tres");
	var cuatro = document.getElementById("cuatro");
	var cinco = document.getElementById("cinco");
	var seis = document.getElementById("seis");
	var siete = document.getElementById("siete");
	var ocho = document.getElementById("ocho");
	var nueve = document.getElementById("nueve");
	var cero = document.getElementById("cero");

	//eventos
	uno.onclick = function(e){
		resultado.innerText += "1";
	}
	dos.onclick = function(e){
		resultado.innerText +=  + "2";
	}
	tres.onclick = function(e){
		resultado.innerText +=  + "3";
	}
	cuatro.onclick = function(e){
		resultado.innerText +=  + "4";
	}
	cinco.onclick = function(e){
		resultado.innerText += + "5";
	}
	seis.onclick = function(e){
		resultado.innerText += + "6";
	}
	siete.onclick = function(e){
		resultado.innerText += + "7";
	}
	ocho.onclick = function(e){
		resultado.innerText += + "8";
	}
	nueve.onclick = function(e){
		resultado.innerText += + "9";
	}
	cero.onclick = function(e){
		resultado.innerText += + "0";
	}

	reset.onclick = function(e){
		resetear();
	}
	suma.onclick = function(e){
		operandoa = resultado.innerText;
		operacion = "+";
		limpiar();
	}
	resta.onclick = function(e){
		operandoa = resultado.innerText;
		operacion = "-";
		limpiar();
	}
	multiplicacion.onclick = function(e){
		operandoa = resultado.innerText;
		operacion = "*";
		limpiar();
	}
	division.onclick = function(e){
		operandoa = resultado.innerText;
		operacion = "/";
		limpiar();
	}
	igual.onclick = function(e){
		operandob = resultado.innerText;
		resolver();
	}
	xala2.onclick = function(e){
		operandoa = resultado.innerText;
		operacion = "x2";
		limpiar();
	}
	inverso.onclick = function(e){
		operandoa = resultado.innerText;
		operacion = "1/x";
		limpiar();
	}
	cuadrada.onclick = function(e){
		operandoa = resultado.innerText;
		operacion = "√";
		limpiar();
	}
	xalay.onclick = function(e){
		operandoa = resultado.innerText;
		operacion = "xy";
		limpiar();
	}



}

function limpiar(){
	resultado.innerText = "";
}

function resetear(){
	debugger;
	resultado.innerText = "";
	operandoa = 0;
	operandob = 0;
	operacion = "";
}

function resolver(){
	var res = 0;
	switch(operacion){
		case "+":
		res = parseFloat(operandoa) + parseFloat(operandob);
		break;

		case "-":
		res = parseFloat(operandoa) - parseFloat(operandob);
		break;

		case "*":
		res = parseFloat(operandoa) * parseFloat(operandob);
		break;

		case "/":
		res = parseFloat(operandoa) / parseFloat(operandob);
		break;

		case "x2":
		res = parseFloat(operandoa) * parseFloat(operandoa);
		break;

		case "1/x":
		res = (1) / parseFloat(operandoa);
		break;

		case "raiz":
		res = Math.pow(parseFloat(operandoa), parseFloat(operandob));
		break;

		case "xy":
		res = Math.pow(parseFloat(operandoa), parseFloat(operandob));
		break;
	}
	resetear();
	resultado.innerText = res;
}
init();