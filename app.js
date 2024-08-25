function encript() {
    // * Call to function regex
    regEx(1);
}

function desencript() {
    // * Call to function regex
    regEx();
}

function regEx(aux = 0) {
    text = document.getElementById('text__form').value;

    if (aux == 1) {
        // * Encrypt text
        dict = {
            "e" : "enter",
            "i" : "imes",
            "a" : "ai",
            "o" : "ober",
            "u" : "ufat"
        }

        encryptText = text.replace(/[aeiou]/g, m => dict[m]);
    
    }else{
        // * Encrypt text
        dict = {
            "enter" : "e",
            "imes" : "i",
            "ai" : "a",
            "ober" : "o",
            "ufat" : "u"
        }

        for (let key in dict) {
            
            let regex = new RegExp(key, 'g');
            text = text.replace(regex, dict[key]);
            console.log(text);
        }

        encryptText = text;
    }
    
    // * Ocultar imagen y texto
    document.getElementsByClassName("presentacion__resultado__item")[0].style.display = 'none';
    document.getElementsByClassName("presentacion__resultado__item")[1].style.display = 'none';

    // * Mostrar texto encriptado
    document.getElementById("resultado").style.display = 'block';
    document.getElementById("resultado").innerHTML = encryptText;

    if(window.matchMedia("(max-width: 600px)").matches || (window.matchMedia("(min-width: 600px)").matches && window.matchMedia("(max-width: 1024px)").matches)){

        // * Ajustar altura de presentacion resultado y resultado
        document.getElementsByClassName("presentacion__resultado")[0].style.height = 'auto';
        document.getElementsByClassName("resultado")[0].style.height = 'auto';
    }

    // * Mostrar btn copy
    document.getElementById("btn-copy").style.display = "block";
}

function copy() {
    
    // * Declaración de variables
    let textCopy = document.getElementById("resultado");
    let copyBtn = document.querySelector("#btn-copy");

    // * Uso de clipboard API
    copyBtn.addEventListener("click", async () => {
        await navigator.clipboard.writeText(textCopy.innerHTML);
        console.log('copiado!'); // * toast with text copied!
    })
}