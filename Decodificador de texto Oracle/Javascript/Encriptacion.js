
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function encriptar()
{
    var validacion=true;
    var texto = document.getElementById('input-texto').value;

    validar();

    if(validacion==true)
    {
        var encriptado = texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
        
        document.getElementById("msg").value = encriptado;
        document.getElementById("input-texto").value=" ";

        var titulo = document.querySelector("h2");
        titulo.textContent= "Mensaje Encriptado";
    
    }
    
}

