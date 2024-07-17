

var agregar = document.getElementById("agregar");
console.log(agregar);

agregar.addEventListener("click",function(){
    this.remove();
}
)

var megusta=document.getElementById("gato");
var contador=0




megusta.addEventListener("click",function(){
    contador++;
    this.innerText=contador+" me gusta";
    alert("me gusta gatos atigrados");
})

var megustaperro=document.getElementById("perro");
var contadorperro=0



megustaperro.addEventListener("click",function(){
    contadorperro++;
    this.innerText=contadorperro+" me gusta";
    alert("me gusta perros golden retriver")
})

function cambiarBoton(boton){
    console.log(boton)
    boton.innerText="cerrar sesión"
}


