// let mensaje = "HELLO WORLD!"; // TIPO DE DATO STRING
// console.log(mensaje);
// mensaje = 4; // TIPO DE DATO NUMERO
// console.log(mensaje);
// mensaje = 4.5; // TIPO DE DATO NUMERO
// console.log(mensaje);

// const mensaje = "HELLO WORLD!";
// console.log(mensaje);
// mensaje = 4;
// console.log(mensaje);

// OPERADORES ARITMETICOS
// let a = 0;
// let b = 2;

// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a * b);
// console.log(a % b);

// let usuario;
// let permisos = "0";

// if (usuario && permisos) {
//   console.log("Puede acceder");
// } else {
//   console.log("No tiene permisos o usuario no existe");
// }

// console.log("Valor de permisos " + !permisos);

// if (!usuario || permisos) {
//   console.log("Puede acceder");
// } else {
//   console.log("No tiene permisos o usuario no existe");
// }

// let usuario =

// if (permisos) {
//   console.log("Entro!");
// }

let sueldo = 1000;
let comision = 100;

// comision = comision + 100; -> comision+=100
// for (let comision = 100; comision <= sueldo / 2; comision += 100) {
//   //   comision = comision + 100;
//   console.log(comision);
// }

// PRIMERO VALIDA Y LUEGO EJECUTA
while (comision <= sueldo / 2) {
  comision = comision + 100;
  console.log(comision);
}

sueldo = 1000;
comision = 100;

// PRIMERO EJECUTA Y LUEGO VALIDA
do {
  comision = comision + 100;
  console.log(comision);
} while (comision <= sueldo / 2);
