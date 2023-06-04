//Referencia a input operación

let operacion = document.querySelector('#operacion');
let calcular = document.querySelector('.calcular');
let resultado = document.querySelector('.resultado');
// let num1= document.querySelector('#num1');
// let num2 = document.querySelector('#num2');

//Suma
function calculoSuma(num1,num2){
    return (num1+num2);
}

//Resta
function calculoResta (num1,num2){
    return (num1-num2);
}

//División
function calculoDivision(num1,num2){
    if (num2 == 0){
        return 'Error. Divison por cero';
    }
    return (num1/num2);
}

//Multiplicacion
function calculoMultiplicacion (num1, num2){
    return (num1*num2);
}

//Funcion para mostrar el resultado

function mostrarResultado(resultado){
    result= document.querySelector('.resultado');
    result.textContent= resultado;
}

//Evento del botón calcular
calcular.addEventListener('click', () => {
    let num1= parseInt(document.querySelector('#num1').value);
    let num2= parseInt(document.querySelector('#num2').value);
    resultadoFinal = 0;


//Operaciones a realizar
switch(operacion.value){
    case 'suma':
        resultadoFinal = calculoSuma(num1, num2);
        mostrarResultado(resultadoFinal)
        break;
    case 'resta':
        resultadoFinal = calculoResta(num1,num2);
        mostrarResultado(resultadoFinal)
        break;
    case 'division':
        resultadoFinal = calculoDivision(num1,num2);
        mostrarResultado(resultadoFinal)
        break;
    case 'multiplicacion':
        resultadoFinal = calculoMultiplicacion(num1,num2);
        mostrarResultado(resultadoFinal)
        break;
    default:
        return alert('Operación no válida');
}
});
