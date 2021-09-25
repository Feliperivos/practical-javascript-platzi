// Helpers
function esPar(numero){
    return numero % 2 === 0
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemendo){
            return valorAcumulado + nuevoElemendo
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de Mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const elemento1 = lista[mitad - 1];
        const elemento2 = lista[mitad];
        return calcularMediaAritmetica([elemento1, elemento2]);
    }else{
        return lista[mitad];
    }
}




const salariosCol = colombia.map(
    function(person){
        return person.salary;
    }
);

const salariosColSort = salariosCol.sort((a,b) => a - b);

// Mediana del top 10%
const spliceStart = (salariosColSort.length * 90 / 100);
const spliceCount = salariosColSort.length - spliceStart;

const salariosColTop10 = salariosColSort.splice(spliceStart, spliceCount);

const medianaGeneralCol = medianaSalarios(salariosColSort);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({medianaGeneralCol,medianaTop10Col});