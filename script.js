
function fizzbuzz(){
    for(let i = 1;i <= 1000;i++){
        if(i % 3===0 && i % 5===0){
            console.log("fizzbuzz")
        }
        else if(i % 3 === 0){
            console.log("fizz")
        }
        else if(i % 5 === 0){
            console.log("buzz")
        }
        else{
            console.log(i)
        }
    }
}

//fizzbuzz();

/* Este problema fue planteado por Apple. Dada una lista ordenada de números enteros, eleva al cuadrado los elementos y proporciona el resultado en orden.
Por ejemplo, dado [-9, -2, 0, 2, 3], devuelve [0, 4, 4, 9, 81].

function raiseArray (array) {
    
    let resultado = [];

    for (let i = 0; i <= array.length; i++) {
        let numero = array[i];
        resultado.push(numero ** 2);
    }
    
    resultado.sort();

    return resultado;
}*/

/* Crea una función que pida un número por pantalla y devuelva su tabla de multiplicar en un array.

Ejemplo --> Tabla del 3
["3x1=3","3x2=6","3x3=9","3x4=12","3x5=15","3x6=18","3x7=21","3x8=24","3x9=27","3x10=30"] */

let tabla = [];
function generadorTabla(number) {
  for (let i = 1; i <= 10; i++) {
    tabla.push(`${number}x${i} = ${number * i}`);
  }
  return tabla;
}
const resultado = generadorTabla(Number(prompt("Introduce un número")));
console.log(resultado);