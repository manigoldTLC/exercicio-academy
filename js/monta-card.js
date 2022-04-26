function addNome(dado) {
    let nome = document.createElement("span");
    nome.classList.add("card__name");
    nome.textContent = dado;

    return nome;
}

function addAniversario(dado) {

    let aniversario = document.createElement("span");
    aniversario.classList.add("card__birthdate");
    aniversario.textContent = dado;

    return aniversario;
}

function addObservacao(dado) {
    let observacao = document.createElement("span");
    observacao.classList.add("card__obs");
    observacao.textContent = dado;

    return observacao;
}


function cardAluno(aluno) {
    let card = document.createElement("article");
    const listaClassesCard = ["card", "col-12", "col-md-6", "col-lg-4", "col-xl-3"]

    listaClassesCard.forEach(classe => {
        card.classList.add(classe)
    })

    let cardTop = document.createElement("div");
    cardTop.classList.add("card__top");
    cardTop.classList.add("top");

    let cardMiddle = document.createElement("div");
    cardMiddle.classList.add("card__middle");
    cardMiddle.classList.add("middle");

    let cardBottom = document.createElement("div");
    cardBottom.classList.add("card__bottom");

    let linkCard = document.createElement("a");
    linkCard.classList.add("card__a");
    linkCard.href = "#";
    linkCard.textContent = "editar";

    cardBottom.appendChild(linkCard);

    let middleTitle = document.createElement("span");
    middleTitle.classList.add("card__obs-title");
    middleTitle.textContent = "Observações";

    cardMiddle.appendChild(middleTitle);
    cardMiddle.appendChild(addObservacao(aluno.ds_observacao));

    let figureCard = document.createElement("figure");
    figureCard.classList.add("card__imgcontainer");

    let imagemCard = document.createElement("img");
    imagemCard.classList.add("card__img");
    imagemCard.src = "assets/img/manigold.png";
    imagemCard.alt = "imagem usuário";

    figureCard.appendChild(imagemCard);

    let cardTexts = document.createElement("div");
    cardTexts.classList.add("card__texts");

    cardTexts.appendChild(addNome(aluno.nm_pessoa));
    cardTexts.appendChild(addAniversario(aluno.dt_nascimento));

    cardTop.appendChild(figureCard);
    cardTop.appendChild(cardTexts);

    card.appendChild(cardTop);
    card.appendChild(cardMiddle);
    card.appendChild(cardBottom);

    return card;
}

function adicionaCardSecao(aluno) {
    let alunoCard = cardAluno(aluno);
    let secao = document.querySelector("#secao");
    secao.appendChild(alunoCard)
}
