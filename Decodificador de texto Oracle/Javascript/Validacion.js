function noRecargue(event)
{
    event.preventDefault();
    return false;
}

var validacion = true;

function validar()
{
var textoIngresado = document.getElementById("input-texto").value;  

    if (/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(textoIngresado)||
          (/[0-9]/.test(textoIngresado))||
          (/[A-Z]/.test(textoIngresado)))
    {
    
        alert("No se permiten caracteres especiales ni mayusculas");    
        validacion=false;
    }
    else if ((textoIngresado==""))
    {

        alert("Ingrese un mensaje para encriptar / desencriptar");    
        validacion=false;
    }

    else
    {
        validacion=true; 
    }
}
