/*Ejercicio 1: Completar las condiciones de los if del siguiente script para que los mensajes de los
alert se muestren de forma correcta.
 
var num1 = 5;
var num2 = 8;
if((num1 - num2) <= 0) 
{
alert("num1 no es mayor que num2");
}
if((num1 + num2) > num1) 
{
    alert("num2 es positivo");
}
if((num1 * num2) != 0) 
{
    alert("num1 es negativo o distinto de cero");
}
if(num2 - 3 == num1) 
{
    alert("Incrementar en 1 unidad el valor de num1 lo hace mayor que num2");
}
*/
/*Ejercicio 2.- Crear un Array que contenga al menos 3 nombres de frutas y utilizar el bucle for in
para recórrelo y mostrar dichos valores con la función console.log*/
var Arreglo = [ "banana", "manzana", "pera" ,"anana"];
for(var element of Arreglo) 
{
    console.log(element);
}

/*Ejercicio 3.- Al Array del ejercicio anterior utilizarlo para */

/*a.- Ordenar el array alfabéticamente y mostrar el resultado (método sort). */
var Arreglo = [ "banana", "manzana", "pera" ,"anana"];
console.log(Arreglo.sort());

/*b.- Agregar un elemento al final y al principio del arreglo (métodos push y
unshift) */
var Arreglo = [ "banana", "manzana", "pera" ,"anana"];
Arreglo.unshift('Inicio');
Arreglo.push('Fin');
console.log(Arreglo);

/*c.- Eliminar un elemento al final y al principio del arreglo (métodos pop y
shift). */  
var Arreglo = [ "banana", "manzana", "pera" ,"anana"];
Arreglo.shift();
Arreglo.pop();
console.log(Arreglo);

/*d.- Invertir el orden de los elementos en el array (método reverse). */
var Arreglo = [ "banana", "manzana", "pera" ,"anana"];
Arreglo.reverse();
console.log(Arreglo);
