alert("welcome to my curriculum vitae")

function ConfirmDemo(){
    //mensaje para la confirmacion
    var mensaje = confirm("you like my curriculum vitae");
    //el usuario acepto el mensaje
    if (mensaje){
        alert("¡thanks for accepting}!");
    }
    //el usuario no acepto el mensaje
    else{
        alert("¡you denied the message!");
    }
}