const alunos = document.getElementById("lista-alunos");

const nomeValue = document.querySelector("#nome");
const nascimentoValue = document.querySelector("#nascimento");
const observacaoValue = document.querySelector("#message-text");

alunos.addEventListener("click", (e) => {
    e.preventDefault();

    let botaoEditar = e.target.id == "editar";

    if (botaoEditar) {
        const parent = e.target.parentNode;

        let nomeContent = parent.querySelector(".card__name").textContent;
        let nascimentoContent = parent.querySelector(".card__birthdate").textContent;
        let observacaoContent = parent.querySelector(".card__obs").textContent;

        nomeValue.value = nomeContent;
        nascimentoValue.value = nascimentoContent;
        observacaoValue.value = observacaoContent;
    }
})