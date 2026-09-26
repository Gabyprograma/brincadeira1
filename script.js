const titulo = document.getElementById("titulo");
const mensagem = document.getElementById("mensagem");
const botoes = document.querySelector(".botoes");

function sim() {
    titulo.textContent = "EU AVISEI 👀💜";

    mensagem.innerHTML = `
        Você realmente clicou KKKKK 😂<br><br>
        <strong>Te amo, viado💜</strong>
    `;

    botoes.innerHTML = `
        <button onclick="voltar()">Abrir de novo 🔄</button>
    `;

    criarCoracoes();
}

function nao() {
    titulo.textContent = "KKKKKK 😈";

    mensagem.innerHTML = `
        Você clicou em <strong>NÃO CLIQUE</strong>...<br><br>
        🤡 Pegadinha!
    `;

    botoes.innerHTML = `
        <button onclick="sim()">Tá bom, vou clicar 👀</button>
    `;
}

function voltar() {
    titulo.textContent = "Caixinha";
    mensagem.textContent = "Quer ver? 👀";

    botoes.innerHTML = `
        <button onclick="sim()">CLIQUE 💌</button>
        <button onclick="nao()">NÃO CLIQUE 😈</button>
    `;
}

function criarCoracoes() {
    for (let i = 0; i < 15; i++) {
        const coracao = document.createElement("div");

        coracao.className = "coracao";
        coracao.textContent = "💜";
        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.bottom = "-30px";
        coracao.style.animationDelay = Math.random() * 1.5 + "s";

        document.body.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 4000);
    }
}
