function encript() {
    text = document.getElementById('text__form').value;

    // * Ocultar imagen y texto
    document.getElementsByClassName("presentacion__resultado__item")[0].style.display = 'none';
    document.getElementsByClassName("presentacion__resultado__item")[1].style.display = 'none';

    // * Mostrar texto encriptado
    document.getElementById("resultado").style.display = 'block';
    document.getElementById("resultado").innerHTML = text;
}