let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo(amigo){
    resultado.innerHTML = "";
    if (amigo == ''){
        alert("Por favor, ingrese un nombre.");
    }
    else{
        amigos.push(amigo);
        document.getElementById('amigo').value = "";
        llenarLista();
    }
}

function llenarLista(){
    let numeroElementos = amigos.length;

    listaAmigos.innerHTML = "";

    for(let i=0; i<numeroElementos; i++){
        const elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        listaAmigos.appendChild(elemento);
    }
}

function sortearAmigo(){
    let elemento = document.createElement('li');
    let numeroElementos = amigos.length;
    resultado.innerHTML = "";
    if (numeroElementos < 2){
        alert("Para sortear al amigo secreto, debe haber 02 amigos como mínimo.");
        return;
    }
    let numeroAleatorio = Math.floor(Math.random() * numeroElementos);

    listaAmigos.innerHTML = "";
    elemento.textContent = "El amigo secreto sorteado es: " + amigos[numeroAleatorio];
    resultado.appendChild(elemento);
    amigos.length = 0;
}