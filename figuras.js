function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

function perimetroTriangulo(lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2
}

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI
}

function alturaTriangulo(lado1, lado2, lado3){
    var ladoIgual;
    var base;
    if(lado1 === lado2){
        ladoIgual = lado1;
        base = lado3;
    }else if(lado1 === lado3){
        ladoIgual = lado1;
        base = lado2;
    }else if(lado2 === lado3){
        ladoIgual = lado2;
        base = lado1;
    }else{
        return;
    }
    return Math.sqrt((ladoIgual ** 2) - ((base ** 2) / 4))    
}


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const  perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);

}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputLadoTriangulo1").value;
    const lado2 = document.getElementById("InputLadoTriangulo2").value;
    const base = document.getElementById("InputLadoTrianguloBase").value;
    const  perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputLadoTrianguloBase").value;
    const altura = document.getElementById("InputTrianguloAltura").value;
    const area = areaTriangulo(base,altura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const  perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}