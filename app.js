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

/*e.- Recorrer el array utilizando el bucle while (usar la propiedad length del array
en la condición) y guardar los valores en una variable del tipo string
concatenandolos. Mostrar el valor de la variable al final. */
var Arreglo = [ "River", "Boca", "Racing" ,"San Lorenzo"];
var i = 0;
while(i < Arreglo.length )
{
console.log(Arreglo[i]);
i++;
} 

/*f.- Recorrer el array utilizando el bucle for y mostrar cada uno de los valores
convirtiéndolos a mayúsculas (método toUpperCase de la clase String) */
var Arreglo = [ "banana", "manzana", "pera" ,"anana"];
for(var element of Arreglo) 
{
    console.log(element.toUpperCase());
}

/*Ejercicio 4.- Crear una variable que contenga el valor 'La Manzana es Verde' y utilizarlo para: */

/*a.- Convertirlo a minúscula y mostrar el resultado (método toLowerCase). */
var Palabra = "La Manzana es Verde";
console.log(Palabra.toLocaleLowerCase());

/*b.- Obtener los últimos 4 caracteres del string (método substring).*/
var palabraNueva;
var palabra = 'La Manzana es Verde';
palabraNueva = palabra.substring(0,5);
console.log(palabraNueva);
