function calcularModa(lista){
    const listaCount = {};

    lista.map(
        function(elemento) {
            if(listaCount[elemento]) {
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }        
        }
    )

    const listaArray = Object.entries(listaCount);

    listaArray.sort(function(a, b){
        return a[1] - b[1];
    })

    return listaArray[listaArray.length - 1][0];
}