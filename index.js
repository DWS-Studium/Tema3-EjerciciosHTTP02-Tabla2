//Creamos el servidor
var http = require('http');
var url = require('url');
var server = http.createServer();
var moduloTablas = require('./modules/tabla.js');
server.on('request', function(peticion, respuesta) {
    //Obtenemos la URL y la descomponemos
    var url_peticion = url.parse(peticion.url, true);
    //Guardamos el pathname
    var pathname = url_peticion.pathname;
    //Optenemos los parametros
    var parametro = url_peticion.query;
    let codigo_respuesta = 200;
    //Comprobamos si el pathname es /tabla
    if (pathname == '/tabla') {
        var salida = '';
        salida += moduloTablas.multiplicar(parametro.num);
    } else if (pathname == '/') {
        var salida = '<h2>Bienvenido</h2>';
        salida += '<p>Entra en la URL tabla, para ver todas las tablas, añade el parametro num para mostrar la tabla que quieras</p>';
    } else {
        var salida = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>404 Page Not Found</title><link href="http://fonts.googleapis.com/css?family=Amarante" rel="stylesheet" type="text/css"><body><h1>404 Page Not Found</h1></body></html>';
        codigo_respuesta = 404;
    }

    respuesta.writeHead(codigo_respuesta, { 'Content-Type': 'text/html;charset=utf-8' });
    respuesta.write(salida);
    respuesta.end();
});
server.listen(8000, '127.0.0.1', (err) => {
    //Verificamos que no halla error, si no lo mostrara por consola
    if (err) {
        return console.log('Error: ', err);
    }
    console.log('Servidor ejecutándose en http://127.0.0.1:8080/');
});