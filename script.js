// =======================
// GALERIA (IMAGEM AMPLIADA)
// =======================

const imagens = document.querySelectorAll('.galeria-img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('img-modal');
const fechar = document.querySelector('.fechar');

// Abrir imagem no modal
imagens.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

// Fechar ao clicar no X
fechar.onclick = () => {
    modal.style.display = 'none';
};

// Fechar ao clicar fora da imagem
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
};


// =======================
// QUIZ (MÚLTIPLA ESCOLHA)
// =======================

const perguntas = [
    {
        pergunta: "Qual destas é uma energia renovável?",
        alternativas: ["Carvão", "Energia Solar", "Petróleo", "Gás Natural"],
        correta: 1
    },
    {
        pergunta: "O que é compostagem?",
        alternativas: [
            "Transformar resíduos orgânicos em adubo",
            "Queimar lixo",
            "Usar agrotóxicos",
            "Plantar só árvores"
        ],
        correta: 0
    },
    {
        pergunta: "Por que economizar água é importante?",
        alternativas: [
            "Porque a água é infinita",
            "Para preservar os recursos naturais",
            "Para gastar mais energia",
            "Não é importante"
        ],
        correta: 1
    }
];

let indice = 0;
let pontos = 0;

const quizContainer = document.getElementById("quiz-container");
const resultado = document.getElementById("quiz-resultado");

// Mostrar pergunta
function mostrarPergunta() {
    quizContainer.innerHTML = "";

    if (indice < perguntas.length) {
        const atual = perguntas[indice];

        // Pergunta
        const titulo = document.createElement("p");
        titulo.textContent = atual.pergunta;
        quizContainer.appendChild(titulo);

        // Alternativas
        atual.alternativas.forEach((alt, i) => {
            const btn = document.createElement("button");
            btn.textContent = alt;
            btn.classList.add("quiz-btn");

            btn.onclick = () => {
                verificarResposta(i);
            };

            quizContainer.appendChild(btn);
        });

    } else {
        mostrarResultado();
    }
}

// Verificar resposta
function verificarResposta(respostaEscolhida) {
    if (respostaEscolhida === perguntas[indice].correta) {
        pontos++;
    }

    indice++;
    mostrarPergunta();
}

// Mostrar resultado final
function mostrarResultado() {
    quizContainer.innerHTML = "";
    resultado.innerHTML = `🌱 Você acertou ${pontos} de ${perguntas.length} perguntas!`;
}

// Iniciar quiz
mostrarPergunta();
