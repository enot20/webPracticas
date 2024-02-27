// estructuras condicionales if - swicth
/*
if(condicion){
}else{

}

*/
/* let esSalvo = false;

if (esSalvo = true) {
    console.log('esres salvo');
} else {
    console.log('arrepeinte hijo del diablo');
}

//operador tenari0 () ? : ''

let resultado = (esSalvo) ? 'Bienbenido al reino de Dios' : 'vas a llevar fuego';
console.log(resultado);

let nota_parcial = 10;

if (nota_parcial < 6) {
    console.log('seguro');

} else if (nota_parcial > 5 && nota_parcial > 1) {
    console.log('trabajo duro');
} else {
    console.log('tenes mi respuesyta');
}


let impresion = ((nota_parcial < 6) ? 'seguro' : // Si la nota_parcial es menor que 6, asigna 'seguro'
    ((nota_parcial > 5 && nota_parcial < 10) ? 'trabajo duro' : // Si la nota_parcial está entre 6 y 9, asigna 'trabajo duro'
        'tenes mir esta')); // Si la nota_parcial no es menor que 6 y no está entre 6 y 9, asigna 'tenes mir esta'
console.log(impresion); */
/* switch es un if con determinacion
 
switch(expresion){
   case x 
}*/


/* 
switch (nota_parcial) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('seguro_1');
        break;
    case 6:
    case 7:
    case 8:
    case 9:
        console.log('seguro_2');
        break;
    case 10:
        console.log('trabajo duro');
        break;
    default:
        console.log('tenes mi respuesta');
}

function calcular() {
    switch (parseInt($('#numero').val())) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log('seguro_1');
            break;
        case 6:
        case 7:
        case 8:
        case 9:
            console.log('seguro_2');
            break;
        case 10:
            console.log('trabajo duro');
            break;
        default:
            console.log('tenes mi respuesta');
    }
}
$(function () {
    $('#btn_enviar').click(function () {
        console.log('se le dio clik al boton')
        calcular();
    })
}); */

/* ESTRUCTURA BUCLES  */

/* for (let i = 0; i < 10; i++) {
    console.log("valor de I: " + i);
}

let numero =5;
for (let i = 1; i < 11; i++) {
    console.log(numero + "x" + i + "=" + (numero*i));
    
} */

/* let numero = prompt("que numero quieres iterar");
for (let i = 1; i < 11; i++) {
    console.log(numero + "x" + i + "=" + (numero*i));
    
} */

/* $(document).ready(function () {
    $("#numero").click(function () { 
        iterar(parseInt($("#numero").val()));
    });
});

function iterar(numero) {
    for (let i = 1; i < 11; i++) {
        console.log(numero + "x" + i + "=" + (numero * i));
    }
} */

/* function iterar(numero) {
    for (let i = 1; i < 11; i++) {
        console.log(numero + "x" + i + "=" + (numero * i));
    }
    
} */

let dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
/* for (let i = 0; i < dias.length; i++) {
    console.log("valor de la semana " + i + " = " + dias[i]);
} */

/* for in  */

/* for (i in dias) {
    console.log("valor de la semana " + i + " = " + dias[i]);
    
}

for (let i of dias) {
    console.log("valor de la semana " + i);
}
 */
/* for (let i of dias) {
    console.log(i);
} */

/* dias.forEach((dia, index)=>{
    console.log("valor de la posisions" + index + "=" + dia);
}) */

//while
let x = 10; // Inicializamos la variable x con el valor de 1
let tope = 10;
while (x < tope) {
    console.log("valor de x = " + x);
    x++;
}

do {
    console.log("valor de x = " + x);
    x++;
    
} while (x<10);
