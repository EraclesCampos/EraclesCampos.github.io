let cal1 = prompt("Ingresa la primera calificacion");
let num1 = parseInt(cal1)
let cal2 = prompt("Ingresa la segunda calificacion");
let num2 = parseInt(cal2)
let cal3 = prompt("Ingresa la tercera calificacion");
let num3 = parseInt(cal3)
let cal4 = prompt("Ingresa la cuarta calificacion");
let num4 = parseInt(cal4)
let cal5 = prompt("Ingresa la quinta calificacion");
let num5 = parseInt(cal5)


const PROMEDIO = ((num1 + num2 + num3 + num4 + num5) /5);
document.write(PROMEDIO)
if (PROMEDIO >= 6) {
    document.write(" aprobado")
}else{
    document.write(" reprobado")
}