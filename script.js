let mensajes = [];

//  ZONA DE MENSAJES
const mensajeZona = document.getElementById('mensaje-zona');

// OBTENEMOS EL VALOR DEL TEXTO
const mensajeInput = document.getElementById('mensaje-input');
const mensajeBotón = document.getElementById('mensaje-botón');
const mensajeForm = document.getElementById('mensaje-form');




// Evento para enviar un mensaje
mensajeBotón.addEventListener('click', (e) => { //(e) es un parámetro de la función. En este caso, e es el objeto que representa el evento.
    e.preventDefault(); // Evitar que se recargue la página
    
    // Obtener el texto del input de mensaje
    const mensajeTexto = mensajeInput.value.trim();
    
    // Verificar si el mensaje está vacío
    if (mensajeTexto === '') return; // Salir si el mensaje está vacío
    
    // Crear un nuevo mensaje con timestamp actual
    const nuevoMensaje = {
        texto: mensajeTexto,
        timestamp: new Date().toLocaleString()
    };
    
    // Guardar el mensaje en la lista de mensajes
    almacenarMensaje(nuevoMensaje);
    
    // Mostrar el mensaje en la zona de mensajes
    mostrarMensajes();
    
    // Limpiar el input de texto
    mensajeInput.value = '';
});

// Función para almacenar un mensaje en localStorage
function almacenarMensaje(mensaje) {
    const existeMensajes = JSON.parse(localStorage.getItem('mensajes'));
    
    if (existeMensajes !== null && Array.isArray(existeMensajes)) {
        mensajes = [...existeMensajes, mensaje];
    } else {
        mensajes.push(mensaje);
    }
    
    localStorage.setItem('mensajes', JSON.stringify(mensajes));
}

// Función para mostrar todos los mensajes en la zona de mensajes
function mostrarMensajes() {
    // Obtener la lista de mensajes desde localStorage
    const existenMensajes = JSON.parse(localStorage.getItem('mensajes'));
    
    if (existenMensajes !== null && Array.isArray(existenMensajes)) {
        mensajes = [...existenMensajes];
    }
    
    // Crear un elemento HTML para mostrar cada mensaje
    const mensajeElementos = mensajes.map((mensaje, index) => {
        return `
            <div>
                <p>${mensaje.texto} (enviado a ${mensaje.timestamp})</p>
            </div>
        `;
    }).join('');
    
    // Mostrar los mensajes en la zona de mensajes
    mensajeZona.innerHTML = mensajeElementos;
}