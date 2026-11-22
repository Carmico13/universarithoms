// 1. Banc de preguntes per nivells
const bancPreguntes = {
    nivell1: [
        { pregunta: "Quin número és aquest?", imatge: "img/0001.jpg", opcions: ["1", "0", "3", "4"], respostaCorrecta: "1" },
        { pregunta: "Quin número és aquest?", imatge: "img/0002.jpg", opcions: ["1", "2", "3", "4"], respostaCorrecta: "2" },
        { pregunta: "Quin número és aquest?", imatge: "img/0003.jpg", opcions: ["1", "2", "3", "4"], respostaCorrecta: "3" },
        { pregunta: "Quin número és aquest?", imatge: "img/0004.jpg", opcions: ["1", "2", "3", "4"], respostaCorrecta: "4" },
        { pregunta: "Quin número és aquest?", imatge: "img/0005.jpg", opcions: ["7", "5", "6", "4"], respostaCorrecta: "5" },
        { pregunta: "Quin número és aquest?", imatge: "img/0006.jpg", opcions: ["7", "5", "6", "4"], respostaCorrecta: "6" },
        { pregunta: "Quin número és aquest?", imatge: "img/0007.jpg", opcions: ["7", "5", "6", "8"], respostaCorrecta: "8" },
        { pregunta: "Quin número és aquest?", imatge: "img/0008.jpg", opcions: ["7", "10", "6", "8"], respostaCorrecta: "10" }
    ],

    nivell2: [
        { pregunta: "Quin número és aquest?", imatge: "img/0009.jpg", opcions: ["5", "10", "6", "8"], respostaCorrecta: "5" },
        { pregunta: "Quin número és aquest?", imatge: "img/0010.jpg", opcions: ["5", "10", "6", "8"], respostaCorrecta: "10" },
        { pregunta: "Quin número és aquest?", imatge: "img/0011.jpg", opcions: ["5", "10", "15", "20"], respostaCorrecta: "15" },
        { pregunta: "Quin número és aquest?", imatge: "img/0012.jpg", opcions: ["5", "10", "15", "20"], respostaCorrecta: "20" },
        { pregunta: "Quin número és aquest?", imatge: "img/0013.jpg", opcions: ["30", "25", "15", "20"], respostaCorrecta: "25" },
        { pregunta: "Quin número és aquest?", imatge: "img/0014.jpg", opcions: ["30", "25", "35", "20"], respostaCorrecta: "30" },
        { pregunta: "Quin número és aquest?", imatge: "img/0015.jpg", opcions: ["30", "25", "35", "20"], respostaCorrecta: "35" },
        { pregunta: "Quin número és aquest?", imatge: "img/0016.jpg", opcions: ["40", "45", "50", "55"], respostaCorrecta: "40" },
        { pregunta: "Quin número és aquest?", imatge: "img/0017.jpg", opcions: ["40", "45", "50", "55"], respostaCorrecta: "45" },
        { pregunta: "Quin número és aquest?", imatge: "img/0018.jpg", opcions: ["40", "45", "50", "55"], respostaCorrecta: "50" },
        { pregunta: "Quin número és aquest?", imatge: "img/0019.jpg", opcions: ["60", "45", "50", "55"], respostaCorrecta: "55" },
        { pregunta: "Quin número és aquest?", imatge: "img/0020.jpg", opcions: ["60", "65", "50", "55"], respostaCorrecta: "60" }
    ],

    nivell3: [
        { pregunta: "Quin número és aquest?", imatge: "img/0021.jpg", opcions: ["3", "6", "9", "12"], respostaCorrecta: "3" },
        { pregunta: "Quin número és aquest?", imatge: "img/0022.jpg", opcions: ["3", "6", "9", "12"], respostaCorrecta: "6" },
        { pregunta: "Quin número és aquest?", imatge: "img/0023.jpg", opcions: ["15", "6", "9", "12"], respostaCorrecta: "9" },
        { pregunta: "Quin número és aquest?", imatge: "img/0024.jpg", opcions: ["15", "18", "9", "12"], respostaCorrecta: "12" },
        { pregunta: "Quin número és aquest?", imatge: "img/0025.jpg", opcions: ["15", "18", "21", "12"], respostaCorrecta: "15" },
        { pregunta: "Quin número és aquest?", imatge: "img/0026.jpg", opcions: ["15", "18", "21", "24"], respostaCorrecta: "18" },
        { pregunta: "Quin número és aquest?", imatge: "img/0027.jpg", opcions: ["27", "18", "21", "24"], respostaCorrecta: "21" },
        { pregunta: "Quin número és aquest?", imatge: "img/0028.jpg", opcions: ["27", "30", "21", "24"], respostaCorrecta: "24" }
    ]
};

