// 1. Array de preguntes
const preguntes = [
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0001.jpg",
        opcions: ["1", "0", "3", "4"],
        respostaCorrecta: "1"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0002.jpg",
        opcions: ["1", "2", "3", "4"],
        respostaCorrecta: "2"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0003.jpg",
        opcions: ["1", "2", "3", "4"],
        respostaCorrecta: "3"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0004.jpg",
        opcions: ["1", "2", "3", "4"],
        respostaCorrecta: "4"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0005.jpg",
        opcions: ["7", "5", "6", "4"],
        respostaCorrecta: "5"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0006.jpg",
        opcions: ["7", "5", "6", "4"],
        respostaCorrecta: "6"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0007.jpg",
        opcions: ["7", "5", "6", "8"],
        respostaCorrecta: "8"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0008.jpg",
        opcions: ["7", "10", "6", "8"],
        respostaCorrecta: "10"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0009.jpg",
        opcions: ["5", "10", "6", "8"],
        respostaCorrecta: "5"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0010.jpg",
        opcions: ["5", "10", "6", "8"],
        respostaCorrecta: "10"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0011.jpg",
        opcions: ["5", "10", "15", "20"],
        respostaCorrecta: "15"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0012.jpg",
        opcions: ["5", "10", "15", "20"],
        respostaCorrecta: "20"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0013.jpg",
        opcions: ["30", "25", "15", "20"],
        respostaCorrecta: "25"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0014.jpg",
        opcions: ["30", "25", "35", "20"],
        respostaCorrecta: "30"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0015.jpg",
        opcions: ["30", "25", "35", "20"],
        respostaCorrecta: "35"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0016.jpg",
        opcions: ["40", "45", "50", "55"],
        respostaCorrecta: "40"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0017.jpg",
        opcions: ["40", "45", "50", "55"],
        respostaCorrecta: "45"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0018.jpg",
        opcions: ["40", "45", "50", "55"],
        respostaCorrecta: "50"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0019.jpg",
        opcions: ["60", "45", "50", "55"],
        respostaCorrecta: "55"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0020.jpg",
        opcions: ["60", "65", "50", "55"],
        respostaCorrecta: "60"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0021.jpg",
        opcions: ["3", "6", "9", "12"],
        respostaCorrecta: "3"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0022.jpg",
        opcions: ["3", "6", "9", "12"],
        respostaCorrecta: "6"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0023.jpg",
        opcions: ["15", "6", "9", "12"],
        respostaCorrecta: "9"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0024.jpg",
        opcions: ["15", "18", "9", "12"],
        respostaCorrecta: "12"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0025.jpg",
        opcions: ["15", "18", "21", "12"],
        respostaCorrecta: "15"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0026.jpg",
        opcions: ["15", "18", "21", "24"],
        respostaCorrecta: "18"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0027.jpg",
        opcions: ["27", "18", "21", "24"],
        respostaCorrecta: "21"
    },
    {
        pregunta: "Quin número és aquest?",
        imatge: "img/0028.jpg",
        opcions: ["27", "30", "21", "24"],
        respostaCorrecta: "24"
    }
];

// Funció per barrejar elements de manera aleatòria (Fisher-Yates)
function barrejarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Barregem l'ordre de les preguntes en iniciar el joc
barrejarArray(preguntes);

// Seleccionar elements del DOM
const textPregunta = document.getElementById("text-pregunta");
const opcionsContainer = document.getElementById("opcions-container");
const btnSeguent = document.getElementById("btn-seguent");
const spanProgres = document.getElementById("progres");
const spanPuntuacio = document.getElementById("puntuacio");
const imgPregunta = document.getElementById("imatge-pregunta");

// Variables d'estat del joc
let preguntaActualIndex = 0;
let puntuacio = 0;

// Variables del temporitzador
let temporitzador;
let tempsRestant = 25;

