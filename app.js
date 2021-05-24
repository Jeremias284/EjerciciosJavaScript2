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

/* c.- Obtener los caracteres 3, 4 y 5 del string (método substring).*/
var palabraNueva;
var palabra = 'La Manzana es Verde';
palabraNueva = palabra.substring(3,6);
console.log(palabraNueva);

/*d.- Obtener un array con las palabras que hay en el string, asumiendo que cada
palabra termina cuando se encuentra el carácter espacio (método split) */
var palabraNueva;
var palabra = 'La Manzana es Verde';
palabraNueva = palabra.split();
console.log(palabraNueva);


/*Ekercicio 5.- Crear una función que reciba como parámetro un string y que devuelva ese mismo
string con la primera letra convertida a mayúscula */
function ConvertirMayuscula(texto){
    return texto.split(' ').map( i => i[0].toUpperCase() + i.slice(1)).join(' ')

}
console.log(ConvertirMayuscula('psicologo'))

/*Ejercicio 6.- Crear una función que reciba como parámetro un string y que devuelva ese mismo
string con la primera letra DE CADA PALABRA convertida a mayúscula. */
function ConversionMayuscula(texto){
    return texto.split(' ').map( i => i[0].toUpperCase() + i.slice(1)).join(' ')

}
console.log(ConversionMayuscula('jere como andas'))

/*Ejercicio 7.- Crear una función que reciba como parámetro un string y que devuelva la cantidad
de vocales que posee. */
function contarVocales(texto) {
    var contadorVocales = 0;
    var vocales =  ["a", "e" , "i", "o", "u", "A", "E", "I", "O", "U"];
    for(var i = 0; i < texto.length; ++i){
        if(vocales.indexOf(texto[i]) >= 0){
            ++contadorVocales;
        }     
    }
    return contadorVocales;

}
console.log(contarVocales('Hola'));
