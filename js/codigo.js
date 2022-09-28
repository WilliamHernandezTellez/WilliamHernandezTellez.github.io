window.addEventListener("load",function(){
    //aqui va el codigo que se ejecuta despues de cargar la pagina
     
formulario=this.document.getElementById("formulario");

formulario.addEventListener("submit", function (e){
    event.preventDefault();
    nombre = document.getElementById("nombre").value;
    let pass = document.getElementById("pwd").value;

    //alert("el nombre es " + nombre + "con contraseña" + pass);

    let respuesta = document.getElementById("result");

    if(nombre =="G7S21" && pass =="si se puede"){
        respuesta.innerText="se acepto el ingreso a el sistema...";
        respuesta.style.color="blue";
        respuesta.style.fontSize="3em";
        respuesta.style.width=" 550px";
        respuesta.style.height=" 130 px";
        respuesta.style.backgroundColor="white";
    }else{
        respuesta.innerText="estas mal de tu cabeza...";
        respuesta.style.color="red";
        respuesta.style.fontSize="2em";
        respuesta.style.width="500px";
        respuesta.style.height="150px";
        respuesta.style.backgroundColor="cyan";
    }
})
});