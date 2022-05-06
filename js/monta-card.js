const listaAlunos = document.getElementById("lista-alunos");
let card = ''

function getAlunos(alunos) {
    alunos.forEach(aluno => {

        card += `
            <article class="card col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card__top top">
                    <figure class="card__imgcontainer">
                        <img class="card__img" src="assets/img/manigold.png" alt="imagem usuário">
                    </figure>

                    <div class="card__texts">
                        <span class="card__name">${nullValue(aluno.nm_pessoa, "Nome não informado")}</span>
                        <span class="card__birthdate">${nullValue(aluno.dt_nascimento, "Data de nascimento não informado")}</span>
                    </div>
                </div>

                <div class="card__middle middle">
                    <span class="card__obs-title">Observações</span>
                    <span class="card__obs">${nullValue(aluno.ds_observacao, "Nenhuma observacao informada")}</span>
                </div>

                <div class="card__bottom">
                    <a class="card__a" href="edit-form.html">editar</a>
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
