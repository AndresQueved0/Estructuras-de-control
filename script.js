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

/*EJERCICIO 5

let peso = parseFloat(prompt('Ingrese su peso en kilogramos'));
if (peso < 40) {
	alert('Persona baja de peso');
} else if ((peso >= 40, peso <= 70)) {
	alert('La persona tiene peso promedio');
} else alert('La persona tiene sobrepeso');
*/

/*EJERCICIO 6

let num=parseFloat (prompt("Ingrese un número para ver con que día corresponde"));
    switch (numero) {
        case 1:
            alert("Día 1 - Lunes");
            break;
        case 2:
            alert("Día 2 - Martes");
            break;
        case 3:
            alert("Día 3 - Miercoles");
            break;
        case 4:
            alert("Día 4 - Jueves");
            break;
        case 5:
            alert("Día 5 - Viernes");
            break;
        case 6:
            alert("Día 6 - Sabado");
            break;
        case 7:
            alert("Día 7 - Domigo");
            break;
        default:
            alert("ESCRIBIO UN NÚMERO FUERA DEL RANGO. ESCRIBA UN NÚMERO ENTRE 1 Y 7");
    }
*/

/*EJERCICIO 7 

var Total = parseFloat(prompt("Ingrese el precio total de su compra:"));

var descuento;
if (Total >=1000){
    descuento = Total * 0.2; 
}else{
    descuento = Total * 0.05;
}
var pago = Total - descuento;
alert ("La cantidad a pagar es: " + pago.toFixed(2) + " pesos.");
*/

/*EJERCICIO 8

var horas = parseInt(prompt("Ingrese el número de horas trabajadas:"));

var salario;
if (horasTrabajadas <= 40) {
    salario = horas * 16000;
} else{
    salario = horas * 20000;
}
    alert("Su salario semanal es de " + salario.toFixed(2) + " pesos ");
*/

/*EJERCICIO 9

var nombre1 = prompt("Escriba el nombre de la primera persona:");
var edad1 = parseInt(prompt("Escriba la edad de la primera persona"));

var nombre2 = prompt("Escriba el nombre de la segunda persona:");
var edad2 = parseInt(prompt("Escriba la edad de la segunda persona"));

var mayor;
    if (edad1 > edad2) {
        mayor = nom1;
    } else if (edad2 > edad1) {
        mayor = nom2;
    } else {
        mayor = "Ambas personas tienen la misma edad";
    }
        alert("La persona mayor es: " + mayor);
*/

/*EJERCICIO 10

var cantidadCamisas = parseInt(prompt("Ingrese la cantidad de camisas compradas:"));
var precioCamisa = parseFloat(prompt("Ingrese el precio de cada camisa:"));
var TotalSinDescuento = cantidadCamisas * precioCamisa;
var descuento; 
    if (cantidadCamisas >=3) {
        descuento = TotalSinDescuento * 0.2;
    } else {
        descuento = TotalSinDescuento * 0.1;
    }
    var TotalConDescuento = TotalSinDescuento - descuento;
        alert("El total a pagar por la compra de camisas es: " + TotalConDescuento.toFixed(2) + "pesos.");
*/

/*EJERCICIO 11

var num1 = parseFloat(prompt("Escriba el primer número:"));
var num2 = parseFloat(prompt("Escriba el segundo número:"));
    if (num1 === num2) {
        var resultado = num1 * num2;
            alert("El resultado de la multiplicación es: " + resultado);
    } else if (num1 > num2) {
        var resultado = num1 - num2;
            alert("El resultado de la resta es: " + resultado);
    } else {
        var resultado = num1 + num2;
            alert("El resultado de la suma es: " + resultado);
    }
*/

/*EJERCICIO 12

let opcion=prompt("1.suma 2.resta 3.división 4.multiplicación");
let num1=prompt("Digite el primer número");
let num2=prompt("Digite el segundo número");

    if(opcion==1){
        suma=parseInt(num1) + parseInt(num2);
            alert("La suma es: "+suma);
    }else if(opcion==2){
        resta=parseInt(num1) - parseInt(num2);
            alert("La resta es: "+resta);
    }else if(opcion==3){
        división=parseInt(num1) / parseInt(num2);
            alert("La división es: "+división);
    }else {
        multiplicación=parseInt(num1) * parseInt(num2);
            alert("La multiplicación es: "+multiplicación);
    }
*/