// Barrejar array (Fisher-Yates)
function barrejarArray(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function obtenirRonda(nivell, quantitat = 10) {
    const preguntesNivell = bancPreguntes[nivell] || [];
    const barrejades = barrejarArray(preguntesNivell);
    return barrejades.slice(0, quantitat);
}

// Elements del DOM
const pantallaInici = document.getElementById("pantalla-inici");
const pantallaJoc = document.getElementById("pantalla-joc");
const zonaPregunta = document.getElementById("zona-pregunta");
const btnSeguent = document.getElementById("btn-seguent");
const btnTornarInici = document.getElementById("btn-tornar-inici");
const spanProgres = document.getElementById("progres");
const spanPuntuacio = document.getElementById("puntuacio");
const botonsNivell = document.querySelectorAll(".btn-nivell");

// Estat del joc
let nivellActual = "nivell1";
let preguntesRonda = [];
let preguntaActualIndex = 0;
let puntuacio = 0;

// Temporitzador
let temporitzador;
let tempsRestant = 25;

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

function tempsAgotat() {
    const contenidorOpcions = document.getElementById("opcions-container");
    const botons = contenidorOpcions.querySelectorAll(".btn-opcio");
    botons.forEach(boto => (boto.disabled = true));

    const dadesPregunta = preguntesRonda[preguntaActualIndex];
    botons.forEach(boto => {
        if (boto.textContent === dadesPregunta.respostaCorrecta) {
            boto.classList.add("correcta");
        }
    });

    btnSeguent.classList.remove("ocult");
}

function restaurarEstructuraZonaPregunta() {
    zonaPregunta.innerHTML = `
        <h2 id="text-pregunta">Aquí anirà la pregunta...</h2>
        <img id="imatge-pregunta" class="ocult" src="" alt="Imatge de la pregunta">
        <div id="opcions-container" class="graella-opcions"></div>
    `;
}

function iniciarPartida(nivellSeleccionat) {
    nivellActual = nivellSeleccionat;
    preguntesRonda = obtenirRonda(nivellSeleccionat, 10);
    preguntaActualIndex = 0;
    puntuacio = 0;
    spanPuntuacio.textContent = `Punts: ${puntuacio}`;

    // Canvi de pantalla: amaguem l'inici i mostrem el joc
    pantallaInici.classList.add("ocult");
    pantallaJoc.classList.remove("ocult");

    btnSeguent.textContent = "Següent pregunta";
    btnSeguent.onclick = null;
    btnTornarInici.classList.add("ocult");

    restaurarEstructuraZonaPregunta();
    carregarPregunta();
}

function tornarAPantallaInici() {
    clearInterval(temporitzador);
    pantallaJoc.classList.add("ocult");
    pantallaInici.classList.remove("ocult");
}

function carregarPregunta() {
    if (preguntaActualIndex >= preguntesRonda.length) {
        mostrarResultatFinal();
        return;
    }

    const h2Pregunta = document.getElementById("text-pregunta");
    const imgActual = document.getElementById("imatge-pregunta");
    const contenidorOpcions = document.getElementById("opcions-container");

    const dadesPregunta = preguntesRonda[preguntaActualIndex];

    spanProgres.textContent = `Pregunta ${preguntaActualIndex + 1} de ${preguntesRonda.length}`;
    h2Pregunta.textContent = dadesPregunta.pregunta;

    if (dadesPregunta.imatge && dadesPregunta.imatge.trim() !== "") {
        imgActual.src = dadesPregunta.imatge;
        imgActual.classList.remove("ocult");
    } else {
        imgActual.classList.add("ocult");
    }

    const opcionsBarrejades = barrejarArray(dadesPregunta.opcions);
    contenidorOpcions.innerHTML = "";

    opcionsBarrejades.forEach(opcio => {
        const boto = document.createElement("button");
        boto.type = "button";
        boto.classList.add("btn-opcio");
        boto.textContent = opcio;
        boto.addEventListener("click", () => seleccionarResposta(boto, dadesPregunta.respostaCorrecta, contenidorOpcions));
        contenidorOpcions.appendChild(boto);
    });

    btnSeguent.classList.add("ocult");
    iniciarTemps();
}

function seleccionarResposta(botoSeleccionat, respostaCorrecta, contenidorOpcions) {
    clearInterval(temporitzador);

    const respostaUsuari = botoSeleccionat.textContent;
    const botons = contenidorOpcions.querySelectorAll(".btn-opcio");
    botons.forEach(boto => (boto.disabled = true));

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

btnSeguent.addEventListener("click", () => {
    preguntaActualIndex++;
    carregarPregunta();
});

btnTornarInici.addEventListener("click", tornarAPantallaInici);

function mostrarResultatFinal() {
    clearInterval(temporitzador);

    zonaPregunta.innerHTML = `
        <h2 style="text-align: center;">Joc finalitzat! 🎉</h2>
        <p style="text-align: center; margin-top: 15px; font-size: 1.2rem;">
            Has aconseguit <strong>${puntuacio}</strong> de ${preguntesRonda.length * 10} punts possibles.
        </p>
    `;

    btnSeguent.textContent = "Tornar a jugar aquest nivell";
    btnSeguent.classList.remove("ocult");
    btnSeguent.onclick = () => {
        iniciarPartida(nivellActual);
    };

    btnTornarInici.classList.remove("ocult");
}

// Events dels botons de la pantalla d'inici
botonsNivell.forEach(boto => {
    boto.addEventListener("click", () => {
        iniciarPartida(boto.dataset.nivell);
    });
});

const CLAU_PODI = "univers_arithmos_podi_v1";
const inputNom = document.getElementById("input-nom");

function obtenirNomJugador() {
    const nom = inputNom ? inputNom.value.trim() : "";
    return nom || "Jugador/a";
}

function carregarPodiComplet() {
    try {
        const dades = JSON.parse(localStorage.getItem(CLAU_PODI));
        return dades && typeof dades === "object" ? dades : {};
    } catch {
        return {};
    }
}

function guardarResultatAlPodi(nivell, nom, punts) {
    const podiComplet = carregarPodiComplet();
    const llistaNivell = Array.isArray(podiComplet[nivell]) ? podiComplet[nivell] : [];

    llistaNivell.push({
        nom,
        punts,
        data: new Date().toLocaleDateString("ca-ES")
    });

    // Ordena de més punts a menys punts i es queda amb els 3 millors
    llistaNivell.sort((a, b) => b.punts - a.punts);
    podiComplet[nivell] = llistaNivell.slice(0, 3);

    localStorage.setItem(CLAU_PODI, JSON.stringify(podiComplet));
    return podiComplet[nivell];
}

function generarHTMLPodi(nivell, nomJugador, puntsActuals) {
    const top3 = guardarResultatAlPodi(nivell, nomJugador, puntsActuals);
    const medalles = ["🥇", "🥈", "🥉"];

    const filesHTML = top3
        .map((entrada, index) => {
            const medalla = medalles[index] || `${index + 1}.`;
            return `
                <li class="podi-item pos-${index + 1}">
                    <span>${medalla} ${entrada.nom}</span>
                    <span>${entrada.punts} pts</span>
                </li>
            `;
        })
        .join("");

    return `
        <div class="podi-contenidor">
            <h3>Podi — ${nivell.toUpperCase()}</h3>
            <ul class="podi-llista">${filesHTML}</ul>
        </div>
    `;
}

function mostrarResultatFinal() {
    clearInterval(temporitzador);

    const nomJugador = obtenirNomJugador();
    const htmlPodi = generarHTMLPodi(nivellActual, nomJugador, puntuacio);

    zonaPregunta.innerHTML = `
        <h2 style="text-align: center;">Joc finalitzat! 🎉</h2>
        <p style="text-align: center; margin-top: 15px; font-size: 1.2rem;">
            <strong>${nomJugador}</strong>, has aconseguit <strong>${puntuacio}</strong> de ${preguntesRonda.length * 10} punts possibles.
        </p>
        ${htmlPodi}
    `;

    btnSeguent.textContent = "Tornar a jugar aquest nivell";
    btnSeguent.classList.remove("ocult");
    btnSeguent.onclick = () => {
        iniciarPartida(nivellActual);
    };

    btnTornarInici.classList.remove("ocult");
}