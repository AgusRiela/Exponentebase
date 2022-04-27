let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let btn1 = <HTMLButtonElement>document.getElementById("btn1");
let btn2 = <HTMLButtonElement>document.getElementById("btn2");
let btn3 = <HTMLButtonElement>document.getElementById("btn3");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let Divresultado = <HTMLParagraphElement>document.getElementById("resultado");
let base: number;
let exponente: number;
Divresultado.innerHTML = "Clikc para ver el resultado por consola";

function potencia(base: number, exponente: number): number {
  return Math.pow(base, exponente);
}
btn1.addEventListener("click", () => {
  rotulo1.innerHTML = "Ingrese la base";
  base = Number(dato1.value);
});
btn2.addEventListener("click", () => {
  rotulo2.innerHTML = "Ingrese el Exponente";
  exponente = Number(dato2.value);
});

btn3.addEventListener("click", () => {
  Divresultado.innerHTML = `El resultado es ${potencia(base, exponente)}`;
  console.log(potencia(base, exponente));
});
