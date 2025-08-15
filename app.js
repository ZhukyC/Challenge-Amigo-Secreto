//1. Array para almacenar nombres de amigos
let amigos = [];

//2. Función para agregar amigos
function agregarAmigo() {
    //a) Capturar el valor del campo de entrada
    let amigoInput = document.getElementById('amigo');
    let amigo = amigoInput.value.trim(); //.trim() elimina espacios en blanco

    //b) Validar la entrada
    if (amigo === '') {
        alert('Por favor, inserte un nombre');
        return; // detiene la ejecución si está vacío
    }


    //c) Actualizar el array de amigos (usar .push())
    amigos.push(amigo);

    //d) Limpiar el campo de entrada
    amigoInput.value = '';

    actualizarListaDeAmigos();
}

//4. Función para sortear a un amigo
function sortearAmigo() {
    // a) Validar que haya amigos disponibles
    if (amigos.length < 2) {
        alert('Se necesitan mínimo dos participantes para iniciar el sorteo');
        return;
    }

    //b) Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //c) Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    //d) Mostrar el resultado
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `¡El amigo secreto sorteado es: ${amigoSorteado}! 🎉`;
}

//3. Función para actualizar y mostrar la lista de amigos
function actualizarListaDeAmigos() {
    //a) Obtener el elemento de la lista
    let listaAmigos = document.getElementById('listaAmigos');
    
    //b) Limpiar la lista existente
    listaAmigos.innerHTML = "";

    //c) Iterar sobre el arreglo 'amigos' y agregar elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); // Crear un nuevo elemento de lista
        li.textContent = amigos[i]; // Asignar el nombre del amigo al elemento
        listaAmigos.appendChild(li); // Añadir el nuevo elemento a la lista
    }
}
