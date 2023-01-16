let result = document.getElementById("resul");
const perimetroCuadrado = (peri) => peri * 4;
const areaCuadrado = (area) => area * area;

function perimCuadra() {
    let lado = document.getElementById("lado");
    let valor = Number(lado.value);
    if(valor == ''){
        const resul = `Ingresa valores primero, pedazo de Gil`;
        result.innerHTML = resul;
    } else {
        resul = `El perímetro es: ${perimetroCuadrado(valor)} cms`;
        result.innerHTML = resul;
    }
    
}
function areaCuadra() {
    let lado = document.getElementById("lado");
    let valor = Number(lado.value);
    if (valor == '') {
        const resul = `Ingresa valores primero, pedazo de Gil`;
        result.innerHTML = resul;
    } else {
        const resul = `El área es: ${areaCuadrado(valor)} cm2`;
        result.innerHTML = resul;
    }
    
}

const perimTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

let result_tria = document.getElementById("resul_tria");
function perimTria() {
    let lado1 = document.getElementById("lado1");
    let lado2 = document.getElementById("lado2");
    let lado3 = document.getElementById("lado3");
    ladopri = Number(lado1.value);
    ladoseg = Number(lado2.value);
    ladoter = Number(lado3.value);
    if (ladopri == '' || ladoseg == '' || ladoter == '') {
        const resul = `Ingresa valores primero, pedazo de Gil`;
        result_tria.innerHTML = resul;
    } else {
        const resul = `El perímetro es: ${perimTriangulo(lado1, lado2, lado3)} cms`;
        result_tria.innerHTML = resul;
    }

}
let result_tria_area = document.getElementById("resul_tria_area");
function areaTria() {
    let base = document.getElementById("base");
    let altura = document.getElementById("altura");
    basee = Number(base.value);
    alturaa = Number(altura.value);

    if(basee == '' || alturaa == ''){
        const resul = `Ingresa valores primero, pedazo de Gil`;
        result_tria_area.innerHTML = resul;    
    }else {
        const resul = `El área es: ${areaTriangulo(basee, alturaa)} cm2`;
        result_tria_area.innerHTML = resul;
    }
}

let pi = Math.PI;
const diaCirculo = (radio) => radio * 2;
const perimCirculo = (radio) => diaCirculo(radio) * pi;
const areaCirculo = (radio) => (radio*radio)*pi;

let resul_circu = document.getElementById("resul_circu");

function diametroCirculo(){
    let radio = document.getElementById("radio");
    radio = Number(radio.value);
    if (radio == ''){
        const resul = `Ingresa valores primero, pedazo de Gil`;
        resul_circu.innerHTML = resul;    
    } else {
        const resul = `El diametro es: ${diaCirculo(radio)} cm2`;
        resul_circu.innerHTML = resul;
    }
}

function perimetroCirculo(){
    let radio = document.getElementById("radio");
    radio = Number(radio.value);

    if (radio == ''){
        const resul = `Ingresa valores primero, pedazo de Gil`;
        resul_circu.innerHTML = resul;    
    } else {
        const resul = `El perímetro es: ${perimCirculo(radio)} cm2`;
        resul_circu.innerHTML = resul;
    }
}

function areaCirculoo(){
    let radio = document.getElementById("radio");
    radio = Number(radio.value);

    if (radio == ''){
        const resul = `Ingresa valores primero, pedazo de Gil`;
        resul_circu.innerHTML = resul;    
    } else {
        const resul = `El área es: ${areaCirculo(radio)} cm2`;
        resul_circu.innerHTML = resul;
    }
}
    //Factorial
    // function factorial(numeroIngresado){
    //     console.log(numeroIngresado);
    //     if(numeroIngresado > 1 ){
    //         numeroIngresado = numeroIngresado * factorial(numeroIngresado - 1);
    //         console.log(numeroIngresado);
    //     }
    //     return numeroIngresado;
    // }
    // console.log(factorial(5));
    // let flecha = (numeroIngresado) => {
    //     console.log(numeroIngresado);
    //      if(numeroIngresado > 1 ){
    //          numeroIngresado = numeroIngresado * flecha(numeroIngresado - 1);
    //          console.log(numeroIngresado);
    //      }
    //      return numeroIngresado;
    // }
    // console.log(flecha(5));


    // function palindroma(palabra){
    //      console.log("-- Palabra normal ---");
    //      console.log(palabra);
    //      console.log("-- Palabra minúscula --");
    //      let minus = palabra.toLowerCase();
    //      console.log(minus);
    //      let partes = palabra.split('');
    //      console.log(partes);

    //      let alre = partes.reverse();
    //      console.log(alre);
    //      let unir = alre.join('');
    //      console.log(unir);
    //     if(palabra == unir){
    //         console.log("Palíndroma pa");
    //     } else {
    //         console.log("No es palíndroma pa");
    //     }
    // }
    // palindroma("no");

    // function reverseWords(str){
    //     str = str.split(' ');
    //     let voltearLaArepa = str.reverse();
    //     let final = voltearLaArepa.join(' ')
    //     return final; // reverse those words
    // }
    // console.log(reverseWords("Revirtiendo las palabras nea"));

    // let primero = [1,2,3,4,5,6,7,8,9];
    // let pares = [];
    // let impares = [];
    // let num;
    // let rand = Math.floor(Math.random() * 100);


    // // for (let i = 1; i < 10; i++) {
    // //     primero.push(i);
    // // }
    // console.log(primero);
    // for (let x = 0; x < primero.length; x++) {
    //     num = primero[x] * rand;
    //     console.log("la multiplicación "+(x+1)+ " es "+  primero[x] + " x "+ rand+ " el resultado es: "+num);
    //     if (num % 2 == 0){
    //         pares.push(num);
    //     } else {
    //         impares.push(num);
    //     }

    // }


    // console.log("Pares");
    // console.log(pares);
    // console.log("Los números pares son: "+pares.length)
    // console.log("--------------");
    // console.log("Impares");
    // console.log(impares)
    // console.log("Los números impares son: "+impares.length)


    // console.log("La tabla del 5");
    // let n = 5;
    // for (let index = 0; index < 11; index++) {
    //     console.log(`${n} x ${index} = ${n*index}`);
    // }

    // let vacio = [];
    // for (let i = 0; i < 101; i++) {
    //     vacio.push(i);
    // }
    // console.log(vacio);

    // const filtrarPares = vacio.filter(function(numero){
    //     return numero%2===0;
    // })
    // console.log(filtrarPares);
    // const filtrarImpares = vacio.filter(function(numero){
    //     return numero%2===1;
    // })
    // console.log("For of");
    // for (const l of filtrarPares) {
    //     console.log(l);
    // }
    // console.log(filtrarImpares);
    // console.log("Vector llenado con push");
    // vacio.push(25, 150, 10, 2);
    // for (let i = 0; i < vacio.length; i++) {
    //     console.log(vacio[i]);
    // }

    // console.log("");
    // console.log("----ForEach----");
    // vacio.forEach(function(correr){
    //     console.log(correr);
    // })

    // console.log("");
    // console.log("----Imprimir normal----");
    // for (let i = 0; i < vacio.length; i++) {
    //     console.log(vacio[i]);
    // }
    // console.log("");
    // console.log("----Método Sort----");
    // vacio.sort(function(a, b){return a - b});
    // for (let i = 0; i < vacio.length; i++) {
    //     console.log(vacio[i]);
    // }


