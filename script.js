//Realizar un programa que por medio de una funcion nos indique si el numero qe el ususri ingresa es rimo o no

var buscaPrimos=[2,4,5];
	function esPrimo(arreglo){
		var contador=0;
		var resultado="numeros primos";

		for(var i=0;i <= arreglo.length; ++i){

			for(var j=0; j arreglo[i];++j){

				if(arreglo[i]%j==0){

					contador++;
				}
			}
			if(contador<3){
				resultado=resultado*arreglo[i];
			}
		}
		

	}
esPrimo(buscaPrimos);

//sumar dos numeros, ostar cuadrado del resultado
function sumaCuadrado(num1,num2){
	var suma=0;
	var cuadrado=0;
	suma=num1+num2;
	cuadrado=suma*suma;
	return cuadrado;
}
sumaCuadrado(4,6);

//Funcion que devuelva si es par o impar
function esPar(numero){
	
	var resul=false;
	if(numero%2===0){
		resul=true;
	}else{
		resul=false;
	}
	if(resul){
	  var texto= numero+" es par";
	}else{
	  var texto=numero +" es Impar";
	}
	return texto;
}
esPar(5);


//Funcion a la cual le envaremos tres enteros y muestre el menor
var menorMayor=[6,3,20];

function menor(arreglo){

	return Math.min.apply(null, menorMayor)//=>buesca el numero menor de un arreglo 
	//var max=Math.max.apply(null, numeros1);//=>busca el numero mayor de un arreglo
}

