/*Ejercicio1
const edadusuriario = parseInt(prompt('¿Cual es su edad?'));
if (edadusuriario >= 18) {
	alert('Eres mayor de edad');
} else {
	alert('Eres menor de edad');
}
/*EJERCICIO 2 .dadas las 3 calificaciones que el estudiante obtuvo en un curso:
A. Determinar s u promedio.
B. Indicar si el estudiante aprobó o no aprobó el curso.

Las notas deben ser de 1 a 10 y se aprueba con un promedio mayor que 6*/

/*var nota, nota, nota, promedio;
nota = parseFloat(prompt('nota 1'));
nota = parseFloat(prompt('nota 2'));
nota = parseFloat(prompt('nota 3'));

promedio = (nota + nota + nota) / 3;

if (promedio >= 6) {
	document.write('El promedio es ' + promedio + ' APROBADO');
} else {
	document.write('El promedio es ' + promedio + ' DESAPROBADO');
}

/* EJERCICIO 3 Dados los números A y B, determinar si A es mayor, menor o igual que B.*/

/*let num1 = parseFloat(prompt('Escriba un numero de 1 a 100'));
let num2 = parseFloat(prompt('Escriba un numero de 1 a 100'));

if (num1 > num2) {
	alert('el numero ' + num1 + ' es mayor que' + num2);
} else if (num1 < num2) {
	alert('El numero ' + num1 + ' es menor que' + num2);
} else {
	alert('El numero ' + num1 + ' es igual que ' + num2);
}

/*EJERCICIO 4 Que lea 2 números y los imprima en forma ascendente*/

/*let numero1 = parseFloat(prompt('Ingrese el primer numero: '));
let numero2 = parseFloat(prompt('Ingrese el segundo numero: '));

var ascendente = (numero1, numero2).sort(function (a, b) {
	return a - b;
});
alert('Los números en forma ascendente son: ' + ascendente.join(','));
/*EJERCICIO 5 Dado el peso de una persona:
A. Determinar si el peso es menor o igual a 40kg. Muestre el mensaje persona baja de peso
B. Si el peso es entre 41 y 70kg. Muestre el mensaje persona peso promedio
C. Si el peso es mayor a 71kg. Muestra el mensaje persona con sobre  peso*/

/*let peso = parseFloat(prompt('Ingrese su peso en kilogramos'));

if (peso < 40) {
	alert('Persona baja de peso');
} else if (peso >= 41 + peso <= 70) {
	alert('La persona tiene peso promedio');
} else if (peso > 71) {
	alert('La persona tiene sobrepeso');
}*/