// Funció per iniciar el compte enrere
function iniciarTemps() {
    tempsRestant = 25;
    const spanTemps = document.getElementById("temps");
    spanTemps.textContent = `Temps: ${tempsRestant}s`;

    clearInterval(temporitzador);

    temporitzador = setInterval(() => {
        tempsRestant--;
        spanTemps.textContent = `Temps: ${tempsRestant}s`;

        if (tempsRestant <= 0) {
            clearInterval(temporitzador);
            tempsAgotat();
        }
    }, 1000);
}

// Què passa si s'acaba el temps
function tempsAgotat() {
    const botons = opcionsContainer.querySelectorAll(".btn-opcio");
    botons.forEach(boto => boto.disabled = true);

    const dadesPregunta = preguntes[preguntaActualIndex];
    botons.forEach(boto => {
        if (boto.textContent === dadesPregunta.respostaCorrecta) {
            boto.classList.add("correcta");
        }
    });

    btnSeguent.classList.remove("ocult");
}

// Funció per carregar la pregunta
function carregarPregunta() {
    deseleccionarRespostes();
    
    if (preguntaActualIndex >= preguntes.length) {
        mostrarResultatFinal();
        return;
    }

    const dadesPregunta = preguntes[preguntaActualIndex];
    
    spanProgres.textContent = `Pregunta ${preguntaActualIndex + 1} de ${preguntes.length}`;
    textPregunta.textContent = dadesPregunta.pregunta;

    // Gestió de la imatge
    if (dadesPregunta.imatge && dadesPregunta.imatge.trim() !== "") {
        imgPregunta.src = dadesPregunta.imatge;
        imgPregunta.classList.remove("ocult");
    } else {
        imgPregunta.classList.add("ocult");
    }

    // Barrejar les opcions de resposta d'aquesta pregunta (només un cop)
    const opcionsBarrejades = [...dadesPregunta.opcions];
    barrejarArray(opcionsBarrejades);

    // Generar els botons amb les opcions barrejades
    opcionsContainer.innerHTML = "";
    opcionsBarrejades.forEach(opcio => {
        const boto = document.createElement("button");
        boto.classList.add("btn-opcio");
        boto.textContent = opcio;
        boto.addEventListener("click", () => seleccionarResposta(boto, dadesPregunta.respostaCorrecta));
        opcionsContainer.appendChild(boto);
    });

    btnSeguent.classList.add("ocult");

    // Engegar el temporitzador per a aquesta pregunta
    iniciarTemps();
}

// Funció en fer clic a una opció
function seleccionarResposta(botoSeleccionat, respostaCorrecta) {
    // Aturem el temporitzador perquè ja han respost
    clearInterval(temporitzador);

    const respostaUsuari = botoSeleccionat.textContent;
    const botons = opcionsContainer.querySelectorAll(".btn-opcio");

    botons.forEach(boto => boto.disabled = true);

    if (respostaUsuari === respostaCorrecta) {
        botoSeleccionat.classList.add("correcta");
        puntuacio += 10;
        spanPuntuacio.textContent = `Punts: ${puntuacio}`;
    } else {
        botoSeleccionat.classList.add("incorrecta");
        botons.forEach(boto => {
            if (boto.textContent === respostaCorrecta) {
                boto.classList.add("correcta");
            }
        });
    }

    btnSeguent.classList.remove("ocult");
}

function deseleccionarRespostes() {
    // Funció de suport
}

// Event del botó "Següent"
btnSeguent.addEventListener("click", () => {
    preguntaActualIndex++;
    carregarPregunta();
});

// Funció quan s'acaba el trivial
function mostrarResultatFinal() {
    clearInterval(temporitzador);
    imgPregunta.classList.add("ocult");
    
    document.getElementById("zona-pregunta").innerHTML = `
        <h2>¡Joc finalitzat! 🎉</h2>
        <p style="text-align: center; margin-top: 15px; font-size: 1.2rem;">
            Has aconseguit <strong>${puntuacio}</strong> de ${preguntes.length * 10} punts possibles.
        </p>
    `;
    btnSeguent.textContent = "Tornar a jugar";
    btnSeguent.classList.remove("ocult");
    
    btnSeguent.onclick = () => {
        location.reload();
    };
}

// Iniciar el joc
carregarPregunta();