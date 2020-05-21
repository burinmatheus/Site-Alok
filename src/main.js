//PLAYER FLUTUANTE

function info() {
    alert('Meramente Ilustrativo');
}

function fechajanela() {
    document.getElementById('flutuante').style.display = 'none';
    document.getElementById('all').classList.remove('escurece');
}

function abrejanela() {
    document.getElementById('flutuante').style.display = 'block';
    document.getElementById('all').classList.add('escurece');
}

//musica
let ultimo;

function selecionado(elemento) {
    if (ultimo) {
        ultimo.classList.remove('aberto');
    }
    ultimo = elemento;

    let link = '';

    if (elemento.className == 'album1') {
        link = 'https://open.spotify.com/embed/album/2kJHrTUZ21XbtKO9fEFzhG';
    } else if (elemento.className == 'album2') {
        link = 'https://open.spotify.com/embed/album/45uRcbQLOKGANqzLrkkYaD';
    } else if (elemento.className == 'album3') {
        link = 'https://open.spotify.com/embed/album/7F5b3CtINIB8fGrxZqPMjY';
    } else if (elemento.className == 'album4') {
        link = 'https://open.spotify.com/embed/album/6AgNzMHvH3Y286mU2sKA1s';
    }

    elemento.classList.add('aberto');
    document.getElementById('iframe-musica').src = link;
}

//ROTACIONA
function gira() {

    if (document.getElementById('rotaciona').className == 'is off') {
        document.getElementById('rotaciona').classList.remove('off');
        document.getElementById('rotaciona').src = './img/albuns/album.gif';
    }

}

function para() {

    if (document.getElementById('rotaciona').className == 'is') {
        document.getElementById('rotaciona').classList.add('off');
        document.getElementById('rotaciona').src = './img/albuns/album1.png';
    }

}