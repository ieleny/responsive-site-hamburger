window.onload = function() {

    // Trocar a imagem com o mobile
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.getElementById('primeiro').setAttribute('src','assets/imagens/hamburger-1-441x700.jpg');
        document.getElementById('segundo').setAttribute('src','assets/imagens/hamburger-2-441x700.jpg');
        document.getElementById('terceiro').setAttribute('src','assets/imagens/hamburger-3-441x700.jpg');
        document.getElementById('quarto').setAttribute('src','assets/imagens/hamburger-4-441x700.jpg');
    } else {
        document.getElementById('primeiro').setAttribute('src','assets/imagens/hamburger-1.jpg');
        document.getElementById('segundo').setAttribute('src','assets/imagens/hamburger-2.jpg');
        document.getElementById('terceiro').setAttribute('src','assets/imagens/hamburger-3.jpg');
        document.getElementById('quarto').setAttribute('src','assets/imagens/hamburger-4.jpg');
    }

};
