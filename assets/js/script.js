document.getElementById('piedra').addEventListener('click', function() {
    jugar('piedra');
});
document.getElementById('papel').addEventListener('click', function() {
    jugar('papel');
});
document.getElementById('tijeras').addEventListener('click', function() {
    jugar('tijeras');
});

// número de rondas
function solicitarNumeroVeces() {
    var veces = prompt("¿Cuántas rondas de Cachipún deseas jugar?");
    
    // número válido
    if (veces === null || veces === "") {
        alert("Por favor, ingresa un número válido.");
        solicitarNumeroVeces(); // Se solicita nuevamente
    } else {
        var numVeces = parseInt(veces);
        if (isNaN(numVeces) || numVeces <= 0) {
            alert("Por favor, ingresa un número válido mayor que cero.");
            solicitarNumeroVeces();
        } else {
            alert("Jugarás " + numVeces + " veces al juego.");
        }
    }
}

//función para iniciar el juego
solicitarNumeroVeces() ;


function jugar(eleccionJugador) {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
    let resultado;

    if (eleccionJugador === eleccionComputadora) {
        resultado = "¡Empate!";
    } else if (
        (eleccionJugador === 'piedra' && eleccionComputadora === 'tijeras') ||
        (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionJugador === 'tijeras' && eleccionComputadora === 'papel')
    ) {
        resultado = "¡Ganaste!";
    } else {
        resultado = "¡Perdiste!";
    }

document.getElementById("resultado").innerHTML = `Elegiste ${eleccionJugador}. La computadora eligió ${eleccionComputadora}. ${resultado}`;

    // Alerta resultado
    alert(`Elegiste ${eleccionJugador}. La computadora eligió ${eleccionComputadora}. ${resultado}`);
}