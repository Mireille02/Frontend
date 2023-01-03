(function () {
    /*Ejercicio 1*/
    const arr = [5, 7, 10, 50, 60];

    for (let i = 0; i < arr.length; i++) {
        document.write(arr[i]);
        if (0 < arr[i] && arr[i] < 2)
            document.write('es un bebé' + "<br/>");
        else
            if (3 < arr[i] && arr[i] < 12)
                document.write('es un niño' + "<br/>");
            else
                if (12 < arr[i] && arr[i] < 16)
                    document.write('es un bebé' + "<br/>");
                else
                    if (16 < arr[i] && arr[i] < 25)
                        document.write('es un joven' + "<br/>");
                    else
                        if (arr[i] > 25)
                            document.write('es un adulto' + "<br/>");
    }

/*Ejemplo 2*/
    /*const arr = [1, 2, 3, 4, 5, 6, 6];

    if (arr.length == 0)
        document.write('Esta vacía');
    else
        quitarDuplicados(arr);

    function quitarDuplicados(arr) {
        let result = arr.filter((item, index) => {
            return arr.indexOf(item) == index;
        })

        document.write(result);
}/*

/*Ejemplo 1*/
    /* arr.forEach(
         item => {
             document.write(item);
         }
     )
     document.write(arr.filter(num=>num>3));
     const nombres=["david", "emmanuel", "guillermo"];
 
     document.write(nombres.includes("david"));*/


})();