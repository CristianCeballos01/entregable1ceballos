// Preguntas del juego.

const preguntasJuego = [
  {
    id: 1,
    pregunta: "¿Contra qué equipo perdió Argentina su primer partido de la fase de grupos?",
    opciones: ["México", "Arabia Saudita", "Polonia"],
    respuestaCorrecta: "Arabia Saudita"
  },
  {
    id: 2,
    pregunta: "¿Quién marcó el gol de Argentina en la derrota contra Arabia Saudita?",
    opciones: ["Lionel Messi", "Julián Álvarez", "Enzo Fernández"],
    respuestaCorrecta: "Lionel Messi"
  },
  {
    id: 3,
    pregunta: "¿Quiénes marcaron los goles de Argentina en octavos de final contra Australia?",
    opciones: ["Lionel Messi y Di María", "Julián Álvarez y Messi", "Lautaro Martínez y Di María"],
    respuestaCorrecta: "Julián Álvarez y Messi"
  },
  {
    id: 4,
    pregunta: "¿Cuál fue el resultado del partido de octavos de final entre Argentina y Australia?",
    opciones: ["1-0", "3-1", "2-1"],
    respuestaCorrecta: "2-1"
  },
  {
    id: 5,
    pregunta: "¿Quién marcó el gol de Argentina en los cuartos de final contra Países Bajos, aparte de Messi?",
    opciones: ["Ángel Di María", "Nahuel Molina", "Lautaro Martínez"],
    respuestaCorrecta: "Nahuel Molina"
  },
  {
    id: 6,
    pregunta: "¿Quién marcó los dos goles de Países Bajos contra Argentina en los cuartos de final?",
    opciones: ["Memphis Depay", "Cody Gakpo", "Wout Weghorst"],
    respuestaCorrecta: "Wout Weghorst"
  },
  {
    id: 7,
    pregunta: "¿Quién ganó la tanda de penaltis en los cuartos de final contra Países Bajos?",
    opciones: ["Países Bajos", "Argentina", "Francia"],
    respuestaCorrecta: "Argentina"
  },
  {
    id: 8,
    pregunta: "¿Qué jugador de Argentina ganó el premio al Mejor Jugador Joven del torneo?",
    opciones: ["Julián Álvarez", "Enzo Fernández", "Alexis Mac Allister"],
    respuestaCorrecta: "Enzo Fernández"
  },
  {
    id: 9,
    pregunta: "¿Qué jugador de Argentina ganó el Guante de Oro (mejor portero) del torneo?",
    opciones: ["Emiliano 'Dibu' Martínez", "Franco Armani", "Gerónimo Rulli"],
    respuestaCorrecta: "Emiliano 'Dibu' Martínez"
  },
  {
    id: 10,
    pregunta: "¿Quiénes marcaron los tres goles de Argentina en la semifinal contra Croacia?",
    opciones: ["Messi y Julián Álvarez (2)", "Julián Álvarez y Di María (2)", "Messi (2) y Di María"],
    respuestaCorrecta: "Messi y Julián Álvarez (2)"
  },
  {
    id: 11,
    pregunta: "¿Quién fue el árbitro de la final del Mundial 2022 entre Argentina y Francia?",
    opciones: ["Antonio Mateu Lahoz", "Danny Makkelie", "Szymon Marciniak"],
    respuestaCorrecta: "Szymon Marciniak"
  },
  {
    id: 12,
    pregunta: "¿Quién abrió el marcador en la final del Mundial?",
    opciones: ["Ángel Di María", "Julián Álvarez", "Lionel Messi"],
    respuestaCorrecta: "Lionel Messi"
  },
  {
    id: 13,
    pregunta: "¿Qué jugador de Francia anotó un hat-trick en la final?",
    opciones: ["Olivier Giroud", "Antoine Griezmann", "Kylian Mbappé"],
    respuestaCorrecta: "Kylian Mbappé"
  },
  {
    id: 14,
    pregunta: "¿Quién anotó el segundo gol de Argentina en la final del Mundial?",
    opciones: ["Lionel Messi", "Ángel Di María", "Paulo Dybala"],
    respuestaCorrecta: "Ángel Di María"
  },
  {
    id: 15,
    pregunta: "¿Qué jugador de Argentina fue sustituido en el segundo tiempo de la final?",
    opciones: ["Julián Álvarez", "Enzo Fernández", "Ángel Di María"],
    respuestaCorrecta: "Ángel Di María"
  },
  {
    id: 16,
    pregunta: "¿Quién marcó el gol que puso a Argentina 3-2 en la final, antes de que Francia empatara?",
    opciones: ["Gonzalo Montiel", "Paulo Dybala", "Lionel Messi"],
    respuestaCorrecta: "Lionel Messi"
  },
  {
    id: 17,
    pregunta: "¿Quién fue el encargado de marcar el penalti decisivo en la tanda de la final?",
    opciones: ["Lautaro Martínez", "Gonzalo Montiel", "Paulo Dybala"],
    respuestaCorrecta: "Gonzalo Montiel"
  },
  {
    id: 18,
    pregunta: "¿Cuántos partidos ganó Argentina en total en el torneo (sin contar los penales)?",
    opciones: ["4", "5", "6"],
    respuestaCorrecta: "4"
  },
  {
    id: 19,
    pregunta: "¿Qué puesto ocupó Argentina en su grupo después de la fase de grupos?",
    opciones: ["Primer lugar", "Segundo lugar", "Tercer lugar"],
    respuestaCorrecta: "Primer lugar"
  },
  {
    id: 20,
    pregunta: "¿Quién fue el capitán de la selección argentina en el Mundial de 2022?",
    opciones: ["Lionel Scaloni", "Lionel Messi", "Ángel Di María"],
    respuestaCorrecta: "Lionel Messi"
  }
];

const elementoPregunta = document.getElementById("pregunta");
const elementoOpciones = document.getElementById("opciones");
const elementoPuntaje = document.createElement("p");
document.body.appendChild(elementoPuntaje);

let preguntaIndex = 0;
let puntaje = 0;

function mostrarPuntaje() {
    elementoPuntaje.innerText = `Puntaje: ${puntaje}`;
}

function mostrarPregunta(index) {
    const preguntaActual = preguntasJuego[index];
    
    if (!preguntaActual) {
        return;
    }

    elementoPregunta.innerText = preguntaActual.pregunta;
    elementoOpciones.innerHTML = "";

    preguntaActual.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.innerText = opcion;
        elementoOpciones.appendChild(boton);

        boton.addEventListener("click", () => {
            if (opcion === preguntaActual.respuestaCorrecta) {
                puntaje++; 
                mostrarPuntaje();

                preguntaIndex++;
                
                if (preguntaIndex < preguntasJuego.length) {
                    mostrarPregunta(preguntaIndex);
                } else {
                    guardarPuntaje(); 
                    alert(`¡Felicitaciones! Terminaste el juego. Tu puntaje final es: ${puntaje}`);
                }
            } else {
                alert("Respuesta Incorrecta. El Cuti te va a meter una plancha.");
            }
        });
    });
}

function guardarPuntaje() {
    localStorage.setItem("puntajeFinal", puntaje.toString());
}

mostrarPregunta(preguntaIndex);
mostrarPuntaje();