function desencriptar() 
{
    var validacion = true;
    var texto = document.getElementById("input-texto").value;

    validar();

    if (validacion==true)
    {
        var desencriptado= texto.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');

        document.getElementById("msg").value = desencriptado;
        document.getElementById("input-texto").value = '';
        
        var titulo = document.querySelector("h2");
        titulo.textContent="Mensaje Desencriptado:";   
    }
}

