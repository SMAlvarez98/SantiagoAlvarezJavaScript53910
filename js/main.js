// Declaracion de variables.
let precio = 421741
let precio3 = precio / 3
let precio6 = precio / 6
let precio12 = precio / 12
let precio18 = precio / 18

// Se le pide al usuario mediante la funcion prompt, que ingrese su nombre.
let usuario= prompt("Bienvenido a Guitarras Alvarez. Por favor ingresa tu nombre");
alert("Bienvenido/a " + usuario);
// Se le informa al usuario el precio final del producto. A continuacion, mediante la funcion prompt, se le pide que ingrese la cantidad de cuotas.
let cuotas = parseInt (prompt('El precio final de la guitarra modelo Gandorcha SG 3000 es de 421741 ¿En cuantas cuotas le gustaría pagarlo? (0, 3, 6, 12, 18)'));
// Ciclo condicional basado en la cantidad de cuotas que el cliente desee.
while (cuotas != 0 && cuotas != 3 && cuotas != 6 && cuotas != 12 &&  cuotas != 18) {
    // Bloque de ejecucion
    prompt('Por favor, ingrese un numero de cuotas valido (0, 3, 6, 12, 18)');
    // Condicion de salaida
    cuotas = prompt ('Por favor, ingrese un numero de cuotas valido (0, 3, 6, 12, 18)')
}
if (cuotas == 0) {
    alert('El precio final es de ' + precio)
}
if (cuotas == 3) {
    alert('El precio final es de ' + precio3.toFixed(2))
}
if (cuotas == 6) {
    alert('El precio final es de ' + precio6.toFixed(2))
}
if (cuotas == 12) {
    alert('El precio final es de ' + precio12.toFixed(2))
}
if (cuotas == 18) {
    alert('El precio final es de ' + precio18.toFixed(2))
}








/*
let ingreso = parseInt(prompt("Ingresa un numero para saber si es primo"));
let esPrimo = true;
for (let i = 2; i < ingreso; i++) {
    if (ingreso % i == 0){
        console.log("Ademas de dividir por 1 y por si mismo " + ingreso + " se divide por: " + i);
        esPrimo = false
    }
}
if (esPrimo) {
    console.log("El numero es primo");
} else {
    console.log("El numero NO es primo");
}

for(let i=10 ; i>0 ; i--){
    console.log("Cuenta regresiva: " + i)
}
console.log("Despegue");


    desde  ; hasta  ; actualizacion
for(let i=0 ; i < 10 ; i = i + 1){  para resumir i = i + 1 = i++
    //bloque de ejecucion
    alert("La variable i vale: " + i)
}


let num1= prompt("Escribe un numero para sumar");
let num2= prompt("Escribe otro numero para sumar");

num1= parseInt (num1)
num2= parseInt (num2)

let result= num1 + num2;
alert ("El resultado de la suma entre " + num1 + "+" + num2 + " es: " + result);
console.log ("El resultado de la suma entre " + num1 + "+" + num2 + " es: " + result);
*/

