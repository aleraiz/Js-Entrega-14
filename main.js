$( document ).ready(function() {
    //Declaramos la url del API
    const APIURL = 'https://jsonplaceholder.typicode.com/posts' ; 
    //Declaramos la información a enviar
    const infoPost =  { nombre: "Ana", profesion: "Programadora" }
    //Agregamos un botón con jQuery
    $("body").prepend('<button id="btn1">ENVIAR API</button>');
    //Escuchamos el evento click del botón agregado
    $("#btn1").click(() => { 
        $.ajax({
            method: "POST",
            url:  APIURL,
            data: infoPost,
            success: function(respuesta){
                $("body").prepend(`<div>${respuesta.nombre}</div>`);
            }
        });
    });
});
