
let datosUsuario={
    nombre:"juan@gmail.com",
    password:"admin123*"
}

function conectarConNetflix(datosUsuario,generarRespuestaCallback){

    console.log("Iniciando la peticion a netflix.....(esperando)")
    setTimeout(function(){

        if(datosUsuario.password=="admin123*"){

            generarRespuestaCallback(200)

        }else{

            generarRespuestaCallback(204)
            
        }


    },5000)

}



conectarConNetflix(datosUsuario,function(estado){

    if(estado==200){

        console.log("Bienvenido a netflix")
        conectarConNetflixParaBuscarPelis(function(mensaje){

            console.log(mensaje);

        });

    }else{
        console.log("Usuario no encontrado")
    }

})

function conectarConNetflixParaBuscarPelis(generarRespuestaPelisCallback){
    console.log("Iniciando la peticion de peliculas a netflix.....(esperando)")
    setTimeout(function(){

        generarRespuestaPelisCallback("CATALOGO DE PELICULAS");

    },5000)

}

