const buttonReset = document.querySelector(".restart-button");
const celulas = document.querySelectorAll(".table");
const table1 = document.querySelector(".table1");
const table2 = document.querySelector(".table2");
const table3 = document.querySelector(".table3");
const table4 = document.querySelector(".table4");
const table5 = document.querySelector(".table5");
const table6 = document.querySelector(".table6");
const table7 = document.querySelector(".table7");
const table8 = document.querySelector(".table8");
const table9 = document.querySelector(".table9");
let vezDoJogador = "X";

//função para exibir simbolo e trocar de jogador
function simbolo(event) {
    const celulaClicada = event.currentTarget;
    const buttonX = celulaClicada.querySelector(".x");
    const buttonO = celulaClicada.querySelector(".o");

    if (!buttonX.classList.contains("visible") && !buttonO.classList.contains("visible")) {
        if (vezDoJogador === "X") {
            buttonX.classList.add("visible");
            vezDoJogador = "O";
            verificarVitoria();
        } else {
            buttonO.classList.add("visible");
            vezDoJogador = "X";
            verificarVitoria();
        }
    }
}

celulas.forEach(celula => {
    celula.addEventListener("click", simbolo);
});

// Função para reiniciar o jogo
function reiniciarJogo() {
    // Lógica para reiniciar o jogo
    celulas.forEach(celula => {
        celula.querySelector(".x").classList.remove("visible");
        celula.querySelector(".o").classList.remove("visible");
    });
    vezDoJogador = "X"; // Resetar a vez do jogador para X
}

// Adiciona event listener para o botão de reinício
buttonReset.addEventListener("click", reiniciarJogo);

//funcao para ganhar o jogo
const combinacoesVitoria = [
    [table1, table2, table3],
    [table4, table5, table6],
    [table7, table8, table9],
    [table1, table4, table7],
    [table2, table5, table8],
    [table3, table6, table9],
    [table1, table5, table9],
    [table3, table5, table7]
];

function verificarVitoria() {
    let vencedor = null;
    for (let i = 0; i < combinacoesVitoria.length; i++) {
        const [celula1, celula2, celula3] = combinacoesVitoria[i];
        if (
            celula1.querySelector(".x").classList.contains("visible") &&
            celula2.querySelector(".x").classList.contains("visible") &&
            celula3.querySelector(".x").classList.contains("visible")
        ) {
            vencedor = "X";
        } else if (
            celula1.querySelector(".o").classList.contains("visible") &&
            celula2.querySelector(".o").classList.contains("visible") &&
            celula3.querySelector(".o").classList.contains("visible")
        ) {
            vencedor = "O";
        }
    }

    if (vencedor) {
        setTimeout(() => {
            alert("Jogador " + vencedor + " venceu!");
            reiniciarJogo();
        }, 10);
    }
}