function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemendo){
            return valorAcumulado + nuevoElemendo
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numero){
    if(numero % 2 === 0){
        return true; 
    }else{
        return false;
    }
}

function comparar( a, b ) { return a - b; }

function calcularMediana(lista){
    lista.sort(comparar);
    const mitadLista = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1]
        const elemento2 = lista[mitadLista]
        const promedioElemento1yElemento2 = calcularMediaAritmetica([elemento1, elemento2]);
        return  promedioElemento1yElemento2
    }else{
        return lista[mitadLista]
    }
}