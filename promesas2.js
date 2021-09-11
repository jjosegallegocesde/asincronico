
let datosUsuario={
    nombre:"juan@gmail.com",
    password:"admin123*"
}

function conectarConNetflix(datosUsuario){

    console.log("Iniciando la peticion a netflix.....(esperando)")

    let promesa= new Promise(function(resolve,reject){

        setTimeout(function(){

            if(datosUsuario.password=="admin123*"){
                resolve("200 exito")
            }else{
                reject("204 Fallo")
            }
        },5000)

    })

    return promesa;

}



conectarConNetflix(datosUsuario)
.then(function(resultado){
    console.log(resultado)
})
.catch(function(error){
    console.log(error)
})

