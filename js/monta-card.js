const listaAlunos = document.getElementById("lista-alunos");
let card = '';

function getAlunos(alunos) {
    alunos.forEach(aluno => {

        card += `
            <article class="card col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card__top top">
                    <figure class="card__imgcontainer">
                        <img class="card__img" src="assets/img/manigold.png" alt="imagem usuário">
                    </figure>
                </div>

                <span class="card__name">${nullValue(aluno.nm_pessoa, "Nome não informado")}</span>
                <span class="card__birthdate">${nullValue(aluno.dt_nascimento, "Data de nascimento não informado")}</span>

                <span class="card__obs-title">Observações</span>
                <span class="card__obs">${nullValue(aluno.ds_observacao, "Nenhuma observacao informada")}</span>

                <button class="card__a" data-bs-toggle="modal" data-bs-target="#modal" id="editar">editar</button>

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
