function conectarServer(data){

    console.log("Porcesando...")

    let promesa= new Promise(function(resolve,reject){

        setTimeout(function(){

            if(data.password=="Admin123*"){
                resolve("200 exito")
            }else{
                reject("401 Fallo")
            }
    
    
        },5000)

    })

    return promesa;


}

let datos={
    nombre:"usuario",
    password:"Admin123*"
}

conectarServer(datos)
.then(function(resultado){
    console.log(resultado)
})
.catch(function(error){
    console.log(error)
})