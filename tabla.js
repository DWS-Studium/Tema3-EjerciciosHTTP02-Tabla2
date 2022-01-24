exports.multiplicar = function(num) {
    var salida = '';
    if (num) {
        salida += '<h2>Tabla del ' + num + '</h2>';
        for (z = 0; z <= 10; z++) {
            salida += num + ' x ' + z + ' = ' + num * z + '<br />';
        }
    } else {
        var salida = '';
        for (i = 0; i <= 10; i++) {
            salida += '<h2>Tabla del ' + i + '</h2>';
            for (z = 0; z <= 10; z++) {
                salida += i + ' x ' + z + ' = ' + i * z + '<br />';
            }
        }
    }
    return salida
}