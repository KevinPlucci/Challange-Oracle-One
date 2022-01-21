function copiar()
{
    var copiarTexto = document.getElementById("msg");
    copiarTexto.select();
    navigator.clipboard.writeText(textoCopiado.value);

    var titulo = document.querySelector("h2");
    titulo.textContent="Mensaje Copiado:";
}