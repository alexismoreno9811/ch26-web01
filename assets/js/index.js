console.log(`Sesion web1`);

function changeGreeting(){
    // obtener nombre cliente
    const clientName = getNameOfClient();

    // obtener referencia de label h1
    const greetingReference = getReferenceOfIdGreeting();

    // TODO cambiar el saludo
    greetingReference.innerHTML = `Hola ${clientName}`;

}

function getNameOfClient(){
    const clientName = prompt(`Escribe tu nombre`);
    return clientName;
}

function getReferenceOfIdGreeting(){
    return document.getElementById(`greeting`);
}