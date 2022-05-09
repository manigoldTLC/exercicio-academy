const listaAlunos = document.getElementById("lista-alunos");
let card = '';

function getAlunos(alunos) {
    alunos.forEach(aluno => {

        card += `
            <article class="card col-xl-3 col-lg-4">
                <img class="card__img" src="assets/img/manigold.png" alt="imagem usuário">

                <div class="card__conteudo" data-id=${aluno.nr_sequencia}>
                    <span class="card__name">${nullValue(aluno.nm_pessoa, "não informado")}</span>
                    <span class="card__birthdate">${tranformDate(aluno.dt_nascimento, "não informado")}</span>
                
                    <span class="card__title-dados">Dados do aluno</span>

                    <span class="card__left">${nullValue(aluno.ds_email, "não informado")}</span>
                    <span class="card__right">${nullValue(aluno.ds_cpf, "não informado")}</span>
                    <span class="card__left">${nullValue(aluno.ds_telefone, "não informado")}</span>
                    <span class="card__right">${nullValue(aluno.ds_estado, "não informado")}</span>

                    <span class="card__title-obs">Observações</span>
                    <span class="card__obs">${nullValue(aluno.ds_observacao, "Nenhuma observacao informada")}</span>

                    <button class="card__button" data-bs-toggle="modal" data-bs-target="#modal" id="editar">editar</button>
                </div>

            </article>
        `;
    });

    listaAlunos.innerHTML = card;
}

function nullValue(aluno, mensagem) {
    if (!aluno) {
        return mensagem;
    }
    
    else return aluno;
}

function tranformDate(date, mensagem) {
    if (!date) {
        return mensagem;
    }

    return date.split("-").reverse().join("/")
}
