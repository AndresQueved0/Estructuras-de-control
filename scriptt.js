/* EJERCICIO 1

let edad = 17;
if (edad <= 18) {
	alert('Es menor de edad');
} else {
	alert('Es mayor de edad');
}
*/

/*EJERCICIO 2

var nota, nota, nota, promedio;
nota = parseFloat(prompt('nota 1'));
nota = parseFloat(prompt('nota 2'));
nota = parseFloat(prompt('nota 3'));

promedio = (nota + nota + nota) / 3;

if (promedio >= 6) {
	document.write('El promedio es ' + promedio + ' APROBADO');
} else {
	document.write('El promedio es ' + promedio + ' DESAPROBADO');
}
*/

/*EJERCICIO 3

let num1 = parseFloat(prompt('Escriba un numero de 1 a 100'));
let num2 = parseFloat(prompt('Escriba un numero de 1 a 100'));

if (num1 > num2) {
	alert('El numero ' + num1 + ' es mayor que ' + num2);
} else if (num1 < num2) {
	alert('El numero ' + num1 + ' es menor que ' + num2);
} else {
	alert('El numero ' + num1 + ' es igual que ' + num2);
}
*/

/*EJERCICIO 4

let numero1 = parseFloat(prompt('Ingrese el primer numero: '));
let numero2 = parseFloat(prompt('Ingrese el segundo numero: '));

var ascendentes = [numero1, numero2].sort(function (a, b) {
	return a - b;
});
alert('Los números en forma ascendente son: ' + ascendentes.join(',')); 
*/

/*EJERCICIO 5*/
let peso = parseFloat(prompt('Ingrese su peso en kilogramos'));

if (peso < 40) {
	alert('Persona baja de peso');
} else if (peso >= 40 + peso >= 70) {
	alert('La persona tiene peso promedio');
} else (peso => 70);
alert('La persona tiene sobrepeso');
/*
let peso = parseFloat(prompt('Ingrese su peso en kilogramos'));

switch (peso) {
	case 1:
		peso < 40;
		alert('Persona baja de peso');
		break;
	case 2:
		peso >= 41 + peso <= 70;
		alert('La persona tiene peso promedio');
		break;
	default:
        peso >= 70;
		alert('La persona tiene sobrepeso');
}*/
