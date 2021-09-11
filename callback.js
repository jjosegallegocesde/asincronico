let datos={
    nombre:"usuario",
    password:"Admin123*"
}



function conectarSever(peticion,responder){

    console.log("Procesando...")

    setTimeout(function(){

        if(peticion.password=="Admin123*"){
            responder(200,"usuario encontrado")
        }else{
            responder(204,"usuario no encontrado")
        }

    },5000)

}

conectarSever(datos,function(estado,respuesta){

    if(estado==200){
        console.log(respuesta);
        consultarPeliculas(function(respuesta){

            console.log(respuesta)

        });

    }else{
        console.log(respuesta)
    }

})

function consultarPeliculas(responder){

    console.log("Procesando2...")

    setTimeout(function(){
        responder("peliculas encontradas")
    },5000)

}
