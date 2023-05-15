const botaoAlterarTema = document.getElementById("botao_alterar_tema");

const body = document.querySelector("body")

const imagemBotaoTrocarTema = document.querySelector(".imagem_botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo_escuro")
    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo_escuro")
        imagemBotaoTrocarTema.setAttribute("src", "./imagens/sun.png")
    } else {
        body.classList.add("modo_escuro")
        imagemBotaoTrocarTema.setAttribute("src", "./imagens/moon.png")
    }
})
