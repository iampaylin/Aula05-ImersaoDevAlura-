let botao = document.getElementById("botao")

botao.addEventListener("click", adicionarAlbum)

function adicionarAlbum () {
    
    let albumFavorito = document.getElementById("album").value

    /* if (albumFavorito.endsWith(".jpg")) {
        listarAlbunsNaTela(albumFavorito)
    } if (albumFavorito.endsWith(".png")) {
        listarAlbunsNaTela(albumFavorito)
    } else {
        console.error("Endereço de álbum errado")
    } */

    listarAlbunsNaTela(albumFavorito)

    document.getElementById("album").value = ""

}

function listarAlbunsNaTela (album) {
    let elementoAlbumFavorito = `<img src=${album}>`
    let elementoListaAlbum = document.getElementById("listaAlbuns")
    elementoListaAlbum.innerHTML = elementoListaAlbum.innerHTML + elementoAlbumFavorito
}